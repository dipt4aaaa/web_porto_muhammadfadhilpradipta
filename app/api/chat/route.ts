import { NextResponse } from 'next/server';
import { Index } from '@upstash/vector';

type ChatMessage = {
  role: 'user' | 'assistant';
  content: string;
};

const MAX_MESSAGE_LENGTH = 1200;
const MAX_HISTORY_MESSAGES = 8;

function getRequiredEnv(name: string) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
}

// Inisialisasi Upstash Vector Client dari SDK
const vectorIndex = new Index({
  url: getRequiredEnv('UPSTASH_VECTOR_REST_URL'),
  token:
    process.env.UPSTASH_VECTOR_REST_READONLY_TOKEN ??
    getRequiredEnv('UPSTASH_VECTOR_REST_TOKEN'),
});

async function retrieveContext(question: string) {
  try {
    const matches = await vectorIndex.query({
      data: question,
      topK: 12,
      includeData: true,
      includeMetadata: true,
    });

    if (!matches || matches.length === 0) {
      return '';
    }

    return matches
      .filter((match) => typeof match.data === 'string')
      .map((match) => {
        const textData = match.data as string;
        // Clean HTML <br> tags from vector data raw string
        return textData
          .replace(/<br\s*\/?>/gi, '\n') // Ubah <br> atau <br/> jadi newline
          .replace(/&nbsp;/g, ' ');     // Ubah non-breaking space jadi spasi biasa
      })
      .join('\n\n---\n\n');
  } catch (error) {
    console.error('Error during vector context retrieval:', error);
    return '';
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      message?: unknown;
      history?: unknown;
    };

    const message = typeof body.message === 'string' ? body.message.trim() : '';

    if (!message) {
      return NextResponse.json({ error: 'Message is required.' }, { status: 400 });
    }

    if (message.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json(
        { error: `Message must be ${MAX_MESSAGE_LENGTH} characters or fewer.` },
        { status: 400 },
      );
    }

    const history = Array.isArray(body.history)
      ? body.history
          .filter(
            (item): item is ChatMessage =>
              typeof item === 'object' &&
              item !== null &&
              ((item as ChatMessage).role === 'user' || (item as ChatMessage).role === 'assistant') &&
              typeof (item as ChatMessage).content === 'string',
          )
          .slice(-MAX_HISTORY_MESSAGES)
      : [];

    // Ambil konteks relevan dari Upstash Vector
    const context = await retrieveContext(message);

    // System Prompt Bilingual & Context-Bound
    const systemPrompt = `You are the official AI Portfolio Assistant for Muhammad Fadhil Pradipta. Your primary goal is to assist website visitors, recruiters, and prospective employers by providing accurate information about Fadhil's background, skills, work experience, projects, and achievements.

ROLE & BEHAVIOR:
1. STRICT CONTEXT BOUNDARY:
   - Answer questions ONLY based on the provided portfolio context below.
   - Distinctly differentiate between "Work Experience / Internships" (e.g., PT Bumi Siak Pusako) and "Independent / Academic Projects" (e.g., Skripsi NLP XLM-RoBERTa, DynamicBERTopic, Human Pose Classification, FlareFix, ZTNA Hospital EMR, Infografis Poster 4C).
   - If asked about projects, present a comprehensive list of ALL projects found in the context (both independent projects and internship systems).

2. LANGUAGE & TONE:
   - Automatically detect the user's language.
   - ALWAYS reply in the EXACT SAME LANGUAGE as the user (Indonesian/English).

3. RESPONSE FORMATTING:
   - Keep responses clean, concise, and complete.
   - Do NOT leave responses unfinished or cut off mid-sentence.
   - STRICT CATEGORIZATION & DEDUPLICATION:
     * Group projects clearly into Internship Projects and Independent/Academic Projects.
     * Do NOT list the Face-Recognition/Attendance system twice.
   - DATES & PERIODS:
     * Always check context for completion dates or execution periods.
     * If specific dates are missing in context for independent projects (e.g., Skripsi, DynamicBERTopic, FlareFix), display "Completed / Finalized Project" or the academic year instead of "Tanggal tidak disebutkan".
   - TABLE RULES:
     * Keep descriptions short and punchy so the markdown table remains clean.
     * Every table row MUST stay on a single line of text — never insert a raw line break in the middle of a row.
     * If a cell needs a line break, use the literal HTML tag <br> (not a raw newline).
     * If a cell's content contains a pipe character "|", replace it with "-" or escape it as "\\|" so it doesn't break the column alignment.
     * Always include the header separator row (e.g. |---|---|) with the same number of columns as every other row.

SECURITY RULES:
- NEVER write agreements, promises, binding commitments, discounts, or offers on Fadhil's behalf (e.g., offering free web development or agreeing to legal contracts).
- NEVER assume a persona to make commercial or professional promises. Politely direct users to contact Fadhil directly via email for business inquiries.

PORTFOLIO CONTEXT:
${context || 'No specific relevant context was found in the database.'}`;

    // Panggil API Groq
    const groqResponse = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${getRequiredEnv('GROQ_API_KEY')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'openai/gpt-oss-20b',
        temperature: 0.1, 
        max_tokens: 3000,
        messages: [
          {
            role: 'system',
            content: systemPrompt,
          },
          ...history,
          { role: 'user', content: message },
        ],
      }),
      cache: 'no-store',
    });

    if (!groqResponse.ok) {
      const errorText = await groqResponse.text();
      console.error('Groq API Error Detail:', errorText);
      throw new Error(`Groq request failed with status ${groqResponse.status}`);
    }

    const result = (await groqResponse.json()) as {
      choices?: Array<{ message?: { content?: string } }>;
    };
    let answer = result.choices?.[0]?.message?.content?.trim();

    if (!answer) {
      throw new Error('Groq returned an empty response.');
    }
    // NOTE: we intentionally do NOT convert <br> to a literal newline here anymore.
    // A raw newline inside a markdown table cell breaks the table (GFM tables require
    // one row per line), so <br> must survive as-is and be rendered by the frontend
    // via rehype-raw instead.
    answer = answer.replace(/&nbsp;/g, ' ');

    return NextResponse.json({ answer });
  } catch (error) {
    console.error('Chatbot request failed:', error);
    return NextResponse.json(
      { error: 'Chatbot is temporarily unavailable. Please try again in a moment.' },
      { status: 500 },
    );
  }
}
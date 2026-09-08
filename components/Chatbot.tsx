'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type ChatMessage = {
  role: 'user' | 'assistant';
  content: string;
};

const suggestions = ['Tell me about Fadhil', 'Apa project terbarunya?', 'What are his skills?'];

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content: `Hi! I'm Fadhil's AI assistant. Feel free to ask about his projects, experience, skills, or certifications. **Bisa pakai bahasa Indonesia juga, ya!**`,
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const chatBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading, error]);

  async function sendMessage(event?: FormEvent, suggestedMessage?: string) {
    event?.preventDefault();
    const nextMessage = (suggestedMessage ?? message).trim();
    if (!nextMessage || isLoading) return;

    const nextMessages = [...messages, { role: 'user' as const, content: nextMessage }];
    setMessages(nextMessages);
    setMessage('');
    setError('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: nextMessage,
          history: messages.slice(-8),
        }),
      });
      const result = (await response.json()) as { answer?: string; error?: string };
      if (!response.ok || !result.answer) {
        throw new Error(result.error ?? 'Unable to get a response.');
      }
      setMessages([...nextMessages, { role: 'assistant', content: result.answer }]);
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : 'Unable to get a response.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 sm:bottom-6 sm:right-6">
      {isOpen ? (
        <div className="mb-3 flex h-[min(620px,calc(100vh-7rem))] w-[min(420px,calc(100vw-2rem))] flex-col overflow-hidden rounded-3xl border border-violet-500/20 bg-slate-950/95 backdrop-blur-md shadow-2xl shadow-violet-950/50">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-800/80 bg-slate-900/90 px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Ask Fadhil&apos;s AI</p>
                <p className="text-[11px] text-slate-400">English & Indonesian</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close chatbot"
              className="rounded-full p-1.5 text-slate-400 transition hover:bg-slate-800 hover:text-white"
            >
              ✕
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 space-y-4 overflow-y-auto p-4 text-sm">
            {messages.map((chatMessage, index) => (
              <div
                key={`${chatMessage.role}-${index}`}
                className={`flex ${chatMessage.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[90%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    chatMessage.role === 'user'
                      ? 'rounded-br-sm bg-violet-600 text-white'
                      : 'rounded-bl-sm bg-slate-900 text-slate-200 border border-slate-800/80'
                  }`}
                >
                  {chatMessage.role === 'user' ? (
                    <p className="whitespace-pre-wrap">{chatMessage.content}</p>
                  ) : (
                    <div className="prose prose-invert prose-sm max-w-none text-slate-200 
                      [&>p]:mb-2 [&>p:last-child]:mb-0 
                      [&>ul]:list-disc [&>ul]:pl-4 [&>ul]:my-1 
                      [&>ol]:list-decimal [&>ol]:pl-4
                      [&_.table-wrapper]:my-3 [&_.table-wrapper]:w-full [&_.table-wrapper]:overflow-x-auto [&_.table-wrapper]:rounded-xl [&_.table-wrapper]:border [&_.table-wrapper]:border-slate-800
                      [&_table]:w-full [&_table]:border-collapse [&_table]:text-xs
                      [&_th]:bg-slate-800/90 [&_th]:p-2.5 [&_th]:text-left [&_th]:font-semibold [&_th]:text-violet-300 [&_th]:border-b [&_th]:border-slate-800
                      [&_td]:p-2.5 [&_td]:border-b [&_td]:border-slate-800/50 [&_td]:align-top [&_td]:text-slate-300"
                    >
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                          table: ({ node, ...props }) => (
                            <div className="table-wrapper">
                              <table {...props} />
                            </div>
                          ),
                        }}
                      >
                        {chatMessage.content}
                      </ReactMarkdown>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-sm border border-slate-800 bg-slate-900 px-4 py-3">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-violet-400 [animation-delay:-0.32s]"></span>
                  <span className="h-2 w-2 animate-bounce rounded-full bg-violet-400 [animation-delay:-0.16s]"></span>
                  <span className="h-2 w-2 animate-bounce rounded-full bg-violet-400"></span>
                </div>
              </div>
            )}

            {error && <p className="text-xs text-rose-400 px-2">{error}</p>}
            <div ref={chatBottomRef} />
          </div>

          {/* Footer Input */}
          <div className="border-t border-slate-800/80 bg-slate-950 p-4">
            <div className="mb-3 flex flex-wrap gap-1.5">
              {suggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => void sendMessage(undefined, suggestion)}
                  className="rounded-full border border-slate-800 bg-slate-900/50 px-3 py-1 text-xs text-slate-300 transition hover:border-violet-500/50 hover:bg-violet-500/10 hover:text-violet-200"
                >
                  {suggestion}
                </button>
              ))}
            </div>
            <form onSubmit={(event) => void sendMessage(event)} className="flex gap-2">
              <input
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                maxLength={1000}
                placeholder="Ask something..."
                aria-label="Chat message"
                className="min-w-0 flex-1 rounded-xl border border-slate-800 bg-slate-900/80 px-3.5 py-2.5 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
              />
              <button
                type="submit"
                disabled={isLoading || !message.trim()}
                className="rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-500 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      ) : (
        /* Trigger Button */
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2.5 rounded-full border border-violet-400/30 bg-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-950/40 transition hover:bg-violet-500 hover:scale-105 active:scale-95"
        >
          <svg
            className="h-5 w-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          {`Ask Fadhil's Assistant`}
        </button>
      )}
    </div>
  );
}
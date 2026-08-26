import { PortfolioData } from '../data/portfolio';

export function ContactSection({ portfolio }: { portfolio: PortfolioData }) {
  return (
    <section id="contact" className="px-4 pb-20 pt-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-violet-950/70 p-8 md:p-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-violet-300">Contact</p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Let&apos;s build something meaningful.</h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">
              I&apos;m open to internship, project collaboration, research opportunities, and product-focused engineering work in AI, software development, and data-driven systems.
            </p>
          </div>

          <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-950/70 p-6">
            <a href={`mailto:${portfolio.contact.email}`} className="block rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-3 text-slate-100 transition hover:border-violet-500 hover:text-violet-200">
              <span className="block text-xs uppercase tracking-[0.12em] text-slate-400">Email</span>
              <span className="mt-1 block text-base font-medium">{portfolio.contact.email}</span>
            </a>
            <a href={`tel:${portfolio.contact.phone.replace(/\s+/g, '')}`} className="block rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-3 text-slate-100 transition hover:border-violet-500 hover:text-violet-200">
              <span className="block text-xs uppercase tracking-[0.12em] text-slate-400">Phone</span>
              <span className="mt-1 block text-base font-medium">{portfolio.contact.phone}</span>
            </a>
            <a href={portfolio.contact.linkedin} target="_blank" rel="noreferrer" className="block rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-3 text-slate-100 transition hover:border-violet-500 hover:text-violet-200">
              <span className="block text-xs uppercase tracking-[0.12em] text-slate-400">LinkedIn</span>
              <span className="mt-1 block text-base font-medium">linkedin.com/in/fadhilprdipta</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

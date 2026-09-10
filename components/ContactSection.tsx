import { PortfolioData } from '../data/portfolio';

export function ContactSection({ portfolio }: { portfolio: PortfolioData }) {
  return (
    <section id="contact" className="px-4 pb-24 pt-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl border border-acid/40 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black p-8 md:p-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-acid">Contact</p>
            <h2 className="display-font text-5xl uppercase leading-none text-offwhite sm:text-7xl">Let&apos;s build something meaningful.</h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-zinc-300">
              I&apos;m open to internship, project collaboration, research opportunities, and product-focused engineering work in AI, software development, and data-driven systems.
            </p>
          </div>

          <div className="space-y-4 border border-zinc-800 bg-black/70 p-6">
            <a href={`mailto:${portfolio.contact.email}`} className="tactile-button block border border-zinc-800 bg-zinc-900/80 px-4 py-3 text-zinc-100 transition hover:border-acid hover:text-acid">
              <span className="block text-xs uppercase tracking-[0.12em] text-zinc-500">Email</span>
              <span className="mt-1 block text-base font-medium">{portfolio.contact.email}</span>
            </a>
            <a href={`https://wa.me/${portfolio.contact.phone.replace(/\D/g, '')}`} target="_blank" rel="noreferrer" className="tactile-button block border border-zinc-800 bg-zinc-900/80 px-4 py-3 text-zinc-100 transition hover:border-acid hover:text-acid">
              <span className="block text-xs uppercase tracking-[0.12em] text-zinc-500">Phone</span>
              <span className="mt-1 block text-base font-medium">{portfolio.contact.phone}</span>
            </a>
            <a href={portfolio.contact.linkedin} target="_blank" rel="noreferrer" className="tactile-button block border border-zinc-800 bg-zinc-900/80 px-4 py-3 text-zinc-100 transition hover:border-acid hover:text-acid">
              <span className="block text-xs uppercase tracking-[0.12em] text-zinc-500">LinkedIn</span>
              <span className="mt-1 block text-base font-medium">linkedin.com/in/fadhilprdipta</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

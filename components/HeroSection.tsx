import Image from 'next/image';
import { PortfolioData } from '../data/portfolio';

export function HeroSection({ portfolio }: { portfolio: PortfolioData }) {
  return (
    <section id="home" className="relative overflow-hidden px-4 pb-16 pt-8 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.25),_transparent_50%)]" />
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between text-sm text-slate-300">
          <div className="rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 font-medium text-violet-200">
            {portfolio.name}
          </div>
          <a href="#contact" className="transition hover:text-violet-200">
            Available for opportunities
          </a>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-violet-200">
              Portfolio
            </p>
            <h1 className="max-w-2xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              {portfolio.name}
            </h1>
            <p className="mt-4 text-xl font-medium text-violet-200">{portfolio.role}</p>
            <p className="mt-3 text-lg text-slate-300">{portfolio.headline}</p>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300">{portfolio.summary}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-violet-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-400"
              >
                View Projects
              </a>
              <a
                href={`mailto:${portfolio.contact.email}`}
                className="rounded-full border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-violet-500 hover:text-violet-200"
              >
                Let&apos;s Connect
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {portfolio.metaStats.map((stat) => (
                <span
                  key={stat}
                  className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-2 text-xs font-medium text-slate-200"
                >
                  {stat}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-glow">
            <div className="flex items-center gap-4">
              <div className="relative h-20 w-20 overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-lg">
                <Image
                  src={portfolio.profileImage}
                  alt={portfolio.name}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-slate-400">Profile</p>
                <p className="text-lg font-semibold text-white">AI & Data Enthusiast</p>
              </div>
            </div>

            <div className="mt-8 space-y-4 text-sm text-slate-300">
              <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/70 px-4 py-3">
                <span className="text-slate-400">Email</span>
                <a href={`mailto:${portfolio.contact.email}`} className="text-violet-200 transition hover:text-violet-100">
                  {portfolio.contact.email}
                </a>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/70 px-4 py-3">
                <span className="text-slate-400">Phone</span>
                <a href={`tel:${portfolio.contact.phone.replace(/\s+/g, '')}`} className="text-violet-200 transition hover:text-violet-100">
                  {portfolio.contact.phone}
                </a>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/70 px-4 py-3">
                <span className="text-slate-400">LinkedIn</span>
                <a href={portfolio.contact.linkedin} target="_blank" rel="noreferrer" className="text-violet-200 transition hover:text-violet-100">
                  /in/fadhilprdipta
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

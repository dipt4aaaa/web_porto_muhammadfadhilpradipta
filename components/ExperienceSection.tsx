import Image from 'next/image';
import { PortfolioData } from '../data/portfolio';

export function ExperienceSection({ portfolio }: { portfolio: PortfolioData }) {
  return (
    <section id="experience" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-violet-300">Experience</p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Hands-on technical experience in real-world systems.</h2>
        </div>

        <div className="space-y-6">
          {portfolio.experience.map((job) => (
            <article key={`${job.company}-${job.period}`} className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/60">
              <div className="relative aspect-video w-full overflow-hidden border-b border-slate-800 bg-slate-900">
                <Image
                  src={job.image}
                  alt={job.company}
                  fill
                  sizes="100vw"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-6 md:p-7">
                <div className="flex flex-col gap-3 border-b border-slate-800 pb-4 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.14em] text-slate-400">{job.period}</p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">{job.company}</h3>
                  </div>
                  <p className="text-base font-medium text-violet-200">{job.title}</p>
                </div>

                <ul className="mt-5 space-y-3">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-base leading-7 text-slate-300">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-violet-400" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {job.githubUrl ? (
                  <div className="mt-5 flex justify-end">
                    <a
                      href={job.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center rounded-full bg-violet-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-violet-400"
                    >
                      GitHub Repository
                    </a>
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

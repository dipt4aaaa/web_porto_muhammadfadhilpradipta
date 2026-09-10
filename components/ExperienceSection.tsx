import Image from 'next/image';
import { PortfolioData } from '../data/portfolio';

export function ExperienceSection({ portfolio }: { portfolio: PortfolioData }) {
  return (
    <section id="experience" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-acid">Experience</p>
          <h2 className="display-font text-5xl uppercase leading-none text-offwhite sm:text-7xl">Hands-on technical experience in real-world systems.</h2>
        </div>

        <div className="space-y-6">
          {portfolio.experience.map((job) => (
            <article key={`${job.company}-${job.period}`} className="overflow-hidden border border-zinc-800 bg-zinc-900/60">
              <div className="relative aspect-video w-full overflow-hidden border-b border-zinc-800 bg-black">
                <Image
                  src={job.image}
                  alt={job.company}
                  fill
                  sizes="100vw"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-6 md:p-7">
                <div className="flex flex-col gap-3 border-b border-zinc-800 pb-4 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.14em] text-acid">{job.period}</p>
                    <h3 className="mt-2 text-2xl font-bold text-offwhite">{job.company}</h3>
                  </div>
                  <p className="text-base font-bold text-acid">{job.title}</p>
                </div>

                <ul className="mt-5 space-y-3">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-base leading-7 text-zinc-300">
                      <span className="mt-2 h-2 w-2 shrink-0 bg-acid" />
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
                      className="tactile-button inline-flex items-center bg-acid px-4 py-2 text-sm font-black uppercase text-black"
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

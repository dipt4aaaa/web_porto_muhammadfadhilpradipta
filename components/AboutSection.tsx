import { PortfolioData } from '../data/portfolio';

export function AboutSection({ portfolio }: { portfolio: PortfolioData }) {
  return (
    <section id="about" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-acid">About</p>
          <h2 className="display-font text-5xl uppercase leading-none text-offwhite sm:text-7xl">Turning research into usable, high-impact products.</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="border border-zinc-800 bg-zinc-900/60 p-6">
            <h3 className="display-font mb-5 text-3xl uppercase text-offwhite">Professional Summary / Core Philosophy</h3>
            <div className="space-y-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-acid">AI & Data Enthusiast</p>
              <p className="text-base leading-7 text-zinc-300">{portfolio.summary}</p>
              {portfolio.about.map((item) => (
                <p key={item} className="text-base leading-7 text-zinc-300">
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className="border border-zinc-800 bg-zinc-900/60 p-6">
            <h3 className="display-font mb-4 text-3xl uppercase text-offwhite">Education & Academic Focus</h3>
            {portfolio.education.map((education) => (
              <div key={`${education.school}-${education.period}`} className="space-y-3">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.12em] text-acid">{education.period}</p>
                  <h4 className="mt-2 text-lg font-bold text-offwhite">{education.school}</h4>
                  <p className="text-sm text-zinc-500">{education.location}</p>
                </div>
                <p className="text-sm text-zinc-300">{education.degree}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {education.coursework.map((course) => (
                    <span key={course} className="border border-zinc-700 bg-black px-2.5 py-1 text-[11px] text-zinc-300">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 border border-zinc-800 bg-zinc-900/60 p-6">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <h3 className="display-font text-3xl uppercase text-offwhite">Technical Domains</h3>
              <p className="mt-2 max-w-2xl text-base leading-7 text-zinc-400">{portfolio.headline}</p>
            </div>
            <a href="#projects" className="tactile-button border border-offwhite px-4 py-2 text-xs font-black uppercase text-offwhite hover:bg-offwhite hover:text-black">
              View Projects
            </a>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {portfolio.metaStats.map((stat) => (
              <span key={stat} className="border border-acid/40 bg-acid/10 px-4 py-2 text-sm font-bold text-acid">
                {stat}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            { title: 'Soft Skills', items: portfolio.skills.soft },
            { title: 'Hard Skills', items: portfolio.skills.hard },
            { title: 'Tools', items: portfolio.skills.tools },
            { title: 'Languages', items: portfolio.skills.languages },
          ].map((group) => (
            <div key={group.title} className="border border-zinc-800 bg-zinc-900/60 p-5">
              <h3 className="display-font mb-4 text-2xl uppercase text-offwhite">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="bg-black px-2.5 py-1 text-xs text-zinc-300 ring-1 ring-zinc-700">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

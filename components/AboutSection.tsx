import { PortfolioData } from '../data/portfolio';

export function AboutSection({ portfolio }: { portfolio: PortfolioData }) {
  return (
    <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-violet-300">About</p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Turning research into usable, high-impact products.</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
            <div className="space-y-5">
              {portfolio.about.map((item) => (
                <p key={item} className="text-base leading-7 text-slate-300">
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
            <h3 className="mb-4 text-xl font-semibold text-white">Education</h3>
            {portfolio.education.map((education) => (
              <div key={`${education.school}-${education.period}`} className="space-y-3">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.12em] text-violet-300">{education.period}</p>
                  <h4 className="mt-2 text-lg font-semibold text-white">{education.school}</h4>
                  <p className="text-sm text-slate-400">{education.location}</p>
                </div>
                <p className="text-sm text-slate-300">{education.degree}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {education.coursework.map((course) => (
                    <span key={course} className="rounded-full border border-slate-700 bg-slate-900 px-2.5 py-1 text-[11px] text-slate-200">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            { title: 'Soft Skills', items: portfolio.skills.soft },
            { title: 'Hard Skills', items: portfolio.skills.hard },
            { title: 'Tools', items: portfolio.skills.tools },
            { title: 'Languages', items: portfolio.skills.languages },
          ].map((group) => (
            <div key={group.title} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
              <h3 className="mb-4 text-lg font-semibold text-white">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full bg-slate-900 px-2.5 py-1 text-xs text-slate-200 ring-1 ring-slate-700">
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

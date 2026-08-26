import Image from 'next/image';
import { Project } from '../data/portfolio';

export function ProjectsSection({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-violet-300">Projects</p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Selected work and experiments</h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/60 transition hover:-translate-y-1 hover:border-violet-500/60 hover:shadow-glow">
              <div className="relative aspect-video overflow-hidden rounded-t-2xl border-b border-slate-800 bg-slate-900">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="space-y-5 p-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-slate-400">{project.period}</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">{project.title}</h3>
                </div>

                <p className="text-sm leading-6 text-slate-300">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tag) => (
                    <span key={`${project.title}-${tag}`} className="rounded-full border border-violet-500/30 bg-violet-500/10 px-2.5 py-1 text-[11px] font-medium text-violet-100">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 pt-1">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full bg-violet-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-violet-400"
                  >
                    GitHub Repository
                  </a>
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-violet-500 hover:text-violet-200"
                    >
                      Live Preview
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

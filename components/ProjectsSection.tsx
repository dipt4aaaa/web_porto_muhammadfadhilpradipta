import Image from 'next/image';
import { Project } from '../data/portfolio';

export function ProjectsSection({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-acid">Projects</p>
            <h2 className="display-font text-5xl uppercase leading-none text-offwhite sm:text-7xl">Selected work and experiments</h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="group overflow-hidden border border-zinc-800 bg-zinc-900/60 transition hover:-translate-y-1 hover:border-acid/60 hover:shadow-glow">
              <div className="relative aspect-video overflow-hidden border-b border-zinc-800 bg-black">
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
                  <p className="text-xs uppercase tracking-[0.14em] text-acid">{project.period}</p>
                  <h3 className="mt-2 text-xl font-bold text-offwhite">{project.title}</h3>
                </div>

                <p className="text-sm leading-6 text-zinc-300">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tag) => (
                    <span key={`${project.title}-${tag}`} className="border border-acid/30 bg-acid/10 px-2.5 py-1 text-[11px] font-bold text-acid">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 pt-1">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="tactile-button inline-flex items-center bg-acid px-4 py-2 text-sm font-black uppercase text-black"
                  >
                    GitHub Repository
                  </a>
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="tactile-button inline-flex items-center border border-zinc-700 bg-black px-4 py-2 text-sm font-black uppercase text-zinc-100 hover:border-acid hover:text-acid"
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

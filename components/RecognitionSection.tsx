import Image from 'next/image';
import { PortfolioData } from '../data/portfolio';

export function RecognitionSection({ portfolio }: { portfolio: PortfolioData }) {
  return (
    <section id="recognition" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-violet-300">Recognition</p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Honors, awards, and technical credentials.</h2>
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
            <h3 className="mb-5 text-xl font-semibold text-white">Honors & Awards</h3>
            <div className="space-y-5">
              {portfolio.awards.map((award) => (
                <div key={award.title} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-3">
                  <div className="grid gap-4 md:grid-cols-[160px_1fr] md:items-center">
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-slate-800 bg-slate-950">
                      <Image
                        src={award.image}
                        alt={award.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 160px"
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-[0.14em] text-violet-300">{award.date}</p>
                      <h4 className="mt-2 text-lg font-semibold text-white">{award.title}</h4>
                      <p className="mt-1 text-sm text-slate-400">Issued by {award.issuer}</p>
                      <p className="mt-3 text-sm leading-6 text-slate-300">{award.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
            <h3 className="mb-5 text-xl font-semibold text-white">Licenses & Certifications</h3>
            <div className="space-y-4">
              {portfolio.certifications.map((cert) => (
                <div key={cert.title} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-3">
                  <div className="grid gap-4 md:grid-cols-[160px_1fr] md:items-center">
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-slate-800 bg-slate-950">
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 160px"
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-[0.14em] text-violet-300">{cert.date}</p>
                      <h4 className="mt-2 text-base font-semibold text-white">{cert.title}</h4>
                      <p className="mt-1 text-sm text-slate-400">{cert.issuer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

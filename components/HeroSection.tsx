import Image from 'next/image';
import { PortfolioData } from '../data/portfolio';
import transparentHero from '../assets/TransparentHero.png';

export function HeroSection({ portfolio }: { portfolio: PortfolioData }) {
  return (
    <section id="home" className="relative overflow-hidden px-4 pb-24 pt-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative min-h-[min(720px,calc(100vh-5rem))]">
          <div className="relative z-10 text-center">
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.22em] text-acid">Home</p>
            <div className="relative mb-8 h-[min(34vw,360px)] w-full sm:mb-10">
              <div className="absolute inset-0 bg-acid/10 blur-3xl" />
              <Image
                src={transparentHero}
                alt={portfolio.name}
                fill
                priority
                sizes="90vw"
                className="object-contain object-center drop-shadow-[0_20px_40px_rgba(0,0,0,.7)]"
              />
            </div>
            <h1 className="display-font mx-auto max-w-4xl text-5xl uppercase leading-[.98] tracking-tight text-offwhite sm:text-7xl sm:leading-[.94] lg:text-[8rem] lg:leading-[.9]">
              {portfolio.name}
            </h1>
            <p className="mx-auto mt-8 max-w-xl text-xl font-black uppercase tracking-wide text-acid sm:text-2xl">
              {portfolio.role}
            </p>
            <a
              href="https://drive.google.com/drive/folders/1F3QtnhU-q_boceDqPMw3-yb8qnqUllkh?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="tactile-button mt-10 inline-flex rounded-none bg-acid px-7 py-4 text-sm font-black uppercase text-black"
            >
              My CV
            </a>
          </div>
      </div>
      </div>
    </section>
  );
}

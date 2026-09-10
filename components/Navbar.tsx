const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Recognition', href: '#recognition' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  return (
    <nav aria-label="Primary navigation" className="sticky top-0 z-50 border-b border-zinc-800/50 bg-[#0a0a0a]/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="nav-links flex items-center justify-between gap-x-2 whitespace-nowrap text-[9px] font-black uppercase tracking-[0.08em] text-zinc-400 sm:gap-x-6 sm:text-xs sm:tracking-[0.12em]">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="shrink-0 transition hover:text-offwhite">
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

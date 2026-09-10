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
      <div className="mx-auto flex max-w-7xl items-center gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="shrink-0 text-[11px] font-black uppercase tracking-[0.14em] text-acid transition hover:text-offwhite"
        >
          🟢 Available
        </a>
        <div className="nav-links flex min-w-0 flex-1 items-center justify-end gap-x-4 overflow-x-auto whitespace-nowrap text-[10px] font-black uppercase tracking-[0.12em] text-zinc-400 sm:gap-x-6 sm:text-xs">
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

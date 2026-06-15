import { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  onToggleDark: () => void;
}

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Publications', href: '#publications' },
  { label: 'Projects', href: '#projects' },
  { label: 'Awards', href: '#awards' },
  { label: 'Teaching', href: '#teaching' },
];

export default function Navbar({ isDark, onToggleDark }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-[#0f1117]/90 backdrop-blur-md border-b border-gray-200/60 dark:border-white/[0.06]">
      <nav className="max-w-[900px] mx-auto px-6 h-14 flex items-center justify-between">
        <a
          href="#about"
          onClick={(e) => handleClick(e, '#about')}
          className="text-[16px] font-bold tracking-tight text-[#1a1a1a] dark:text-[#e2e8f0] hover:text-[#C8917A] dark:hover:text-[#C8917A] transition-colors"
        >
          Tai Wang
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="text-[13px] font-medium text-[#6b6b6b] dark:text-[#8892a4] hover:text-[#1a1a1a] dark:hover:text-[#e2e8f0] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={onToggleDark}
            className="ml-1 p-1.5 rounded-md text-[#6b6b6b] dark:text-[#8892a4] hover:bg-gray-100 dark:hover:bg-white/[0.06] transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onToggleDark}
            className="p-1.5 rounded-md text-[#6b6b6b] dark:text-[#8892a4] hover:bg-gray-100 dark:hover:bg-white/[0.06] transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-1.5 rounded-md text-[#1a1a1a] dark:text-[#e2e8f0] hover:bg-gray-100 dark:hover:bg-white/[0.06] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white dark:bg-[#0f1117] border-t border-gray-100 dark:border-white/[0.06]">
          <div className="px-6 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-sm font-medium text-[#1a1a1a] dark:text-[#e2e8f0] hover:text-[#C8917A] py-2 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

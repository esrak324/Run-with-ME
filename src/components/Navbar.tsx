import React, { useState } from 'react';
import { PageSection } from '../types';
import { FOUNDER_DATA } from '../data/mockData';

interface NavbarProps {
  currentSection: PageSection;
  onNavigate: (section: PageSection) => void;
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentSection,
  onNavigate,
  onOpenConsultation,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; section: PageSection; badge?: string }[] = [
    { label: 'Home', section: 'home' },
    { label: 'Local Job Market', section: 'local-job-market' },
    { label: 'Career Paths', section: 'career-paths' },
    { label: 'Mentors', section: 'specialists' },
    { label: "Abroad Master's", section: 'abroad-masters' },
    { label: 'Countries', section: 'countries' },
    { label: 'Country Details', section: 'country-details', badge: 'Italy 🇮🇹' },
    { label: 'Agencies', section: 'agencies' },
    { label: 'Contact', section: 'contact' },
  ];

  const handleNavClick = (section: PageSection) => {
    onNavigate(section);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-surface-container-lowest border-b border-surface-container-high">
        <div className="mx-auto flex items-center justify-between px-4 py-3">
     <div
  className="flex items-center gap-3 shrink-0 cursor-pointer select-none"
  onClick={() => handleNavClick('home')}
>
  {/* Logo */}
  <div className="relative h-10 w-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 via-violet-600 to-pink-500 shadow-md">
    <span className="text-white font-extrabold text-lg tracking-tight">
      ME
    </span>

    {/* Small career/code symbol */}
    <span className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-white flex items-center justify-center shadow-sm">
      <span className="text-[9px] font-black text-violet-600">
        &lt;/&gt;
      </span>
    </span>
  </div>

  {/* Brand Name */}
  <div className="flex flex-col">
    <span className="font-bold text-lg text-on-surface tracking-tight leading-tight">
      Run with ME
    </span>

    <span className="text-[10px] text-secondary uppercase tracking-widest font-semibold">
      CSE Career Ecosystem
    </span>
  </div>
</div>
          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-5 2xl:gap-6 relative">
            {navItems.map((item) => {
              const isActive = currentSection === item.section;
              return (
                <button
                  key={item.section}
                  onClick={() => handleNavClick(item.section)}
                  className={`relative py-2 text-[14px] font-semibold transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'text-secondary font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-secondary after:rounded-full'
                      : 'text-on-surface-variant hover:text-secondary'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="text-[10px] bg-secondary-fixed text-on-secondary-fixed px-1.5 py-0.2 rounded font-medium">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action buttons */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenConsultation}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-secondary text-white font-semibold text-[13px] hover:bg-secondary-container transition-all shadow-[0_4px_14px_rgba(0,81,213,0.3)] hover:-translate-y-0.5 active:translate-y-0"
            >
              <span className="material-symbols-outlined text-[18px]">support_agent</span>
              <span>Talk to an Expert</span>
            </button>

            {/* Profile Avatar Quick Link */}
            <div
              className="flex items-center gap-2 pl-1 cursor-pointer group"
              onClick={() => handleNavClick('home')}
              title="Md. Masruk Esrak Profile"
            >
              <img
                alt="Profile"
                className="w-9 h-9 rounded-full object-cover ring-2 ring-secondary/30 shadow-sm group-hover:ring-secondary transition-all"
                src={FOUNDER_DATA.avatarUrl}
              />
            </div>

            {/* Mobile Menu Hamburger */}
            <button
              aria-label="Open menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors"
              type="button"
            >
              <span className="material-symbols-outlined text-2xl">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-surface-container-lowest border-b border-surface-container-high shadow-xl px-6 py-5 transition-all">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.section}
                  onClick={() => handleNavClick(item.section)}
                  className={`flex items-center justify-between text-left py-2.5 px-3 rounded-lg text-sm font-semibold ${
                    currentSection === item.section
                      ? 'bg-secondary-fixed text-on-secondary-fixed'
                      : 'text-on-surface hover:bg-surface-container-low'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="text-[11px] bg-secondary text-white px-2 py-0.5 rounded">
                      {item.badge}
                    </span>
                  )}
                </button>
              ))}

              <div className="pt-4 border-t border-surface-container mt-2 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConsultation();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-secondary text-white font-semibold text-sm shadow-md"
                >
                  <span className="material-symbols-outlined text-[18px]">support_agent</span>
                  <span>Book Free 1-on-1 Strategy Session</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

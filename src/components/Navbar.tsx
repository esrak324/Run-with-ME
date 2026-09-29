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
      <header className="fixed top-0 left-0 w-full z-50 bg-[#faf8ff]/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(11,19,43,0.06)] border-b border-surface-container">
        <div className="h-20 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between gap-4">
          {/* Logo & Brand Identity */}
          <div
            className="flex items-center gap-3 shrink-0 cursor-pointer select-none"
            onClick={() => handleNavClick('home')}
          >
            <img
              alt="Run with ME Logo"
              className="h-9 w-auto object-contain"
              src="https://lh3.googleusercontent.com/aida/AEtjO1Ucw5UgRmHQ8IDWa5jklXh6MPswzxZmMjj4Fzr4PYrpnHOM8ADxfssAtnGz4bUcUJjJVIJklM24iNEEfu_p8IW6Hk3SjK5GG5DoiZ_1urfjB8Yi4jWPGjVRheU69DpmGvfmy7YgIq2XpFns4fQGCC9QYB5YO0EJmhFcyKwEXGo_InKlchJqwLAYhB9Kq4p9pJz1xICugsd3bmmMUiERDrEFU-Ped5MnyUpuXB8zc0WStNErKDVct6VqxMg"
            />
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

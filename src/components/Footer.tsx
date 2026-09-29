import React from 'react';
import { PageSection } from '../types';

interface FooterProps {
  onNavigate: (section: PageSection) => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-surface-container shadow-[0_-1px_8px_rgba(11,19,43,0.03)]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => onNavigate('home')}
            >
              <img
                alt="Run with ME Logo"
                className="h-8 w-auto object-contain"
                src="https://lh3.googleusercontent.com/aida/AEtjO1Ucw5UgRmHQ8IDWa5jklXh6MPswzxZmMjj4Fzr4PYrpnHOM8ADxfssAtnGz4bUcUJjJVIJklM24iNEEfu_p8IW6Hk3SjK5GG5DoiZ_1urfjB8Yi4jWPGjVRheU69DpmGvfmy7YgIq2XpFns4fQGCC9QYB5YO0EJmhFcyKwEXGo_InKlchJqwLAYhB9Kq4p9pJz1xICugsd3bmmMUiERDrEFU-Ped5MnyUpuXB8zc0WStNErKDVct6VqxMg"
              />
              <span className="font-bold text-xl text-on-surface tracking-tight">
                Run with ME
              </span>
            </div>

            <p className="text-[13px] text-on-surface-variant max-w-sm leading-relaxed">
              High-velocity career navigation, competitive engineering frameworks, and prestigious overseas graduate advisement engineered specifically for CSE students across Bangladesh.
            </p>

            <div className="flex items-center gap-2 text-on-surface-variant text-[12px] font-medium">
              <span className="w-2 h-2 rounded-full bg-secondary inline-block animate-pulse"></span>
              <span>Dhaka • Global Mentorship Hub</span>
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h3 className="text-[12px] font-bold text-on-surface uppercase tracking-wider mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5 text-[13px] text-on-surface-variant">
              <li>
                <button
                  onClick={() => onNavigate('local-job-market')}
                  className="hover:text-secondary transition-colors text-left"
                >
                  Local Jobs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('career-paths')}
                  className="hover:text-secondary transition-colors text-left"
                >
                  Career Paths
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('specialists')}
                  className="hover:text-secondary transition-colors text-left"
                >
                  Mentors & Specialists
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('abroad-masters')}
                  className="hover:text-secondary transition-colors text-left"
                >
                  Abroad Master's
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('countries')}
                  className="hover:text-secondary transition-colors text-left"
                >
                  Destination Countries
                </button>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-[12px] font-bold text-on-surface uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-2.5 text-[13px] text-on-surface-variant">
              <li>
                <button
                  onClick={() => onNavigate('career-paths')}
                  className="hover:text-secondary transition-colors text-left"
                >
                  Engineering Roadmaps
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('country-details')}
                  className="hover:text-secondary transition-colors text-left"
                >
                  Italy DSU Scholarship Guide
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('country-details')}
                  className="hover:text-secondary transition-colors text-left"
                >
                  Germany Blocked Account Guide
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('agencies')}
                  className="hover:text-secondary transition-colors text-left"
                >
                  Verified Agency Directory
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenConsultation}
                  className="hover:text-secondary transition-colors text-left font-semibold text-secondary"
                >
                  Book 1-on-1 Consultation
                </button>
              </li>
            </ul>
          </div>

          {/* Connect Links */}
          <div>
            <h3 className="text-[12px] font-bold text-on-surface uppercase tracking-wider mb-4">
              Connect
            </h3>
            <ul className="space-y-2.5 text-[13px] text-on-surface-variant">
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-secondary transition-colors flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[16px]">public</span>
                  <span>Facebook Community</span>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-secondary transition-colors flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[16px]">work</span>
                  <span>LinkedIn Network</span>
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-secondary transition-colors flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[16px]">smart_display</span>
                  <span>YouTube Masterclasses</span>
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenConsultation}
                  className="hover:text-secondary transition-colors flex items-center gap-2 text-left"
                >
                  <span className="material-symbols-outlined text-[16px]">mail</span>
                  <span>Direct Advisor Contact</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="mt-14 pt-8 bg-surface-container-low/60 rounded-2xl px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 border border-surface-container/60">
          <p className="text-[12px] text-on-surface-variant font-medium">
            © 2026 Run with ME. Built for CSE students across Bangladesh.
          </p>
          <div className="flex items-center gap-6 text-[12px] text-on-surface-variant">
            <span className="hover:text-secondary cursor-pointer">Privacy Policy</span>
            <span className="hover:text-secondary cursor-pointer">Terms of Service</span>
            <span className="hover:text-secondary cursor-pointer">Community Guidelines</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

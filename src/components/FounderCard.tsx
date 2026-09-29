import React from 'react';
import { FOUNDER_DATA } from '../data/mockData';

interface FounderCardProps {
  onOpenConsultation: () => void;
  onExploreMore?: () => void;
}

export const FounderCard: React.FC<FounderCardProps> = ({
  onOpenConsultation,
  onExploreMore,
}) => {
  return (
    <div className="bg-surface-container-lowest rounded-3xl p-6 lg:p-8 shadow-sm flex flex-col justify-between relative overflow-hidden border border-surface-container-high/60">
      <div className="absolute -top-16 -right-16 w-44 h-44 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>

      <div>
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-secondary text-[12px] font-bold">
            <span className="material-symbols-outlined text-[16px]">verified</span>
            {FOUNDER_DATA.roleBadge}
          </span>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[12px] font-semibold border border-emerald-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>{FOUNDER_DATA.statusBadge}</span>
          </div>
        </div>

        {/* Avatar & Personal Identity */}
        <div className="flex items-start gap-4 mb-5">
          <div className="relative shrink-0">
            <img
              alt="Md. Masruk Esrak - Founder & CSE Guide"
              className="w-20 h-20 rounded-2xl object-cover shadow-md ring-2 ring-secondary/20"
              src={FOUNDER_DATA.avatarUrl}
            />
            <span className="absolute -bottom-1 -right-1 bg-secondary text-white rounded-full p-1 flex items-center justify-center shadow">
              <span className="material-symbols-outlined text-[14px]">school</span>
            </span>
          </div>

          <div className="min-w-0">
            <span className="text-[12px] font-bold uppercase tracking-wider text-secondary">
              Your Career & Study Guide
            </span>
            <h1 className="text-2xl lg:text-[26px] font-bold text-on-surface tracking-tight mt-0.5">
              {FOUNDER_DATA.name}
            </h1>
            <p className="text-[13px] text-on-surface-variant font-medium mt-0.5">
              {FOUNDER_DATA.title}
            </p>
          </div>
        </div>

        {/* Bio */}
        <p className="text-[14px] text-on-surface-variant mb-6 leading-relaxed">
          {FOUNDER_DATA.bio}
        </p>

        {/* Skill Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {FOUNDER_DATA.tags.map((tag, idx) => (
            <span
              key={idx}
              className={`px-3 py-1 text-[12px] font-semibold rounded-lg ${
                tag === "Master's Abroad"
                  ? 'bg-secondary-fixed text-on-secondary-fixed'
                  : 'bg-surface-container text-on-surface'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom CTAs & Stat Row */}
      <div>
        <div className="pt-2 flex flex-col sm:flex-row gap-3">
          <button
            onClick={onOpenConsultation}
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary-container transition-all shadow-md active:scale-[0.98]"
          >
            <span className="material-symbols-outlined text-[18px]">calendar_today</span>
            <span>Connect With Me</span>
          </button>

          {onExploreMore && (
            <button
              onClick={onExploreMore}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-surface-container text-on-surface font-semibold text-sm hover:bg-surface-container-high transition-colors"
            >
              <span>View Trajectory</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          )}
        </div>

        {/* Stat Row */}
        <div className="mt-6 pt-4 grid grid-cols-3 gap-2 text-center bg-surface-container-low rounded-2xl p-3 border border-surface-container">
          {FOUNDER_DATA.stats.map((stat, idx) => (
            <div key={idx}>
              <p className="text-xl font-bold text-secondary font-display">
                {stat.value}
              </p>
              <p className="text-[11px] text-on-surface-variant font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { FounderCard } from './FounderCard';
import { MarketAnalytics } from './MarketAnalytics';

interface HeroProps {
  onOpenConsultation: () => void;
  onNavigateToLocal: () => void;
  onNavigateToAbroad: () => void;
  onOpenDiagnostic: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenConsultation,
  onNavigateToLocal,
  onNavigateToAbroad,
  onOpenDiagnostic,
}) => {
  return (
    <div className="w-full flex flex-col">
      {/* Top Announcement Bar */}
      <section className="w-full bg-primary-container text-white py-2.5 px-4 sm:px-6">
        <div className="max-w-[1360px] mx-auto flex flex-wrap items-center justify-between gap-3 text-[12px] font-semibold">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="text-secondary-fixed">Fall 2026 Masters Intakes Now Open:</span>
            <span className="text-white/90 font-normal">
              Germany Uni-Assist & Italy Universitaly Portals active
            </span>
          </div>
          <div className="flex items-center gap-4 text-primary-fixed">
            <span className="hidden md:inline">🇧🇩 1,420+ CSE Undergrads Guided</span>
            <span className="text-outline-variant">•</span>
            <button
              onClick={onOpenConsultation}
              className="hover:text-white transition-colors underline decoration-secondary"
            >
              Book Live Strategy
            </button>
          </div>
        </div>
      </section>

      {/* Hero Section Split Layout */}
      <section className="w-full py-8 lg:py-14 px-4 sm:px-6 lg:px-12 bg-surface">
        <div className="max-w-[1360px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 5 Cols: Personal Guide Card */}
            <div className="lg:col-span-5">
              <FounderCard
                onOpenConsultation={onOpenConsultation}
                onExploreMore={onNavigateToLocal}
              />
            </div>

            {/* Right 7 Cols: Current Situation & Market Demand Analytics */}
            <div className="lg:col-span-7">
              <MarketAnalytics
                onNavigateToLocal={onNavigateToLocal}
                onNavigateToAbroad={onNavigateToAbroad}
                onOpenDiagnostic={onOpenDiagnostic}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

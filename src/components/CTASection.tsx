import React from 'react';

interface CTASectionProps {
  onOpenConsultation: () => void;
  onExploreLocal: () => void;
  onExploreAbroad: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({
  onOpenConsultation,
  onExploreLocal,
  onExploreAbroad,
}) => {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-12 bg-surface">
      <div className="max-w-[1360px] mx-auto">
        <div className="rounded-3xl bg-primary-container text-white p-8 lg:p-14 relative overflow-hidden shadow-xl border border-white/10">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-secondary/25 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-2xl relative z-10">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-secondary-fixed text-[12px] font-semibold mb-4 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              Accepting Cohort 2026 Applicants
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
              Your CSE Journey Starts Here.
            </h2>

            <p className="text-base sm:text-lg text-inverse-primary mb-8 leading-relaxed">
              Build the right skills, choose the right path and make your next career move with complete data-driven confidence.
            </p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3.5 rounded-xl bg-secondary text-white font-bold text-sm hover:bg-secondary-container transition-all shadow-md active:scale-[0.98]"
              >
                Book Free 15-Min Strategy Session
              </button>

              <button
                onClick={onExploreLocal}
                className="px-6 py-3.5 rounded-xl bg-white/10 text-white font-semibold text-sm hover:bg-white/20 transition-colors border border-white/15"
              >
                Explore Local Jobs
              </button>

              <button
                onClick={onExploreAbroad}
                className="px-6 py-3.5 rounded-xl bg-white/10 text-white font-semibold text-sm hover:bg-white/20 transition-colors border border-white/15"
              >
                Explore Master's Abroad
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { MARKET_DEMAND_DATA } from '../data/mockData';

interface MarketAnalyticsProps {
  onNavigateToLocal: () => void;
  onNavigateToAbroad: () => void;
  onOpenDiagnostic: () => void;
}

export const MarketAnalytics: React.FC<MarketAnalyticsProps> = ({
  onNavigateToLocal,
  onNavigateToAbroad,
  onOpenDiagnostic,
}) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="bg-surface-container-lowest rounded-3xl p-6 lg:p-8 shadow-sm border border-surface-container-high/60">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 gap-2">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-secondary">
              Current Situation Analysis
            </span>
            <h2 className="text-2xl lg:text-3xl font-bold text-on-surface tracking-tight mt-0.5">
              Where Should You Go Next?
            </h2>
            <p className="text-[13px] text-on-surface-variant">
              Explore verified opportunities tailored for Bangladeshi CSE cohorts.
            </p>
          </div>
          <span className="self-start sm:self-auto px-3 py-1 bg-surface-container text-secondary text-[12px] font-semibold rounded-full border border-surface-container-high">
            Updated Q1 2026
          </span>
        </div>

        {/* Two Analytics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
          {/* Card 1: Bangladesh Tech Job Market */}
          <div className="bg-surface-container-low rounded-2xl p-5 flex flex-col justify-between border border-surface-container">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-base font-bold text-on-surface flex items-center gap-1.5">
                  <span>🇧🇩</span> Bangladesh Tech Market
                </span>
                <span className="text-[11px] font-semibold text-secondary bg-surface-container px-2 py-0.5 rounded">
                  High Demand
                </span>
              </div>
              <p className="text-[12px] text-on-surface-variant mb-4">
                Skill-wise Market Index based on 450+ sample Dhaka tech postings.
              </p>

              {/* Demand Bars */}
              <div className="space-y-2.5">
                {MARKET_DEMAND_DATA.map((item, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-[12px] mb-1">
                      <span className="text-on-surface font-semibold">{item.skill}</span>
                      <span className="text-secondary font-bold">{item.percentage}%</span>
                    </div>
                    <div className="w-full bg-surface-container-highest rounded-full h-2 overflow-hidden">
                      <div
                        className={`${item.color} h-2 rounded-full transition-all duration-700`}
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={onNavigateToLocal}
              className="mt-5 w-full inline-flex items-center justify-center gap-1.5 text-[13px] font-bold py-2.5 rounded-xl bg-surface-container text-secondary hover:bg-secondary hover:text-white transition-all"
            >
              <span>Explore Local Jobs</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>

          {/* Card 2: Abroad Master's Opportunities */}
          <div className="bg-surface-container-low rounded-2xl p-5 flex flex-col justify-between border border-surface-container">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-base font-bold text-on-surface flex items-center gap-1.5">
                  <span>🌍</span> Abroad Master's
                </span>
                <span className="text-[11px] font-semibold text-tertiary-container bg-tertiary-fixed px-2 py-0.5 rounded">
                  Multi-factor
                </span>
              </div>
              <p className="text-[12px] text-on-surface-variant mb-4">
                Study + Career + Post-study PR Feasibility Index for BD students.
              </p>

              {/* Factor Matrix Badges */}
              <div className="space-y-2.5">
                <div className="bg-surface-container-lowest p-2.5 rounded-xl border border-surface-container-high/60">
                  <div className="flex justify-between items-center text-[12px]">
                    <span className="font-bold text-on-surface">🇩🇪 Germany</span>
                    <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-semibold text-[11px]">
                      €0 Tuition • High PR
                    </span>
                  </div>
                  <p className="text-on-surface-variant mt-1 text-[11px]">
                    Werkstudent €15/hr, 18-mo Job Seeker Visa.
                  </p>
                </div>

                <div className="bg-surface-container-lowest p-2.5 rounded-xl border border-surface-container-high/60">
                  <div className="flex justify-between items-center text-[12px]">
                    <span className="font-bold text-on-surface">🇮🇹 Italy</span>
                    <span className="text-secondary bg-surface-container px-2 py-0.5 rounded font-semibold text-[11px]">
                      DSU 100% Scholarship
                    </span>
                  </div>
                  <p className="text-on-surface-variant mt-1 text-[11px]">
                    €7,200/yr stipend + free canteen for BD CGPA 3.0+
                  </p>
                </div>

                <div className="bg-surface-container-lowest p-2.5 rounded-xl border border-surface-container-high/60">
                  <div className="flex justify-between items-center text-[12px]">
                    <span className="font-bold text-on-surface">🇵🇱 Poland & 🇨🇿 Czech</span>
                    <span className="text-on-surface bg-surface-container-high px-2 py-0.5 rounded font-semibold text-[11px]">
                      Low Living Cost
                    </span>
                  </div>
                  <p className="text-on-surface-variant mt-1 text-[11px]">
                    Direct European Tech Hub access (Krakow / Prague).
                  </p>
                </div>

                <div className="bg-surface-container-lowest p-2.5 rounded-xl border border-surface-container-high/60">
                  <div className="flex justify-between items-center text-[12px]">
                    <span className="font-bold text-on-surface">🇮🇪 Ireland</span>
                    <span className="text-tertiary-container bg-tertiary-fixed px-2 py-0.5 rounded font-semibold text-[11px]">
                      EU Tech HQs
                    </span>
                  </div>
                  <p className="text-on-surface-variant mt-1 text-[11px]">
                    2 Years stayback, native English language tech hub.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-2">
              <p className="text-[11px] text-on-surface-variant italic mb-3">
                ⚠️ Multi-factor assessment based on student priorities; no single country fits everyone.
              </p>
              <button
                onClick={onNavigateToAbroad}
                className="w-full inline-flex items-center justify-center gap-1.5 text-[13px] font-bold py-2.5 rounded-xl bg-secondary text-white hover:bg-secondary-container transition-all shadow-sm"
              >
                <span>Explore Countries</span>
                <span className="material-symbols-outlined text-[16px]">travel_explore</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Diagnostic Evaluation Banner */}
      <div className="bg-primary-container text-white rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
        <div className="flex items-center gap-3">
          <span className="p-2.5 bg-white/10 rounded-xl text-secondary-fixed material-symbols-outlined">
            quiz
          </span>
          <div>
            <h4 className="text-base font-bold text-white">Unsure which path to choose?</h4>
            <p className="text-[13px] text-inverse-primary">
              Take our 2-minute diagnostic: CGPA, Budget in BDT & Technical Skills.
            </p>
          </div>
        </div>
        <button
          onClick={onOpenDiagnostic}
          className="shrink-0 px-5 py-2.5 bg-secondary text-white rounded-xl text-[13px] font-bold hover:bg-secondary-container transition-colors shadow-sm"
        >
          Get Fast Evaluation
        </button>
      </div>
    </div>
  );
};

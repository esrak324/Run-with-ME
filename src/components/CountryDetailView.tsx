import React, { useState } from 'react';
import { ITALY_GUIDE_SECTIONS, GERMANY_GUIDE_SECTIONS } from '../data/mockData';

interface CountryDetailViewProps {
  initialCountryId?: string;
  onBookConsultation: (countryName: string) => void;
  onBackToCountries?: () => void;
}

export const CountryDetailView: React.FC<CountryDetailViewProps> = ({
  initialCountryId = 'italy',
  onBookConsultation,
  onBackToCountries,
}) => {
  const [selectedGuide, setSelectedGuide] = useState<'italy' | 'germany'>(
    initialCountryId === 'germany' ? 'germany' : 'italy'
  );

  return (
    <div className="w-full bg-surface-container-low py-12 lg:py-16 px-4 sm:px-6 lg:px-12" id="country-detail-section">
      <div className="max-w-[1360px] mx-auto">
        {/* Breadcrumb & Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <nav className="flex items-center gap-2 text-[12px] font-semibold text-on-surface-variant">
            {onBackToCountries && (
              <button
                onClick={onBackToCountries}
                className="hover:text-secondary transition-colors"
              >
                Abroad Master's
              </button>
            )}
            <span>›</span>
            <span className="text-secondary">Country Deep Dives</span>
            <span>›</span>
            <span className="text-on-surface font-bold">
              {selectedGuide === 'italy' ? 'Study in Italy 🇮🇹' : 'Study in Germany 🇩🇪'}
            </span>
          </nav>

          {/* Quick Tab Switcher */}
          <div className="flex items-center gap-2 bg-surface-container-lowest p-1.5 rounded-2xl shadow-sm border border-surface-container-high/60">
            <button
              onClick={() => setSelectedGuide('italy')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                selectedGuide === 'italy'
                  ? 'bg-secondary text-white shadow-sm'
                  : 'text-on-surface hover:bg-surface-container-low'
              }`}
            >
              <span>🇮🇹</span>
              <span>Italy Master's Guide</span>
            </button>
            <button
              onClick={() => setSelectedGuide('germany')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                selectedGuide === 'germany'
                  ? 'bg-secondary text-white shadow-sm'
                  : 'text-on-surface hover:bg-surface-container-low'
              }`}
            >
              <span>🇩🇪</span>
              <span>Germany Master's Guide</span>
            </button>
          </div>
        </div>

        {/* Italy Guide */}
        {selectedGuide === 'italy' && (
          <div className="bg-surface-container-lowest rounded-3xl p-6 sm:p-8 lg:p-12 shadow-sm border border-surface-container-high/60">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 gap-4 border-b border-surface-container">
              <div>
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold uppercase tracking-wider">
                  Complete 2026/2027 Admission & Scholarship Handbook
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-on-surface tracking-tight mt-2 flex flex-wrap items-center gap-3">
                  <span>Study in Italy 🇮🇹</span>
                  <span className="text-sm font-normal text-on-surface-variant">
                    (MSc Computer Science, AI & Engineering)
                  </span>
                </h2>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className="text-[12px] font-bold bg-surface-container px-3.5 py-2 rounded-xl text-secondary border border-surface-container-high">
                  Embassy: Dhaka VFS
                </span>
                <button
                  onClick={() => onBookConsultation('Italy')}
                  className="px-5 py-2.5 bg-secondary text-white rounded-xl text-[13px] font-bold hover:bg-secondary-container transition-colors shadow-sm"
                >
                  Book Italy Audit
                </button>
              </div>
            </div>

            {/* 8-Stage Execution Timeline */}
            <div className="my-8 bg-surface-container-low p-5 rounded-2xl border border-surface-container">
              <p className="text-[12px] font-bold text-on-surface uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-secondary">
                  route
                </span>
                Dhaka to Milan: 8-Stage Execution Timeline
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 text-center text-[12px]">
                <div className="p-2.5 bg-surface-container-lowest rounded-xl font-semibold border border-surface-container shadow-xs">
                  <span className="block text-[10px] text-secondary font-bold">STAGE 1</span>
                  Shortlist Unis
                </div>
                <div className="p-2.5 bg-surface-container-lowest rounded-xl font-semibold border border-surface-container shadow-xs">
                  <span className="block text-[10px] text-secondary font-bold">STAGE 2</span>
                  CIMEA / DOV
                </div>
                <div className="p-2.5 bg-surface-container-lowest rounded-xl font-semibold border border-surface-container shadow-xs">
                  <span className="block text-[10px] text-secondary font-bold">STAGE 3</span>
                  Universitaly
                </div>
                <div className="p-2.5 bg-surface-container-lowest rounded-xl font-semibold border border-surface-container shadow-xs">
                  <span className="block text-[10px] text-secondary font-bold">STAGE 4</span>
                  Offer Letter
                </div>
                <div className="p-2.5 bg-secondary-fixed text-on-secondary-fixed rounded-xl font-bold border border-secondary/20 shadow-xs">
                  <span className="block text-[10px] text-secondary font-bold">STAGE 5</span>
                  DSU Dossier
                </div>
                <div className="p-2.5 bg-surface-container-lowest rounded-xl font-semibold border border-surface-container shadow-xs">
                  <span className="block text-[10px] text-secondary font-bold">STAGE 6</span>
                  Dhaka Visa
                </div>
                <div className="p-2.5 bg-surface-container-lowest rounded-xl font-semibold border border-surface-container shadow-xs">
                  <span className="block text-[10px] text-secondary font-bold">STAGE 7</span>
                  Fly & Codice
                </div>
                <div className="p-2.5 bg-surface-container-lowest rounded-xl font-semibold border border-surface-container shadow-xs">
                  <span className="block text-[10px] text-secondary font-bold">STAGE 8</span>
                  Permesso
                </div>
              </div>
            </div>

            {/* 15-Section Comprehensive Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ITALY_GUIDE_SECTIONS.map((sec, idx) => (
                <div
                  key={idx}
                  className={`p-5 rounded-2xl border transition-all ${
                    sec.title.includes('DSU')
                      ? 'bg-secondary-fixed/40 border-secondary/30'
                      : sec.title.includes('Total Initial Outlay')
                      ? 'bg-surface-container-high border-surface-container-highest'
                      : 'bg-surface-container-low border-surface-container'
                  }`}
                >
                  <h4
                    className={`text-base font-bold mb-2 ${
                      sec.title.includes('DSU') ? 'text-secondary' : 'text-on-surface'
                    }`}
                  >
                    {sec.title}
                  </h4>
                  <p className="text-[13px] text-on-surface-variant leading-relaxed">
                    {sec.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Germany Guide */}
        {selectedGuide === 'germany' && (
          <div className="bg-surface-container-lowest rounded-3xl p-6 sm:p-8 lg:p-12 shadow-sm border border-surface-container-high/60">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 gap-4 border-b border-surface-container">
              <div>
                <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-[11px] font-bold uppercase tracking-wider">
                  Tuition-Free Engineering & High Salaries
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-on-surface tracking-tight mt-2 flex flex-wrap items-center gap-3">
                  <span>Study in Germany 🇩🇪</span>
                  <span className="text-sm font-normal text-on-surface-variant">
                    (MSc Informatics, Autonomous Systems & Software)
                  </span>
                </h2>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className="text-[12px] font-bold bg-surface-container px-3.5 py-2 rounded-xl text-secondary border border-surface-container-high">
                  Embassy: Madani Ave, Baridhara
                </span>
                <button
                  onClick={() => onBookConsultation('Germany')}
                  className="px-5 py-2.5 bg-secondary text-white rounded-xl text-[13px] font-bold hover:bg-secondary-container transition-colors shadow-sm"
                >
                  Book Germany Audit
                </button>
              </div>
            </div>

            {/* Germany Timeline */}
            <div className="my-8 bg-surface-container-low p-5 rounded-2xl border border-surface-container">
              <p className="text-[12px] font-bold text-on-surface uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-secondary">
                  route
                </span>
                Dhaka to Munich / Berlin: 6-Stage Timeline
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-center text-[12px]">
                <div className="p-2.5 bg-surface-container-lowest rounded-xl font-semibold border border-surface-container">
                  <span className="block text-[10px] text-secondary font-bold">1. CGPA & ECTS</span>
                  Credit Matching
                </div>
                <div className="p-2.5 bg-surface-container-lowest rounded-xl font-semibold border border-surface-container">
                  <span className="block text-[10px] text-secondary font-bold">2. Uni-Assist</span>
                  VPD Evaluation
                </div>
                <div className="p-2.5 bg-surface-container-lowest rounded-xl font-semibold border border-surface-container">
                  <span className="block text-[10px] text-secondary font-bold">3. Waitlist Slot</span>
                  Dhaka Embassy
                </div>
                <div className="p-2.5 bg-secondary-fixed text-on-secondary-fixed rounded-xl font-bold border border-secondary/20">
                  <span className="block text-[10px] text-secondary font-bold">4. Blocked Acct</span>
                  €11,208 (Expatrio)
                </div>
                <div className="p-2.5 bg-surface-container-lowest rounded-xl font-semibold border border-surface-container">
                  <span className="block text-[10px] text-secondary font-bold">5. Visa Interview</span>
                  Madani Avenue
                </div>
                <div className="p-2.5 bg-surface-container-lowest rounded-xl font-semibold border border-surface-container">
                  <span className="block text-[10px] text-secondary font-bold">6. Werkstudent</span>
                  €16-22/hr in Tech
                </div>
              </div>
            </div>

            {/* Germany Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {GERMANY_GUIDE_SECTIONS.map((sec, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-surface-container-low border border-surface-container hover:shadow-sm transition-all"
                >
                  <h4 className="text-base font-bold text-on-surface mb-2">
                    {sec.title}
                  </h4>
                  <p className="text-[13px] text-on-surface-variant leading-relaxed">
                    {sec.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

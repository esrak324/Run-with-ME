import React, { useState } from 'react';
import { CountryDestination } from '../types';
import { COUNTRIES_DATA } from '../data/mockData';

interface DiagnosticQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCountry: (country: CountryDestination) => void;
  onBookConsultation: () => void;
}

export const DiagnosticQuizModal: React.FC<DiagnosticQuizModalProps> = ({
  isOpen,
  onClose,
  onSelectCountry,
  onBookConsultation,
}) => {
  const [step, setStep] = useState<number>(1);
  const [cgpa, setCgpa] = useState<string>('3.0-3.49');
  const [budget, setBudget] = useState<string>('under10');
  const [goal, setGoal] = useState<string>('scholarship');

  if (!isOpen) return null;

  const handleReset = () => {
    setStep(1);
    setCgpa('3.0-3.49');
    setBudget('under10');
    setGoal('scholarship');
    onClose();
  };

  // Determine recommendation based on inputs
  const getRecommendation = () => {
    if (budget === 'under10') {
      const italy = COUNTRIES_DATA.find((c) => c.id === 'italy')!;
      const hungary = COUNTRIES_DATA.find((c) => c.id === 'hungary')!;
      return {
        title: 'Top Recommendation: Italy & Hungary Regional Scholarships',
        badge: 'Zero Tuition + Cash Stipends',
        summary: 'With an initial budget under 10 Lakh BDT, Italy (DSU Scholarship) and Hungary (Stipendium Hungaricum) are your highest-probability European destinations. You avoid heavy blocked accounts while receiving €0 tuition and living stipends.',
        suggestedCountries: [italy, hungary],
        localAlternative: 'Alternatively, focus 6 months on Full Stack Development in Dhaka to secure a ৳40k-৳60k entry software position.'
      };
    } else if (budget === '10-18') {
      const germany = COUNTRIES_DATA.find((c) => c.id === 'germany')!;
      const poland = COUNTRIES_DATA.find((c) => c.id === 'poland')!;
      return {
        title: 'Top Recommendation: Germany & Poland Technical Polytechs',
        badge: 'Tuition-Free & Massive Tech Market',
        summary: 'Your budget easily covers the German Blocked Account (€11,208) or Poland tech university tuition. You qualify for high-earning Werkstudent positions (€15-20/hr) and 18-month stayback visas.',
        suggestedCountries: [germany, poland],
        localAlternative: 'With strong fundamentals, you can also target lead backend roles in Dhaka product firms.'
      };
    } else {
      const ireland = COUNTRIES_DATA.find((c) => c.id === 'ireland')!;
      const canada = COUNTRIES_DATA.find((c) => c.id === 'canada')!;
      return {
        title: 'Top Recommendation: Ireland & Canada High-Earning STEM Tracks',
        badge: 'Direct Silicon Valley Tech HQs',
        summary: 'Your financial backing unlocks Ireland\'s 2-Year Stamp 1G graduate scheme (Google, Stripe, Meta EMEA HQs) and Canada\'s 3-Year PGWP with permanent residency fast-tracks.',
        suggestedCountries: [ireland, canada],
        localAlternative: 'Consider high-scale local engineering if you prefer zero international relocation overhead.'
      };
    }
  };

  const rec = getRecommendation();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/75 backdrop-blur-sm overflow-y-auto">
      <div className="bg-surface-container-lowest rounded-3xl max-w-lg w-full p-6 lg:p-8 shadow-2xl relative border border-surface-container-high">
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-surface-container text-on-surface-variant transition-colors"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {step < 4 ? (
          <div>
            {/* Header */}
            <div className="mb-6">
              <span className="text-[11px] font-bold text-secondary uppercase tracking-wider">
                CSE Fast Diagnostic • Step {step} of 3
              </span>
              <h3 className="text-2xl font-bold text-on-surface mt-1">
                {step === 1 && 'What is your current or expected CGPA?'}
                {step === 2 && 'What is your sponsor / bank budget in BDT?'}
                {step === 3 && 'What is your primary career priority?'}
              </h3>
              <p className="text-[13px] text-on-surface-variant mt-1">
                We calculate real visa and university qualification filters for Bangladeshi applicants.
              </p>
            </div>

            {/* Step 1: CGPA */}
            {step === 1 && (
              <div className="space-y-3">
                {[
                  { value: 'below3.0', label: 'Below 3.00', desc: 'Focus on portfolio, work exp & countries with holistic admission (Poland/Czech)' },
                  { value: '3.0-3.49', label: '3.00 – 3.49', desc: 'Eligible for Italy DSU, Germany Uni-Assist & high-paying Dhaka tech jobs' },
                  { value: '3.5-3.79', label: '3.50 – 3.79', desc: 'Competitive for tuition waivers, Finland & top German Polytechs' },
                  { value: '3.8plus', label: '3.80 – 4.00 (High Merit)', desc: 'Prime candidate for DAAD, Erasmus Mundus & Canada TA/RA funding' },
                ].map((item) => (
                  <button
                    key={item.value}
                    type="button"
                    onClick={() => {
                      setCgpa(item.value);
                      setStep(2);
                    }}
                    className={`w-full text-left p-3.5 rounded-2xl border transition-all ${
                      cgpa === item.value
                        ? 'border-secondary bg-surface-container shadow-xs'
                        : 'border-surface-container hover:bg-surface-container-low'
                    }`}
                  >
                    <span className="font-bold text-sm text-on-surface block">{item.label}</span>
                    <span className="text-[12px] text-on-surface-variant block mt-0.5">{item.desc}</span>
                  </button>
                ))}
              </div>
            )}

            {/* Step 2: Budget */}
            {step === 2 && (
              <div className="space-y-3">
                {[
                  { value: 'under10', label: 'Under 10 Lakh BDT Total Outlay', desc: 'Italy DSU (full scholarship), Hungary Stipendium, or Local Dhaka Jobs' },
                  { value: '10-18', label: '10 to 18 Lakh BDT Available', desc: 'Covers Germany Blocked Account (€11,208), Poland, or Czech Republic' },
                  { value: '20plus', label: '20+ Lakh BDT Available', desc: 'Unlocks Ireland (EU Silicon Valley), Canada, Netherlands, UK' },
                ].map((item) => (
                  <button
                    key={item.value}
                    type="button"
                    onClick={() => {
                      setBudget(item.value);
                      setStep(3);
                    }}
                    className={`w-full text-left p-3.5 rounded-2xl border transition-all ${
                      budget === item.value
                        ? 'border-secondary bg-surface-container shadow-xs'
                        : 'border-surface-container hover:bg-surface-container-low'
                    }`}
                  >
                    <span className="font-bold text-sm text-on-surface block">{item.label}</span>
                    <span className="text-[12px] text-on-surface-variant block mt-0.5">{item.desc}</span>
                  </button>
                ))}
              </div>
            )}

            {/* Step 3: Priority */}
            {step === 3 && (
              <div className="space-y-3">
                {[
                  { value: 'scholarship', label: '100% Tuition Waiver & Stipend', desc: 'No financial burden on family' },
                  { value: 'local', label: 'High-Earning Software Role in Dhaka', desc: 'Fast local industry entry at Pathao, Chaldal, bKash' },
                  { value: 'pr', label: 'Clear Permanent Residency (PR) Pathway', desc: 'EU Blue Card or Canadian Express Entry post-graduation' },
                  { value: 'bigtech', label: 'Direct Access to Global Tech Giants', desc: 'Google, Meta, Stripe EU headquarters' },
                ].map((item) => (
                  <button
                    key={item.value}
                    type="button"
                    onClick={() => {
                      setGoal(item.value);
                      setStep(4);
                    }}
                    className={`w-full text-left p-3.5 rounded-2xl border transition-all ${
                      goal === item.value
                        ? 'border-secondary bg-surface-container shadow-xs'
                        : 'border-surface-container hover:bg-surface-container-low'
                    }`}
                  >
                    <span className="font-bold text-sm text-on-surface block">{item.label}</span>
                    <span className="text-[12px] text-on-surface-variant block mt-0.5">{item.desc}</span>
                  </button>
                ))}
              </div>
            )}

            {/* Back Button */}
            {step > 1 && (
              <button
                onClick={() => setStep(step - 1)}
                className="mt-5 text-xs text-on-surface-variant hover:text-on-surface flex items-center gap-1 font-semibold"
              >
                <span className="material-symbols-outlined text-[14px]">arrow_back</span>
                Previous Question
              </button>
            )}
          </div>
        ) : (
          /* Result View */
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">
                ✓ Diagnostic Complete
              </span>
              <span className="text-[11px] text-on-surface-variant font-medium">
                Matched with 2026 Criteria
              </span>
            </div>

            <h3 className="text-xl font-bold text-on-surface mb-2">
              {rec.title}
            </h3>

            <p className="text-[13px] text-on-surface-variant leading-relaxed mb-4">
              {rec.summary}
            </p>

            {/* Matched Country Cards */}
            <div className="space-y-2 mb-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-secondary">
                Matched Destinations:
              </span>
              <div className="grid grid-cols-2 gap-2">
                {rec.suggestedCountries.map((c) => (
                  <div
                    key={c.id}
                    onClick={() => {
                      handleReset();
                      onSelectCountry(c);
                    }}
                    className="p-3 bg-surface-container-low rounded-xl border border-surface-container cursor-pointer hover:bg-surface-container transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{c.flag}</span>
                      <span className="font-bold text-sm text-on-surface">{c.name}</span>
                    </div>
                    <span className="text-[11px] text-secondary font-semibold block mt-1">
                      {c.budgetBDTFormatted}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3 bg-surface-container rounded-xl text-xs text-on-surface-variant mb-6 border border-surface-container-high">
              💡 {rec.localAlternative}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  handleReset();
                  onBookConsultation();
                }}
                className="flex-1 py-3 rounded-xl bg-secondary text-white font-bold text-sm hover:bg-secondary-container transition-colors shadow-sm"
              >
                Discuss Plan with Masruk
              </button>
              <button
                onClick={handleReset}
                className="px-4 py-3 rounded-xl bg-surface-container text-on-surface text-sm font-semibold hover:bg-surface-container-high transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

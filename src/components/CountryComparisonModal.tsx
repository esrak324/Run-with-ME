import React from 'react';
import { CountryDestination } from '../types';

interface CountryComparisonModalProps {
  countries: CountryDestination[];
  onClose: () => void;
  onRemoveCountry: (countryId: string) => void;
  onSelectCountryForGuide: (country: CountryDestination) => void;
}

export const CountryComparisonModal: React.FC<CountryComparisonModalProps> = ({
  countries,
  onClose,
  onRemoveCountry,
  onSelectCountryForGuide,
}) => {
  if (countries.length === 0) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/75 backdrop-blur-sm overflow-y-auto">
      <div className="bg-surface-container-lowest rounded-3xl max-w-5xl w-full p-6 lg:p-8 shadow-2xl relative max-h-[92vh] flex flex-col border border-surface-container-high">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-surface-container mb-4">
          <div>
            <span className="text-[11px] font-bold text-secondary uppercase tracking-wider">
              Side-by-Side Evaluator
            </span>
            <h3 className="text-2xl font-bold text-on-surface">
              Country Comparison Matrix ({countries.length} Selected)
            </h3>
            <p className="text-[13px] text-on-surface-variant">
              Compare budget, scholarship feasibility, embassy logistics, and PR outcomes.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-surface-container text-on-surface-variant transition-colors"
          >
            <span className="material-symbols-outlined text-[22px]">close</span>
          </button>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto flex-1 pr-1">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="border-b border-surface-container bg-surface-container-low">
                <th className="p-3 text-[12px] uppercase text-on-surface-variant font-bold w-48">
                  Dimension
                </th>
                {countries.map((c) => (
                  <th key={c.id} className="p-3 min-w-[200px]">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{c.flag}</span>
                        <span className="font-bold text-base text-on-surface">{c.name}</span>
                      </div>
                      <button
                        onClick={() => onRemoveCountry(c.id)}
                        className="text-xs text-on-surface-variant hover:text-error p-1"
                        title="Remove from compare"
                      >
                        ✕
                      </button>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container">
              <tr>
                <td className="p-3 font-semibold text-on-surface bg-surface-container-low/40">
                  Initial Sponsor Budget (BDT)
                </td>
                {countries.map((c) => (
                  <td key={c.id} className="p-3 font-bold text-secondary">
                    {c.budgetBDTFormatted}
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-3 font-semibold text-on-surface bg-surface-container-low/40">
                  Average Annual Tuition
                </td>
                {countries.map((c) => (
                  <td key={c.id} className="p-3 font-medium text-on-surface">
                    {c.avgTuitionEUR}
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-3 font-semibold text-on-surface bg-surface-container-low/40">
                  Monthly Living Expense
                </td>
                {countries.map((c) => (
                  <td key={c.id} className="p-3 text-on-surface">
                    {c.livingCostEUR}
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-3 font-semibold text-on-surface bg-surface-container-low/40">
                  Flagship Scholarship
                </td>
                {countries.map((c) => (
                  <td key={c.id} className="p-3">
                    <span className="font-bold text-emerald-700 block">{c.scholarshipName}</span>
                    <span className="text-[12px] text-on-surface-variant block mt-0.5">
                      {c.scholarshipDetails}
                    </span>
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-3 font-semibold text-on-surface bg-surface-container-low/40">
                  Blocked Account?
                </td>
                {countries.map((c) => (
                  <td key={c.id} className="p-3">
                    {c.blockedAccountRequired ? (
                      <span className="px-2 py-0.5 rounded bg-amber-50 text-amber-800 text-xs font-semibold">
                        Yes: {c.blockedAccountEUR}
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 text-xs font-semibold">
                        No Blocked Account (Bank statement only)
                      </span>
                    )}
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-3 font-semibold text-on-surface bg-surface-container-low/40">
                  Post-Study Work Permit
                </td>
                {countries.map((c) => (
                  <td key={c.id} className="p-3 font-bold text-on-surface">
                    {c.postStudyWork}
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-3 font-semibold text-on-surface bg-surface-container-low/40">
                  Part-time Work Rights
                </td>
                {countries.map((c) => (
                  <td key={c.id} className="p-3 text-[13px] text-on-surface-variant">
                    {c.partTimeJobDetails}
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-3 font-semibold text-on-surface bg-surface-container-low/40">
                  PR & EU Blue Card Pathway
                </td>
                {countries.map((c) => (
                  <td key={c.id} className="p-3 text-[13px] text-on-surface">
                    {c.prPathway}
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-3 font-semibold text-on-surface bg-surface-container-low/40">
                  Dhaka Embassy Location
                </td>
                {countries.map((c) => (
                  <td key={c.id} className="p-3 text-[12px] text-on-surface-variant">
                    {c.embassyDhakaLocation}
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-3 font-semibold text-on-surface bg-surface-container-low/40">
                  Detailed Handbook
                </td>
                {countries.map((c) => (
                  <td key={c.id} className="p-3">
                    <button
                      onClick={() => {
                        onClose();
                        onSelectCountryForGuide(c);
                      }}
                      className="w-full py-2 px-3 rounded-lg bg-secondary text-white text-xs font-bold hover:bg-secondary-container transition-colors"
                    >
                      Read Full {c.name} Guide
                    </button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-surface-container mt-4 flex items-center justify-between">
          <p className="text-[12px] text-on-surface-variant">
            💡 Exchange rates & living costs are calibrated to 2026 EUR/BDT averages.
          </p>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-surface-container text-on-surface text-sm font-semibold hover:bg-surface-container-high transition-colors"
          >
            Close Matrix
          </button>
        </div>
      </div>
    </div>
  );
};

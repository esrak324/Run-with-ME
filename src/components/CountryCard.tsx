import React from 'react';
import { CountryDestination } from '../types';

interface CountryCardProps {
  country: CountryDestination;
  isCompared: boolean;
  onToggleCompare: (country: CountryDestination) => void;
  onViewGuide: (country: CountryDestination) => void;
}

export const CountryCard: React.FC<CountryCardProps> = ({
  country,
  isCompared,
  onToggleCompare,
  onViewGuide,
}) => {
  return (
    <div className="bg-surface-container-lowest rounded-3xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative group border border-surface-container-high/60">
      {/* Top Specialty Badge */}
      {country.keyTags.length > 0 && (
        <div className="absolute top-4 right-4">
          <span className="px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed text-[11px] font-bold">
            {country.id === 'italy'
              ? 'Top BD Pick'
              : country.id === 'germany'
              ? 'Tech Giant'
              : country.id === 'hungary'
              ? 'Gov Funded'
              : country.id === 'ireland'
              ? 'EU Tech Hub'
              : country.keyTags[0]}
          </span>
        </div>
      )}

      <div>
        {/* Flag & Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl select-none">{country.flag}</span>
          <div className="min-w-0 pr-16">
            <h3 className="text-xl font-bold text-on-surface truncate">
              {country.name}
            </h3>
            <p className="text-[12px] text-on-surface-variant truncate">
              {country.topUniversities[0]}
            </p>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="space-y-1.5 mb-5 text-[13px]">
          <div className="flex justify-between py-1.5 bg-surface-container-low px-3 rounded-xl border border-surface-container/60">
            <span className="text-on-surface-variant font-medium">Avg Tuition:</span>
            <span className="font-bold text-on-surface">{country.avgTuitionEUR}</span>
          </div>

          <div className="flex justify-between py-1.5 bg-surface-container-low px-3 rounded-xl border border-surface-container/60">
            <span className="text-on-surface-variant font-medium">Living Cost:</span>
            <span className="font-bold text-on-surface">{country.livingCostEUR}</span>
          </div>

          <div className="flex justify-between py-1.5 bg-surface-container-low px-3 rounded-xl border border-surface-container/60">
            <span className="text-on-surface-variant font-medium">Scholarship:</span>
            <span className="font-bold text-emerald-700 truncate max-w-[170px]" title={country.scholarshipName}>
              {country.scholarshipName}
            </span>
          </div>

          <div className="flex justify-between py-1.5 bg-surface-container-low px-3 rounded-xl border border-surface-container/60">
            <span className="text-on-surface-variant font-medium">Stayback:</span>
            <span className="font-bold text-on-surface">{country.postStudyWork}</span>
          </div>
        </div>

        {/* Key Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {country.keyTags.map((tag, idx) => (
            <span
              key={idx}
              className={`text-[11px] font-semibold px-2 py-0.5 rounded ${
                tag.includes('Scholarship') || tag.includes('Free')
                  ? 'bg-emerald-50 text-emerald-800'
                  : 'bg-surface-container text-on-surface'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Action Bar */}
      <div className="flex items-center gap-2 pt-2 border-t border-surface-container">
        <button
          onClick={() => onViewGuide(country)}
          className={`flex-1 py-2.5 px-3 rounded-xl text-[12px] font-bold text-center transition-colors shadow-sm ${
            country.id === 'italy' || country.id === 'germany'
              ? 'bg-secondary text-white hover:bg-secondary-container'
              : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
          }`}
        >
          View {country.name} Guide
        </button>

        <label className="flex items-center gap-1.5 px-3 py-2 bg-surface-container rounded-xl text-[12px] cursor-pointer hover:bg-surface-container-high transition-colors select-none">
          <input
            type="checkbox"
            checked={isCompared}
            onChange={() => onToggleCompare(country)}
            className="rounded text-secondary focus:ring-0 w-3.5 h-3.5"
          />
          <span className="text-on-surface font-medium">Compare</span>
        </label>
      </div>
    </div>
  );
};

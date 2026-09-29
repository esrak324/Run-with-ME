import React from 'react';
import { CareerTrack } from '../types';

interface CareerCardProps {
  track: CareerTrack;
  isSelected?: boolean;
  onSelect: (track: CareerTrack) => void;
  onTalkToSpecialist: (track: CareerTrack) => void;
}

export const CareerCard: React.FC<CareerCardProps> = ({
  track,
  isSelected,
  onSelect,
  onTalkToSpecialist,
}) => {
  return (
    <div
      className={`bg-surface-container-lowest rounded-3xl p-6 lg:p-7 shadow-sm transition-all flex flex-col justify-between border ${
        isSelected
          ? 'border-secondary ring-2 ring-secondary/20 shadow-md'
          : 'border-surface-container-high/60 hover:shadow-md hover:-translate-y-1'
      }`}
    >
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between mb-4">
          <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-surface-container text-secondary">
            {track.category}
          </span>
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700">
            {track.demandLevel} Demand ({track.marketDemandPct}%)
          </span>
        </div>

        {/* Title & Short Description */}
        <h3 className="text-xl font-bold text-on-surface tracking-tight mb-2">
          {track.title}
        </h3>
        <p className="text-[13px] text-on-surface-variant mb-4 line-clamp-3 leading-relaxed">
          {track.shortDescription}
        </p>

        {/* Salary & Timeline Row */}
        <div className="grid grid-cols-2 gap-2 mb-4 p-3 bg-surface-container-low rounded-xl text-center">
          <div>
            <span className="text-[10px] text-on-surface-variant uppercase font-semibold block">
              Entry Salary
            </span>
            <span className="text-[13px] font-bold text-on-surface">
              {track.entrySalaryBDT}
            </span>
          </div>
          <div>
            <span className="text-[10px] text-on-surface-variant uppercase font-semibold block">
              Study Time
            </span>
            <span className="text-[13px] font-bold text-secondary">
              {track.prepTimeline}
            </span>
          </div>
        </div>

        {/* Skill Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {track.skills.slice(0, 4).map((skill, idx) => (
            <span
              key={idx}
              className="text-[11px] px-2.5 py-1 bg-surface-container rounded-lg font-medium text-on-surface"
            >
              {skill}
            </span>
          ))}
          {track.skills.length > 4 && (
            <span className="text-[11px] px-2 py-1 bg-surface-container-high rounded-lg font-medium text-on-surface-variant">
              +{track.skills.length - 4} more
            </span>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-2 pt-2 border-t border-surface-container">
        <button
          onClick={() => onSelect(track)}
          className="flex-1 py-2.5 px-3 rounded-xl bg-surface-container text-on-surface text-[13px] font-bold hover:bg-surface-container-high transition-colors text-center"
        >
          View Roadmap ({track.roadmapSteps.length} Steps)
        </button>
        <button
          onClick={() => onTalkToSpecialist(track)}
          className="p-2.5 rounded-xl bg-secondary text-white hover:bg-secondary-container transition-colors shadow-sm"
          title="Talk to Mentor"
        >
          <span className="material-symbols-outlined text-[18px]">support_agent</span>
        </button>
      </div>
    </div>
  );
};

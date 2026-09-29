import React from 'react';
import { Specialist } from '../types';

interface SpecialistCardProps {
  specialist: Specialist;
  onBookSession: (specialist: Specialist) => void;
  onViewProfile?: (specialist: Specialist) => void;
}

export const SpecialistCard: React.FC<SpecialistCardProps> = ({
  specialist,
  onBookSession,
  onViewProfile,
}) => {
  return (
    <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-md border border-surface-container-high/60 group">
      <div>
        {/* Availability & Exp Badges */}
        <div className="flex items-center justify-between mb-4">
          <span
            className={`inline-flex items-center gap-1.5 text-[11px] px-2.5 py-0.5 rounded-full font-semibold ${
              specialist.statusText === 'Booking Fast'
                ? 'bg-amber-50 text-amber-700 border border-amber-200'
                : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                specialist.statusText === 'Booking Fast'
                  ? 'bg-amber-500'
                  : 'bg-emerald-500'
              }`}
            ></span>
            {specialist.statusText}
          </span>
          <span className="text-[11px] font-semibold text-secondary bg-surface-container px-2.5 py-0.5 rounded">
            {specialist.yearsExp}
          </span>
        </div>

        {/* Avatar Initials & Details */}
        <div className="flex items-center gap-3.5 mb-4">
          <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center font-bold text-on-surface text-base group-hover:bg-secondary group-hover:text-white transition-colors shrink-0">
            {specialist.initials}
          </div>
          <div className="min-w-0">
            <h4 className="text-base font-bold text-on-surface truncate">
              {specialist.name}
            </h4>
            <p className="text-[12px] font-semibold text-secondary truncate">
              {specialist.role}
            </p>
          </div>
        </div>

        {/* Bio */}
        <p className="text-[13px] text-on-surface-variant mb-4 line-clamp-2 leading-relaxed">
          {specialist.bio}
        </p>

        {/* Skill Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {specialist.skills.map((skill, idx) => (
            <span
              key={idx}
              className="text-[11px] font-semibold px-2 py-0.5 bg-surface-container rounded text-on-surface"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Action Row */}
      <div className="flex items-center gap-2 pt-2 border-t border-surface-container">
        <button
          onClick={() => onBookSession(specialist)}
          className="flex-1 py-2 px-3 rounded-lg bg-secondary text-white text-[12px] font-bold hover:bg-secondary-container transition-colors text-center shadow-sm"
        >
          Talk to Specialist
        </button>
        <button
          onClick={() => (onViewProfile ? onViewProfile(specialist) : onBookSession(specialist))}
          className="p-2 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors"
          title={`View ${specialist.name}'s Profile`}
        >
          <span className="material-symbols-outlined text-[18px]">person</span>
        </button>
      </div>
    </div>
  );
};

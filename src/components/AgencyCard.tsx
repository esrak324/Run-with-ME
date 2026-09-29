import React from 'react';
import { Agency } from '../types';

interface AgencyCardProps {
  agency: Agency;
  onContactAgency: (agency: Agency) => void;
  onViewCredentials: (agency: Agency) => void;
}

export const AgencyCard: React.FC<AgencyCardProps> = ({
  agency,
  onContactAgency,
  onViewCredentials,
}) => {
  return (
    <div className="bg-surface-container-lowest rounded-3xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-all border border-surface-container-high/60">
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between mb-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed text-[11px] font-bold">
            <span className="material-symbols-outlined text-[14px]">verified</span>
            Verified Partner
          </span>
          <div className="flex items-center text-amber-500 font-bold text-[12px]">
            <span>★ {agency.rating}</span>
            <span className="text-on-surface-variant font-normal ml-1">
              ({agency.reviewCount}+ reviews)
            </span>
          </div>
        </div>

        {/* Agency Name & Specialty */}
        <h3 className="text-lg font-bold text-on-surface">
          {agency.name}
        </h3>
        <p className="text-[12px] text-secondary font-semibold mb-3">
          {agency.specialty} • {agency.officeLocation}
        </p>

        {/* Description */}
        <p className="text-[13px] text-on-surface-variant mb-4 leading-relaxed line-clamp-3">
          {agency.description}
        </p>

        {/* Destinations & Services */}
        <div className="space-y-2 mb-6 text-[12px]">
          <div className="flex items-start gap-2 text-on-surface">
            <span className="material-symbols-outlined text-secondary text-[16px] shrink-0 mt-0.5">
              check_circle
            </span>
            <span>
              <strong>Destinations:</strong> {agency.destinations.join(', ')}
            </span>
          </div>
          <div className="flex items-start gap-2 text-on-surface">
            <span className="material-symbols-outlined text-secondary text-[16px] shrink-0 mt-0.5">
              check_circle
            </span>
            <span>
              <strong>Services:</strong> {agency.services.slice(0, 3).join(', ')}
            </span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-2 pt-2 border-t border-surface-container">
        <button
          onClick={() => onContactAgency(agency)}
          className="flex-1 py-2.5 px-3 rounded-xl bg-primary text-white text-[12px] font-bold hover:bg-secondary transition-colors text-center shadow-sm"
        >
          Contact Agency
        </button>
        <button
          onClick={() => onViewCredentials(agency)}
          className="p-2.5 rounded-xl bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors"
          title="View Verification Checklist"
        >
          <span className="material-symbols-outlined text-[18px]">verified_user</span>
        </button>
      </div>
    </div>
  );
};

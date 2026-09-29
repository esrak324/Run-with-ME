import React, { useState } from 'react';
import { CAREER_SPRINTS } from '../data/mockData';
import { CareerSprint } from '../types';

interface RoadmapSprintSectionProps {
  onSelectSprintAction?: (sprint: CareerSprint) => void;
}

export const RoadmapSprintSection: React.FC<RoadmapSprintSectionProps> = ({
  onSelectSprintAction,
}) => {
  const [activeSprintId, setActiveSprintId] = useState<string>('sprint-se');

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-12 bg-surface-container-low" id="roadmaps-section">
      <div className="max-w-[1360px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[12px] font-bold uppercase tracking-wider text-secondary">
            High-Efficiency Transitions
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-on-surface tracking-tight mt-1">
            Structured 5-Stage Career Sprints
          </h2>
          <p className="text-[14px] text-on-surface-variant mt-2">
            Zero fluff. Step-by-step milestones to jump from academic CSE theory directly into industry roles or European admission.
          </p>
        </div>

        {/* Sprint Cards List */}
        <div className="space-y-4">
          {CAREER_SPRINTS.map((sprint) => {
            const isExpanded = activeSprintId === sprint.id;
            return (
              <div
                key={sprint.id}
                className={`bg-surface-container-lowest p-6 rounded-2xl shadow-sm transition-all border ${
                  isExpanded
                    ? 'border-secondary/40 ring-1 ring-secondary/20'
                    : 'border-surface-container-high/60 hover:shadow-md'
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  {/* Left Column info */}
                  <div
                    className="lg:w-1/4 cursor-pointer"
                    onClick={() => setActiveSprintId(sprint.id)}
                  >
                    <span className="text-[11px] text-secondary uppercase font-bold tracking-wider">
                      Sprint Path {sprint.sprintNumber}
                    </span>
                    <h4 className="text-lg font-bold text-on-surface mt-0.5">
                      {sprint.title}
                    </h4>
                    <p className="text-[12px] text-on-surface-variant mt-1">
                      {sprint.subtitle}
                    </p>
                  </div>

                  {/* 5 Sequence Blocks */}
                  <div className="flex-1 grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-[12px]">
                    {sprint.stages.map((stage, idx) => {
                      const isLast = idx === sprint.stages.length - 1;
                      return (
                        <div
                          key={idx}
                          className={`p-2.5 rounded-xl border flex flex-col justify-center min-h-[56px] ${
                            isLast
                              ? 'bg-secondary-fixed text-on-secondary-fixed font-bold border-secondary/20 shadow-xs'
                              : 'bg-surface-container text-on-surface border-surface-container-high/60 font-medium'
                          }`}
                        >
                          <span className="text-[10px] text-on-surface-variant/80 font-bold block mb-0.5">
                            STAGE {idx + 1}
                          </span>
                          <span className="line-clamp-2">{stage}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Sub info outcome row */}
                <div className="mt-4 pt-3 border-t border-surface-container flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[12px]">
                  <div className="flex items-center gap-2 text-on-surface-variant">
                    <span className="material-symbols-outlined text-secondary text-[16px]">
                      flag
                    </span>
                    <span>
                      <strong>Expected Outcome:</strong> {sprint.outcomes}
                    </span>
                  </div>
                  {onSelectSprintAction && (
                    <button
                      onClick={() => onSelectSprintAction(sprint)}
                      className="text-secondary font-bold hover:underline shrink-0 text-[12px] flex items-center gap-1"
                    >
                      <span>Prepare for this track</span>
                      <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

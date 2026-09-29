import React, { useState } from 'react';
import { CareerTrack } from '../types';

interface CareerPathDetailProps {
  track: CareerTrack;
  onTalkToSpecialist: () => void;
  onBackToTracks?: () => void;
}

export const CareerPathDetail: React.FC<CareerPathDetailProps> = ({
  track,
  onTalkToSpecialist,
  onBackToTracks,
}) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const activeStep = track.roadmapSteps[activeStepIndex] || track.roadmapSteps[0];
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3500);
  };

  return (
    <div className="w-full bg-surface-container-low py-12 lg:py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-[1360px] mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[12px] font-semibold text-on-surface-variant mb-6">
          {onBackToTracks && (
            <button
              onClick={onBackToTracks}
              className="hover:text-secondary transition-colors"
            >
              Career Paths
            </button>
          )}
          <span>›</span>
          <span className="text-secondary">{track.category}</span>
          <span>›</span>
          <span className="text-on-surface font-bold">{track.title}</span>
        </nav>

        <div className="bg-surface-container-lowest rounded-3xl p-6 sm:p-8 lg:p-12 shadow-sm border border-surface-container-high/60">
          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-8 gap-6 border-b border-surface-container">
            <div className="max-w-2xl">
              <span className="px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed text-[11px] font-bold uppercase tracking-wider">
                Spotlight Deep Dive
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-on-surface tracking-tight mt-2">
                What does a {track.title} do in Bangladesh?
              </h2>
              <p className="text-[14px] text-on-surface-variant mt-3 leading-relaxed">
                {track.fullDescription}
              </p>
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 shrink-0">
              <div className="p-4 rounded-2xl bg-surface-container-low border border-surface-container">
                <span className="text-[11px] text-on-surface-variant font-medium">Entry Salary</span>
                <p className="text-lg font-bold text-on-surface mt-0.5">{track.entrySalaryBDT}</p>
                <span className="text-[11px] text-emerald-700 font-semibold">Per Month (Dhaka)</span>
              </div>
              <div className="p-4 rounded-2xl bg-surface-container-low border border-surface-container">
                <span className="text-[11px] text-on-surface-variant font-medium">Market Demand</span>
                <p className="text-lg font-bold text-secondary mt-0.5">{track.demandLevel}</p>
                <span className="text-[11px] text-on-surface-variant font-medium">{track.marketDemandPct}% Index Share</span>
              </div>
              <div className="p-4 rounded-2xl bg-surface-container-low col-span-2 sm:col-span-1 border border-surface-container">
                <span className="text-[11px] text-on-surface-variant font-medium">Prep Timeline</span>
                <p className="text-lg font-bold text-on-surface mt-0.5">{track.prepTimeline}</p>
                <span className="text-[11px] text-secondary font-semibold">Consistent Study</span>
              </div>
            </div>
          </div>

          {/* 2026 Recommended Engineering Sequence Roadmap */}
          <div className="mt-8 pt-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-2">
              <div>
                <h3 className="text-xl font-bold text-on-surface">
                  2026 Recommended Engineering Sequence
                </h3>
                <p className="text-[13px] text-on-surface-variant">
                  Progression pathway from CS fundamentals to verified Dhaka tech offer letter.
                </p>
              </div>
              <span className="inline-flex items-center gap-1 text-[12px] font-semibold text-secondary bg-surface-container px-3 py-1 rounded-full">
                <span className="material-symbols-outlined text-[16px]">touch_app</span> Click stages to inspect syllabus
              </span>
            </div>

            {/* Step Nodes Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 text-center">
              {track.roadmapSteps.map((s, index) => {
                const isActive = index === activeStepIndex;
                const isFinal = index === track.roadmapSteps.length - 1;
                return (
                  <button
                    key={s.step}
                    onClick={() => setActiveStepIndex(index)}
                    className={`p-3 rounded-2xl flex flex-col items-center transition-all border text-left sm:text-center ${
                      isActive
                        ? 'bg-secondary text-white border-secondary shadow-md scale-105'
                        : isFinal
                        ? 'bg-secondary-fixed text-on-secondary-fixed border-secondary-fixed-dim hover:bg-secondary-fixed/80'
                        : 'bg-surface-container text-on-surface border-surface-container-high hover:bg-surface-container-high'
                    }`}
                  >
                    <span
                      className={`w-7 h-7 rounded-full font-bold text-[12px] flex items-center justify-center mb-2 ${
                        isActive
                          ? 'bg-white text-secondary'
                          : isFinal
                          ? 'bg-secondary text-white'
                          : 'bg-secondary text-white'
                      }`}
                    >
                      {s.step}
                    </span>
                    <span className="text-[12px] font-bold line-clamp-1">{s.title}</span>
                    <span
                      className={`text-[10px] mt-1 line-clamp-1 ${
                        isActive ? 'text-white/80' : 'text-on-surface-variant'
                      }`}
                    >
                      {s.subtext}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Stage Detail Callout */}
            {activeStep && (
              <div className="mt-4 p-4 rounded-2xl bg-surface-container-low border border-secondary/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-secondary text-white text-[11px] font-bold flex items-center justify-center">
                      {activeStep.step}
                    </span>
                    <span className="font-bold text-sm text-on-surface">
                      Stage {activeStep.step}: {activeStep.title} ({activeStep.subtext})
                    </span>
                  </div>
                  <p className="text-[13px] text-on-surface-variant mt-1">
                    {activeStep.detail}
                  </p>
                </div>
                <span className="text-[11px] font-semibold text-secondary uppercase tracking-wider shrink-0 bg-white px-2.5 py-1 rounded-md border border-surface-container">
                  Milestone #{activeStep.step}
                </span>
              </div>
            )}

            {/* 3 Bento Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {/* Skills */}
              <div className="bg-surface-container-low p-5 rounded-2xl border border-surface-container">
                <h4 className="text-base font-bold text-on-surface mb-3 flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[20px]">
                    terminal
                  </span>
                  Key Required Skills
                </h4>
                <ul className="text-[13px] text-on-surface-variant space-y-2">
                  {track.skills.map((skill, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Portfolio */}
              <div className="bg-surface-container-low p-5 rounded-2xl border border-surface-container">
                <h4 className="text-base font-bold text-on-surface mb-3 flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[20px]">
                    folder_special
                  </span>
                  Portfolio That Gets Interviews
                </h4>
                <ul className="text-[13px] text-on-surface-variant space-y-2">
                  {track.portfolioProjects.map((proj, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>{proj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Interview Tips */}
              <div className="bg-surface-container-low p-5 rounded-2xl border border-surface-container">
                <h4 className="text-base font-bold text-on-surface mb-3 flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[20px]">
                    psychology
                  </span>
                  Dhaka Tech Interview Tips
                </h4>
                <ul className="text-[13px] text-on-surface-variant space-y-2">
                  {track.interviewTips.map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Action Bar */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 bg-surface-container-low/60 rounded-2xl p-5 border border-surface-container">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-2xl text-secondary">
                    download
                  </span>
                </div>
                <div>
                  <p className="text-sm font-bold text-on-surface">
                    2026 {track.title} Roadmap & Syllabus
                  </p>
                  <p className="text-[12px] text-on-surface-variant">
                    Curated list of free repositories, mock tests, and interview checklists.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={handleDownload}
                  className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-surface-container text-on-surface text-[13px] font-bold hover:bg-surface-container-high transition-colors text-center"
                >
                  {downloadSuccess ? '✓ PDF Syllabus Prepared' : 'Download Syllabus'}
                </button>
                <button
                  onClick={onTalkToSpecialist}
                  className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-secondary text-white text-[13px] font-bold hover:bg-secondary-container transition-colors shadow-sm text-center"
                >
                  Talk to Specialist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

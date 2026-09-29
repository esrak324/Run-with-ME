import React, { useState } from 'react';
import { PageSection, CareerTrack, Specialist, CountryDestination, Agency } from './types';
import {
  CAREER_TRACKS,
  SPECIALISTS_DATA,
  COUNTRIES_DATA,
  AGENCIES_DATA,
  TESTIMONIALS_DATA,
} from './data/mockData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CareerCard } from './components/CareerCard';
import { CareerPathDetail } from './components/CareerPathDetail';
import { SpecialistCard } from './components/SpecialistCard';
import { CountryCard } from './components/CountryCard';
import { CountryComparisonModal } from './components/CountryComparisonModal';
import { CountryDetailView } from './components/CountryDetailView';
import { AgencyCard } from './components/AgencyCard';
import { RoadmapSprintSection } from './components/RoadmapSprintSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { DiagnosticQuizModal } from './components/DiagnosticQuizModal';

export default function App() {
  const [currentSection, setCurrentSection] = useState<PageSection>('home');
  const [selectedCareerTrack, setSelectedCareerTrack] = useState<CareerTrack>(CAREER_TRACKS[0]);
  const [specialistCategory, setSpecialistCategory] = useState<string>('All Fields');

  // Country filters
  const [countryBudgetFilter, setCountryBudgetFilter] = useState<string>('all');
  const [countryGoalFilter, setCountryGoalFilter] = useState<string>('all');
  const [comparedCountryIds, setComparedCountryIds] = useState<string[]>(['italy', 'germany']);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState<boolean>(false);
  const [detailedCountryId, setDetailedCountryId] = useState<string>('italy');

  // Modals
  const [isConsultationOpen, setIsConsultationOpen] = useState<boolean>(false);
  const [consultationTopic, setConsultationTopic] = useState<string>('');
  const [selectedSpecialistForBooking, setSelectedSpecialistForBooking] = useState<Specialist | null>(null);
  const [isDiagnosticOpen, setIsDiagnosticOpen] = useState<boolean>(false);
  const [agencyVerificationModal, setAgencyVerificationModal] = useState<Agency | null>(null);

  // Handlers
  const handleOpenConsultation = (topic?: string, specialist?: Specialist) => {
    setConsultationTopic(topic || '');
    setSelectedSpecialistForBooking(specialist || null);
    setIsConsultationOpen(true);
  };

  const handleToggleCountryCompare = (country: CountryDestination) => {
    if (comparedCountryIds.includes(country.id)) {
      setComparedCountryIds(comparedCountryIds.filter((id) => id !== country.id));
    } else {
      if (comparedCountryIds.length >= 4) {
        alert('You can compare up to 4 countries at a time.');
        return;
      }
      setComparedCountryIds([...comparedCountryIds, country.id]);
    }
  };

  const handleViewCountryGuide = (country: CountryDestination) => {
    setDetailedCountryId(country.id);
    setCurrentSection('country-details');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filtered lists
  const filteredSpecialists = SPECIALISTS_DATA.filter((s) => {
    if (specialistCategory === 'All Fields') return true;
    if (specialistCategory === 'Software Eng') return s.category === 'Software Eng';
    if (specialistCategory === 'Full Stack') return s.category === 'Full Stack';
    if (specialistCategory === 'AI & Data') return s.category === 'AI & Data';
    if (specialistCategory === 'DevOps & Security') return s.category === 'DevOps & Security';
    return true;
  });

  const filteredCountries = COUNTRIES_DATA.filter((c) => {
    if (countryBudgetFilter !== 'all' && c.budgetCategory !== countryBudgetFilter) {
      return false;
    }
    if (countryGoalFilter !== 'all') {
      if (countryGoalFilter === 'low-tuition' && !c.avgTuitionEUR.includes('€0') && !c.keyTags.includes('Low Tuition')) {
        return false;
      }
      if (countryGoalFilter === 'scholarship' && !c.keyTags.includes('100% Scholarship') && !c.keyTags.includes('Full Scholarship')) {
        return false;
      }
      if (countryGoalFilter === 'pr' && !c.keyTags.includes('EU Blue Card') && !c.keyTags.includes('Fast Citizenship Path') && !c.keyTags.includes('Express Entry PR')) {
        return false;
      }
      if (countryGoalFilter === 'stayback' && !c.postStudyWork.includes('2 Years') && !c.postStudyWork.includes('3 Years') && !c.postStudyWork.includes('18 Months')) {
        return false;
      }
    }
    return true;
  });

  const comparedCountries = COUNTRIES_DATA.filter((c) =>
    comparedCountryIds.includes(c.id)
  );

  return (
    <div className="min-h-screen bg-surface font-sans text-on-surface flex flex-col selection:bg-secondary-fixed selection:text-on-secondary-fixed">
      {/* 1. Global Navigation Bar */}
      <Navbar
        currentSection={currentSection}
        onNavigate={setCurrentSection}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      <main className="w-full pt-20 flex-1">
        {/* VIEW: HOME (Master overview of ecosystem) */}
        {currentSection === 'home' && (
          <div className="flex flex-col w-full">
            {/* Split Hero with Founder Card & Current Situation Analytics */}
            <Hero
              onOpenConsultation={() => handleOpenConsultation('Founder 1-on-1 Strategy')}
              onNavigateToLocal={() => setCurrentSection('local-job-market')}
              onNavigateToAbroad={() => setCurrentSection('abroad-masters')}
              onOpenDiagnostic={() => setIsDiagnosticOpen(true)}
            />

            {/* 2. CHOOSE YOUR PATH (Two Structured Trajectories) */}
            <section className="w-full py-16 px-4 sm:px-6 lg:px-12 bg-surface-container-low border-y border-surface-container/60">
              <div className="max-w-[1360px] mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-12">
                  <span className="text-[12px] font-bold uppercase tracking-widest text-secondary">
                    Two Structured Trajectories
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-bold text-on-surface tracking-tight mt-1">
                    Choose Your Path
                  </h2>
                  <p className="text-[14px] text-on-surface-variant mt-3 leading-relaxed">
                    Whether you want to build high-scale software in Dhaka or pursue an internationally subsidized Master of Science degree abroad, start with a clear roadmap.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Trajectory 1: Local Job Market */}
                  <div className="bg-surface-container-lowest rounded-3xl p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group border border-surface-container-high/60">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <span className="w-14 h-14 rounded-2xl bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center text-3xl group-hover:scale-105 transition-transform">
                          💼
                        </span>
                        <span className="px-3 py-1 bg-surface-container text-secondary text-[12px] font-bold rounded-full">
                          Local Ecosystem
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-on-surface tracking-tight mb-3">
                        Local Job Market
                      </h3>
                      <p className="text-[14px] text-on-surface-variant mb-6 leading-relaxed">
                        Explore the most relevant technology career paths in Bangladesh. Understand expected entry-level pay scales, production frameworks, portfolio expectations, and how to crack technical interviews at top domestic tech giants.
                      </p>

                      <div className="mb-8">
                        <p className="text-[12px] font-bold uppercase tracking-wider text-on-surface mb-3">
                          Core Specializations in Bangladesh:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface text-[12px] font-semibold">
                            Software Engineering
                          </span>
                          <span className="px-3 py-1.5 rounded-lg bg-secondary-fixed text-secondary text-[12px] font-bold">
                            Full Stack Dev
                          </span>
                          <span className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface text-[12px] font-semibold">
                            AI & ML
                          </span>
                          <span className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface text-[12px] font-semibold">
                            Data Analysis
                          </span>
                          <span className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface text-[12px] font-semibold">
                            Cyber Security
                          </span>
                          <span className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface text-[12px] font-semibold">
                            Networking
                          </span>
                          <span className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface text-[12px] font-semibold">
                            DevOps & Cloud
                          </span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => setCurrentSection('local-job-market')}
                      className="w-full inline-flex items-center justify-between px-6 py-4 rounded-xl bg-primary text-white font-bold text-sm group-hover:bg-secondary transition-all shadow-sm"
                    >
                      <span>Explore Local Career Paths</span>
                      <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </button>
                  </div>

                  {/* Trajectory 2: Abroad Master's */}
                  <div className="bg-surface-container-lowest rounded-3xl p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group border border-surface-container-high/60">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <span className="w-14 h-14 rounded-2xl bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center text-3xl group-hover:scale-105 transition-transform">
                          🎓
                        </span>
                        <span className="px-3 py-1 bg-tertiary-fixed text-tertiary-container text-[12px] font-bold rounded-full">
                          Global Opportunities
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-on-surface tracking-tight mb-3">
                        Abroad Master's
                      </h3>
                      <p className="text-[14px] text-on-surface-variant mb-6 leading-relaxed">
                        Compare universities across Europe and North America with transparent tuition costs, verified government scholarships, blocked accounts, Dhaka Embassy visa schedules, and post-study permanent residency (PR) paths.
                      </p>

                      <div className="mb-8">
                        <p className="text-[12px] font-bold uppercase tracking-wider text-on-surface mb-3">
                          Key Guidance Tracks:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface text-[12px] font-semibold">
                            Country Selection
                          </span>
                          <span className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface text-[12px] font-semibold">
                            University Ranking
                          </span>
                          <span className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface text-[12px] font-semibold">
                            Budget & Blocked Acct
                          </span>
                          <span className="px-3 py-1.5 rounded-lg bg-tertiary-fixed text-on-tertiary-fixed text-[12px] font-bold">
                            DSU / Stipendium
                          </span>
                          <span className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface text-[12px] font-semibold">
                            Visa File (Dhaka VFS)
                          </span>
                          <span className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface text-[12px] font-semibold">
                            Part-time Jobs
                          </span>
                          <span className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface text-[12px] font-semibold">
                            PR & EU Blue Card
                          </span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => setCurrentSection('abroad-masters')}
                      className="w-full inline-flex items-center justify-between px-6 py-4 rounded-xl bg-secondary text-white font-bold text-sm group-hover:bg-secondary-container transition-all shadow-sm"
                    >
                      <span>Explore Master's Abroad</span>
                      <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">
                        travel_explore
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* 3. LOCAL TECH JOB MARKET / SPECIALIST DIRECTORY PREVIEW */}
            <section className="w-full py-16 px-4 sm:px-6 lg:px-12 bg-surface">
              <div className="max-w-[1360px] mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                  <div>
                    <span className="text-[12px] font-bold uppercase tracking-wider text-secondary">
                      1-on-1 Specialist Directory
                    </span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-on-surface tracking-tight mt-1">
                      Find Your Tech Career Path
                    </h2>
                    <p className="text-[14px] text-on-surface-variant">
                      Choose a specialized engineering track and connect directly with senior practitioners in Bangladesh.
                    </p>
                  </div>

                  {/* Filter tabs */}
                  <div className="flex flex-wrap gap-2">
                    {['All Fields', 'Software Eng', 'Full Stack', 'AI & Data', 'DevOps & Security'].map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSpecialistCategory(cat)}
                        className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                          specialistCategory === cat
                            ? 'bg-primary text-white shadow-xs'
                            : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Specialists Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredSpecialists.map((specialist) => (
                    <SpecialistCard
                      key={specialist.id}
                      specialist={specialist}
                      onBookSession={(s) => handleOpenConsultation(`1-on-1 with ${s.name}`, s)}
                      onViewProfile={(s) => handleOpenConsultation(`Profile Review with ${s.name}`, s)}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* 4. CAREER PATH SPOTLIGHT: Full Stack Deep Dive */}
            <CareerPathDetail
              track={selectedCareerTrack}
              onTalkToSpecialist={() =>
                handleOpenConsultation(`Specialist Guidance for ${selectedCareerTrack.title}`)
              }
              onBackToTracks={() => setCurrentSection('career-paths')}
            />

            {/* 5. ABROAD MASTER'S COMPASS & COUNTRIES PREVIEW */}
            <section className="w-full py-16 px-4 sm:px-6 lg:px-12 bg-surface">
              <div className="max-w-[1360px] mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                  <div>
                    <span className="text-[12px] font-bold uppercase tracking-wider text-secondary">
                      Higher Studies Compass
                    </span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-on-surface tracking-tight mt-1">
                      Find the Right Country for Your Master's
                    </h2>
                    <p className="text-[14px] text-on-surface-variant">
                      Compare verified destination metrics based on your actual budget in BDT, GPA, and PR ambition.
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    {comparedCountryIds.length > 0 && (
                      <button
                        onClick={() => setIsCompareModalOpen(true)}
                        className="px-4 py-2 bg-secondary text-white font-bold text-xs rounded-xl hover:bg-secondary-container transition-all shadow-sm flex items-center gap-1.5"
                      >
                        <span className="material-symbols-outlined text-[16px]">compare_arrows</span>
                        <span>Compare Selected ({comparedCountryIds.length})</span>
                      </button>
                    )}
                    <span className="px-3 py-1.5 bg-surface-container-high text-on-surface font-bold text-xs rounded-lg">
                      10 Active Destinations
                    </span>
                  </div>
                </div>

                {/* Country Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {COUNTRIES_DATA.slice(0, 6).map((country) => (
                    <CountryCard
                      key={country.id}
                      country={country}
                      isCompared={comparedCountryIds.includes(country.id)}
                      onToggleCompare={handleToggleCountryCompare}
                      onViewGuide={handleViewCountryGuide}
                    />
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <button
                    onClick={() => setCurrentSection('countries')}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-surface-container text-on-surface font-bold text-sm hover:bg-surface-container-high transition-colors"
                  >
                    <span>View All 10 Countries & Comprehensive Filter Matrix</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            </section>

            {/* 6. COUNTRY FULL GUIDE SPOTLIGHT: Study in Italy 🇮🇹 */}
            <CountryDetailView
              initialCountryId="italy"
              onBookConsultation={(country) =>
                handleOpenConsultation(`Study in ${country} Master's Strategy`)
              }
              onBackToCountries={() => setCurrentSection('countries')}
            />

            {/* 7. ABROAD CONSULTANT & VERIFIED AGENCY DIRECTORY */}
            <section className="w-full py-16 px-4 sm:px-6 lg:px-12 bg-surface">
              <div className="max-w-[1360px] mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                  <div>
                    <span className="text-[12px] font-bold uppercase tracking-wider text-secondary">
                      Trusted Partner Network
                    </span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-on-surface tracking-tight mt-1">
                      Need Help With Your Application?
                    </h2>
                    <p className="text-[14px] text-on-surface-variant">
                      Verified student consultancy firms and application advisors with strict anti-fraud guarantees.
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-800 rounded-lg text-xs font-bold border border-emerald-200">
                    <span className="material-symbols-outlined text-[16px]">verified_user</span>
                    <span>Strict No-Fraud Guarantee</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {AGENCIES_DATA.map((agency) => (
                    <AgencyCard
                      key={agency.id}
                      agency={agency}
                      onContactAgency={(a) =>
                        handleOpenConsultation(`Advisory referral for ${a.name}`)
                      }
                      onViewCredentials={(a) => setAgencyVerificationModal(a)}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* 8. STRUCTURED 5-STAGE CAREER SPRINTS */}
            <RoadmapSprintSection
              onSelectSprintAction={(sprint) =>
                handleOpenConsultation(`Career Sprint Prep: ${sprint.title}`)
              }
            />

            {/* 9. TESTIMONIALS & COMMUNITY SUCCESS */}
            <section className="w-full py-16 px-4 sm:px-6 lg:px-12 bg-surface">
              <div className="max-w-[1360px] mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-12">
                  <span className="text-[12px] font-bold uppercase tracking-wider text-secondary">
                    Real Stories, Real Results
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-on-surface tracking-tight mt-1">
                    From BD Classrooms to Global Software Engineering
                  </h2>
                  <p className="text-[14px] text-on-surface-variant mt-2">
                    Verified CSE graduates from BUET, DU, BRACU, AIUB, and UIU who turned our strategic guides into offers.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {TESTIMONIALS_DATA.map((t) => (
                    <div
                      key={t.id}
                      className="bg-surface-container-lowest rounded-3xl p-6 shadow-sm flex flex-col justify-between border border-surface-container-high/60"
                    >
                      <div>
                        <div className="flex items-center gap-1 text-amber-500 mb-3 text-sm">
                          {[...Array(t.rating)].map((_, i) => (
                            <span key={i}>★</span>
                          ))}
                        </div>
                        <p className="text-[13px] text-on-surface-variant mb-6 italic leading-relaxed">
                          "{t.quote}"
                        </p>
                      </div>

                      <div className="flex items-center gap-3 pt-4 border-t border-surface-container">
                        <div className="w-10 h-10 rounded-full bg-secondary-fixed text-secondary flex items-center justify-center font-bold text-xs shrink-0">
                          {t.initials}
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-bold text-on-surface truncate">
                            {t.name}
                          </p>
                          <p className="text-[11px] text-on-surface-variant truncate">
                            {t.university} • {t.destination}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 10. FINAL CTA BANNER */}
            <CTASection
              onOpenConsultation={() => handleOpenConsultation('Free 15-Min Strategy Session')}
              onExploreLocal={() => setCurrentSection('local-job-market')}
              onExploreAbroad={() => setCurrentSection('abroad-masters')}
            />
          </div>
        )}

        {/* VIEW: LOCAL JOB MARKET */}
        {currentSection === 'local-job-market' && (
          <div className="w-full py-12 px-4 sm:px-6 lg:px-12 bg-surface">
            <div className="max-w-[1360px] mx-auto">
              {/* Header */}
              <div className="max-w-3xl mb-10">
                <span className="text-xs font-bold uppercase tracking-widest text-secondary">
                  Dhaka Tech Ecosystem 2026
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface tracking-tight mt-1">
                  Bangladesh Tech Job Market & Salary Benchmarks
                </h1>
                <p className="text-base text-on-surface-variant mt-3 leading-relaxed">
                  Understand hiring dynamics across Dhaka's product companies, multinational offshore centers, telecom networks, and fintech unicorns.
                </p>
              </div>

              {/* Salary Index Table */}
              <div className="bg-surface-container-lowest rounded-3xl p-6 lg:p-8 shadow-sm border border-surface-container-high/60 mb-12">
                <h3 className="text-xl font-bold text-on-surface mb-2">
                  Sample Salary Tiers for CSE Undergrads in Dhaka (BDT)
                </h3>
                <p className="text-xs text-on-surface-variant mb-6">
                  Based on recent Dhaka software engineer offer letters across product companies and consultancies.
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm border-collapse">
                    <thead>
                      <tr className="border-b border-surface-container bg-surface-container-low text-xs uppercase font-bold text-on-surface-variant">
                        <th className="p-3.5">Specialization Track</th>
                        <th className="p-3.5">Junior / Entry Level (0-1 yr)</th>
                        <th className="p-3.5">Mid Level (2-4 yrs)</th>
                        <th className="p-3.5">Senior / Lead (5+ yrs)</th>
                        <th className="p-3.5">Hiring Companies in BD</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-surface-container text-xs">
                      {CAREER_TRACKS.map((track) => (
                        <tr key={track.id} className="hover:bg-surface-container-low/40">
                          <td className="p-3.5 font-bold text-on-surface text-sm">
                            {track.title}
                          </td>
                          <td className="p-3.5 font-bold text-emerald-700">
                            {track.entrySalaryBDT}/mo
                          </td>
                          <td className="p-3.5 font-semibold text-secondary">
                            {track.midSalaryBDT}/mo
                          </td>
                          <td className="p-3.5 font-semibold text-on-surface">
                            ৳160k - ৳300k+/mo
                          </td>
                          <td className="p-3.5 text-on-surface-variant font-medium">
                            Chaldal, Pathao, bKash, Brain Station, Kaz, Therap, Enosis
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Career Tracks Grid */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-on-surface mb-6">
                  Select a Specialization to Inspect Engineering Roadmap
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {CAREER_TRACKS.map((track) => (
                    <CareerCard
                      key={track.id}
                      track={track}
                      isSelected={selectedCareerTrack.id === track.id}
                      onSelect={(t) => {
                        setSelectedCareerTrack(t);
                        window.scrollTo({ top: 900, behavior: 'smooth' });
                      }}
                      onTalkToSpecialist={(t) =>
                        handleOpenConsultation(`Local Job Guidance for ${t.title}`)
                      }
                    />
                  ))}
                </div>
              </div>

              {/* Detailed Roadmap for selected track */}
              <CareerPathDetail
                track={selectedCareerTrack}
                onTalkToSpecialist={() =>
                  handleOpenConsultation(`1-on-1 Prep for ${selectedCareerTrack.title}`)
                }
              />
            </div>
          </div>
        )}

        {/* VIEW: CAREER PATHS */}
        {currentSection === 'career-paths' && (
          <div className="w-full py-12 px-4 sm:px-6 lg:px-12 bg-surface">
            <div className="max-w-[1360px] mx-auto">
              <div className="max-w-3xl mb-10">
                <span className="text-xs font-bold uppercase tracking-widest text-secondary">
                  Structured CSE Curricula
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface tracking-tight mt-1">
                  7 Core Engineering Specialization Tracks
                </h1>
                <p className="text-base text-on-surface-variant mt-3 leading-relaxed">
                  Choose a track to inspect prerequisite technologies, project ideas, portfolio tips, and step-by-step milestones.
                </p>
              </div>

              {/* Track selector buttons */}
              <div className="flex flex-wrap gap-2.5 mb-8">
                {CAREER_TRACKS.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setSelectedCareerTrack(t)}
                    className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                      selectedCareerTrack.id === t.id
                        ? 'bg-secondary text-white shadow-sm'
                        : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
                    }`}
                  >
                    {t.title}
                  </button>
                ))}
              </div>

              {/* Detail view of the selected track */}
              <CareerPathDetail
                track={selectedCareerTrack}
                onTalkToSpecialist={() =>
                  handleOpenConsultation(`Specialist Prep: ${selectedCareerTrack.title}`)
                }
              />

              {/* Structured Sprints */}
              <div className="mt-12">
                <RoadmapSprintSection
                  onSelectSprintAction={(sprint) =>
                    handleOpenConsultation(`Career Sprint: ${sprint.title}`)
                  }
                />
              </div>
            </div>
          </div>
        )}

        {/* VIEW: SPECIALISTS / MENTORS */}
        {currentSection === 'specialists' && (
          <div className="w-full py-12 px-4 sm:px-6 lg:px-12 bg-surface">
            <div className="max-w-[1360px] mx-auto">
              <div className="max-w-3xl mb-10">
                <span className="text-xs font-bold uppercase tracking-widest text-secondary">
                  Senior Practitioner Network
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface tracking-tight mt-1">
                  1-on-1 Verified Specialists & Mentors
                </h1>
                <p className="text-base text-on-surface-variant mt-3 leading-relaxed">
                  Connect with software engineers, ML researchers, and cloud architects working at leading tech enterprises in Bangladesh.
                </p>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 mb-8">
                {['All Fields', 'Software Eng', 'Full Stack', 'AI & Data', 'DevOps & Security'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSpecialistCategory(cat)}
                    className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                      specialistCategory === cat
                        ? 'bg-primary text-white shadow-xs'
                        : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredSpecialists.map((specialist) => (
                  <SpecialistCard
                    key={specialist.id}
                    specialist={specialist}
                    onBookSession={(s) => handleOpenConsultation(`1-on-1 with ${s.name}`, s)}
                    onViewProfile={(s) => handleOpenConsultation(`Profile Review: ${s.name}`, s)}
                  />
                ))}
              </div>

              {/* Mentor Guarantee Box */}
              <div className="mt-12 p-6 rounded-2xl bg-surface-container-low border border-surface-container flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary text-3xl">
                    verified_user
                  </span>
                  <div>
                    <h4 className="font-bold text-sm text-on-surface">
                      Verified Identity & Employment
                    </h4>
                    <p className="text-xs text-on-surface-variant">
                      All listed mentors have verified LinkedIn credentials, industry seniority, and proven track records in guiding Bangladeshi CSE undergrads.
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handleOpenConsultation('General Mentorship Matching')}
                  className="px-5 py-2.5 bg-secondary text-white font-bold text-xs rounded-xl hover:bg-secondary-container transition-colors shrink-0 shadow-sm"
                >
                  Request Mentor Match
                </button>
              </div>
            </div>
          </div>
        )}

        {/* VIEW: ABROAD MASTER'S OVERVIEW */}
        {currentSection === 'abroad-masters' && (
          <div className="w-full py-12 px-4 sm:px-6 lg:px-12 bg-surface">
            <div className="max-w-[1360px] mx-auto">
              <div className="max-w-3xl mb-10">
                <span className="text-xs font-bold uppercase tracking-widest text-secondary">
                  Higher Studies Compass
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface tracking-tight mt-1">
                  Master's Abroad for Bangladeshi CSE Students
                </h1>
                <p className="text-base text-on-surface-variant mt-3 leading-relaxed">
                  Transparent breakdown of tuition-free European polytechnics, regional scholarships (DSU, Stipendium), blocked account finances, and permanent residency rules.
                </p>
              </div>

              {/* 3 Step Strategy Pillar */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="p-6 rounded-3xl bg-surface-container-low border border-surface-container">
                  <div className="w-10 h-10 rounded-xl bg-secondary-fixed text-secondary flex items-center justify-center font-bold text-lg mb-4">
                    1
                  </div>
                  <h3 className="text-lg font-bold text-on-surface mb-2">
                    Financial Planning (BDT)
                  </h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed mb-4">
                    Know the exact bank statement and initial outlay needed before applying. Italy & Hungary require &lt; 10 Lakh BDT, whereas Germany requires €11,208 blocked account.
                  </p>
                  <button
                    onClick={() => setCurrentSection('countries')}
                    className="text-secondary font-bold text-xs hover:underline flex items-center gap-1"
                  >
                    <span>Filter by BDT budget</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </button>
                </div>

                <div className="p-6 rounded-3xl bg-surface-container-low border border-surface-container">
                  <div className="w-10 h-10 rounded-xl bg-secondary-fixed text-secondary flex items-center justify-center font-bold text-lg mb-4">
                    2
                  </div>
                  <h3 className="text-lg font-bold text-on-surface mb-2">
                    Portals & Legalization
                  </h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed mb-4">
                    Navigate Uni-Assist (Germany), Universitaly (Italy), and CIMEA credential authentication without paying exorbitant middleman fees.
                  </p>
                  <button
                    onClick={() => setCurrentSection('country-details')}
                    className="text-secondary font-bold text-xs hover:underline flex items-center gap-1"
                  >
                    <span>Inspect Italy Handbook</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </button>
                </div>

                <div className="p-6 rounded-3xl bg-surface-container-low border border-surface-container">
                  <div className="w-10 h-10 rounded-xl bg-secondary-fixed text-secondary flex items-center justify-center font-bold text-lg mb-4">
                    3
                  </div>
                  <h3 className="text-lg font-bold text-on-surface mb-2">
                    Post-Study Career & PR
                  </h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed mb-4">
                    Assess tech industry demand in Munich, Milan, Dublin, and Krakow. Compare stayback durations (9 months to 3 years) and EU Blue Card timelines.
                  </p>
                  <button
                    onClick={() => setIsCompareModalOpen(true)}
                    className="text-secondary font-bold text-xs hover:underline flex items-center gap-1"
                  >
                    <span>Open Comparison Matrix</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </button>
                </div>
              </div>

              {/* Country Grid */}
              <div className="mb-12">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-on-surface">
                    Featured Destinations for BD Cohorts
                  </h3>
                  <button
                    onClick={() => setCurrentSection('countries')}
                    className="text-secondary font-bold text-xs hover:underline"
                  >
                    View All 10 Countries →
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {COUNTRIES_DATA.slice(0, 6).map((c) => (
                    <CountryCard
                      key={c.id}
                      country={c}
                      isCompared={comparedCountryIds.includes(c.id)}
                      onToggleCompare={handleToggleCountryCompare}
                      onViewGuide={handleViewCountryGuide}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* VIEW: COUNTRIES (Filterable destination database) */}
        {currentSection === 'countries' && (
          <div className="w-full py-12 px-4 sm:px-6 lg:px-12 bg-surface">
            <div className="max-w-[1360px] mx-auto">
              <div className="max-w-3xl mb-8">
                <span className="text-xs font-bold uppercase tracking-widest text-secondary">
                  Destination Explorer
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface tracking-tight mt-1">
                  Compare 10 Top Study Abroad Destinations
                </h1>
                <p className="text-base text-on-surface-variant mt-2">
                  Filter by your available sponsor budget in BDT and key strategic objectives.
                </p>
              </div>

              {/* Filter Controls Box */}
              <div className="bg-surface-container-lowest rounded-3xl p-6 shadow-sm mb-8 border border-surface-container-high/60 space-y-4">
                {/* Budget Filters */}
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant block mb-2">
                    1. Initial Sponsor Budget (BDT):
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { id: 'all', label: 'All Budgets' },
                      { id: 'under10', label: 'Under 10 Lakh BDT' },
                      { id: '10-15', label: '10–15 Lakh BDT' },
                      { id: '15-20', label: '15–20 Lakh BDT' },
                      { id: '20-30', label: '20–30 Lakh BDT' },
                      { id: '30plus', label: '30+ Lakh BDT' },
                    ].map((btn) => (
                      <button
                        key={btn.id}
                        onClick={() => setCountryBudgetFilter(btn.id)}
                        className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                          countryBudgetFilter === btn.id
                            ? 'bg-secondary text-white shadow-xs'
                            : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
                        }`}
                      >
                        {btn.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Goal Filters */}
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant block mb-2">
                    2. Strategic Objective:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { id: 'all', label: 'All Objectives' },
                      { id: 'low-tuition', label: '✨ Low / Free Tuition' },
                      { id: 'scholarship', label: '🎓 100% Scholarship' },
                      { id: 'stayback', label: '🚀 Long Post-Study Work' },
                      { id: 'pr', label: '🛂 Clear PR Pathway' },
                    ].map((btn) => (
                      <button
                        key={btn.id}
                        onClick={() => setCountryGoalFilter(btn.id)}
                        className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                          countryGoalFilter === btn.id
                            ? 'bg-secondary-fixed text-on-secondary-fixed font-bold'
                            : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
                        }`}
                      >
                        {btn.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Compare Bar if items checked */}
                {comparedCountryIds.length > 0 && (
                  <div className="pt-3 border-t border-surface-container flex items-center justify-between text-xs">
                    <span className="text-on-surface font-semibold">
                      {comparedCountryIds.length} country(s) selected for side-by-side comparison
                    </span>
                    <button
                      onClick={() => setIsCompareModalOpen(true)}
                      className="px-4 py-1.5 bg-secondary text-white font-bold rounded-lg hover:bg-secondary-container transition-colors shadow-sm"
                    >
                      Open Comparison Matrix
                    </button>
                  </div>
                )}
              </div>

              {/* Results Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCountries.map((country) => (
                  <CountryCard
                    key={country.id}
                    country={country}
                    isCompared={comparedCountryIds.includes(country.id)}
                    onToggleCompare={handleToggleCountryCompare}
                    onViewGuide={handleViewCountryGuide}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* VIEW: COUNTRY DETAILS */}
        {currentSection === 'country-details' && (
          <CountryDetailView
            initialCountryId={detailedCountryId}
            onBookConsultation={(country) =>
              handleOpenConsultation(`Study in ${country} Master's Roadmap`)
            }
            onBackToCountries={() => setCurrentSection('countries')}
          />
        )}

        {/* VIEW: AGENCIES */}
        {currentSection === 'agencies' && (
          <div className="w-full py-12 px-4 sm:px-6 lg:px-12 bg-surface">
            <div className="max-w-[1360px] mx-auto">
              <div className="max-w-3xl mb-10">
                <span className="text-xs font-bold uppercase tracking-widest text-secondary">
                  Verified Education Consultancy
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface tracking-tight mt-1">
                  Trusted Partners & Agency Directory
                </h1>
                <p className="text-base text-on-surface-variant mt-3 leading-relaxed">
                  Avoid fraudulent agents. We rigorously audit student advisory firms in Dhaka for transparent fee structures, genuine university liaisons, and zero document fabrication.
                </p>
              </div>

              {/* Safety Checklist Box */}
              <div className="bg-emerald-50/60 border border-emerald-200 rounded-3xl p-6 lg:p-8 mb-10 text-emerald-900">
                <h3 className="text-lg font-bold mb-2 flex items-center gap-2 text-emerald-800">
                  <span className="material-symbols-outlined text-[20px]">security</span>
                  Run with ME Anti-Fraud Advisory Checklist
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs mt-4">
                  <div className="bg-white/80 p-3 rounded-xl border border-emerald-100">
                    <span className="font-bold block text-emerald-900 mb-1">
                      1. Never pay without agreement
                    </span>
                    Legitimate firms charge fixed professional advisory fees; never pay arbitrary percentages of your future scholarships.
                  </div>
                  <div className="bg-white/80 p-3 rounded-xl border border-emerald-100">
                    <span className="font-bold block text-emerald-900 mb-1">
                      2. Own your university login
                    </span>
                    Ensure you personally have the credentials to your Uni-Assist, Universitaly, and university portal accounts.
                  </div>
                  <div className="bg-white/80 p-3 rounded-xl border border-emerald-100">
                    <span className="font-bold block text-emerald-900 mb-1">
                      3. Legitimate bank sponsors
                    </span>
                    Never use fake third-party loan paper guarantees. European embassies verify source-of-wealth directly with Bangladesh Bank.
                  </div>
                </div>
              </div>

              {/* Agencies Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {AGENCIES_DATA.map((agency) => (
                  <AgencyCard
                    key={agency.id}
                    agency={agency}
                    onContactAgency={(a) =>
                      handleOpenConsultation(`Consultation with ${a.name}`)
                    }
                    onViewCredentials={(a) => setAgencyVerificationModal(a)}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* VIEW: CONTACT / CONSULTATION */}
        {currentSection === 'contact' && (
          <div className="w-full py-12 px-4 sm:px-6 lg:px-12 bg-surface">
            <div className="max-w-[1360px] mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                {/* Left 5 Cols: Contact Info & Masruk Bio */}
                <div className="lg:col-span-5 space-y-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-secondary">
                      Direct Mentorship
                    </span>
                    <h1 className="text-3xl sm:text-4xl font-bold text-on-surface tracking-tight mt-1">
                      Connect With Run with ME
                    </h1>
                    <p className="text-sm text-on-surface-variant mt-2 leading-relaxed">
                      Have a query about your CGPA, European Master's applications, or local software engineering roadmap? Let's talk.
                    </p>
                  </div>

                  <div className="bg-surface-container-lowest p-6 rounded-3xl border border-surface-container-high/60 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-secondary-fixed text-secondary flex items-center justify-center font-bold">
                        <span className="material-symbols-outlined text-[20px]">location_on</span>
                      </div>
                      <div>
                        <span className="text-[11px] text-on-surface-variant uppercase font-bold block">
                          Headquarters
                        </span>
                        <span className="text-sm font-bold text-on-surface">
                          Dhaka, Bangladesh (Virtual & In-person)
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-secondary-fixed text-secondary flex items-center justify-center font-bold">
                        <span className="material-symbols-outlined text-[20px]">chat</span>
                      </div>
                      <div>
                        <span className="text-[11px] text-on-surface-variant uppercase font-bold block">
                          WhatsApp Fast Support
                        </span>
                        <span className="text-sm font-bold text-on-surface">
                          +880 1700-000000
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-secondary-fixed text-secondary flex items-center justify-center font-bold">
                        <span className="material-symbols-outlined text-[20px]">schedule</span>
                      </div>
                      <div>
                        <span className="text-[11px] text-on-surface-variant uppercase font-bold block">
                          Response Time
                        </span>
                        <span className="text-sm font-bold text-on-surface">
                          Within 12 Hours (Sunday - Friday)
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* 2-Min Diagnostic CTA */}
                  <div className="p-6 rounded-3xl bg-primary-container text-white">
                    <span className="text-xs font-bold text-secondary-fixed uppercase tracking-wider block mb-1">
                      Quick Self-Audit
                    </span>
                    <h3 className="text-lg font-bold text-white mb-2">
                      Not ready for a live call?
                    </h3>
                    <p className="text-xs text-inverse-primary leading-relaxed mb-4">
                      Answer 3 simple questions about your CGPA, sponsor budget, and career goals to get automated instant guidance.
                    </p>
                    <button
                      onClick={() => setIsDiagnosticOpen(true)}
                      className="w-full py-2.5 rounded-xl bg-secondary text-white font-bold text-xs hover:bg-secondary-container transition-colors shadow-sm"
                    >
                      Launch 2-Min Diagnostic
                    </button>
                  </div>
                </div>

                {/* Right 7 Cols: Embedded Booking Form */}
                <div className="lg:col-span-7 bg-surface-container-lowest rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm border border-surface-container-high/60">
                  <span className="text-xs font-bold uppercase tracking-wider text-secondary">
                    Schedule 1-on-1 Strategy
                  </span>
                  <h2 className="text-2xl font-bold text-on-surface mt-1 mb-2">
                    Book Your Personal Guidance Session
                  </h2>
                  <p className="text-xs text-on-surface-variant mb-6">
                    Fill in your details below and we will send you confirmed session slots via WhatsApp.
                  </p>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      alert('Session Request Received! Md. Masruk Esrak or the assigned mentor will connect with you via WhatsApp/Email within 12 hours.');
                    }}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-xs font-bold text-on-surface mb-1">
                        Your Full Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Tanvir Chowdhury"
                        className="w-full px-4 py-2.5 rounded-xl bg-surface-container-low text-on-surface border border-surface-container text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-on-surface mb-1">
                          Email Address *
                        </label>
                        <input
                          required
                          type="email"
                          placeholder="name@domain.com"
                          className="w-full px-4 py-2.5 rounded-xl bg-surface-container-low text-on-surface border border-surface-container text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-on-surface mb-1">
                          WhatsApp Number *
                        </label>
                        <input
                          required
                          type="tel"
                          placeholder="+880 1700..."
                          className="w-full px-4 py-2.5 rounded-xl bg-surface-container-low text-on-surface border border-surface-container text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-on-surface mb-1">
                        Primary Topic of Consultation *
                      </label>
                      <select className="w-full px-4 py-2.5 rounded-xl bg-surface-container-low text-on-surface border border-surface-container text-sm focus:outline-none focus:ring-2 focus:ring-secondary">
                        <option>Local Software Engineer Job Prep (Dhaka)</option>
                        <option>Master's in Italy (Universitaly & DSU Scholarship)</option>
                        <option>Master's in Germany (Uni-Assist & Blocked Account)</option>
                        <option>Full Stack Developer Career Roadmap Review</option>
                        <option>Master's in Ireland (Silicon Valley EU HQs)</option>
                        <option>Other European Destinations (Poland, Czech, Hungary)</option>
                        <option>Canada Thesis MSc / Assistantship Strategy</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-on-surface mb-1">
                        Current University, Semester & CGPA *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. BRAC University, 7th Semester, CGPA 3.42"
                        className="w-full px-4 py-2.5 rounded-xl bg-surface-container-low text-on-surface border border-surface-container text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-on-surface mb-1">
                        Specific Questions or Context (Optional)
                      </label>
                      <textarea
                        rows={3}
                        placeholder="e.g. I need guidance on whether to appear for IELTS now or apply with MOI, and how to verify my family income documents for DSU."
                        className="w-full px-4 py-2.5 rounded-xl bg-surface-container-low text-on-surface border border-surface-container text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-secondary text-white font-bold text-sm hover:bg-secondary-container transition-all shadow-md active:scale-[0.98]"
                    >
                      Confirm Guidance Session Request
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Floating Action Button for 1-on-1 Consultation */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => handleOpenConsultation('Quick WhatsApp Strategy')}
          className="flex items-center gap-2 px-5 py-3 rounded-full bg-secondary text-white shadow-xl hover:bg-secondary-container transition-all hover:scale-105 active:scale-95 border border-white/20"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="font-bold text-xs sm:text-sm">Talk with Masruk</span>
          <span className="material-symbols-outlined text-[18px]">chat</span>
        </button>
      </div>

      {/* Modals */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        preselectedTopic={consultationTopic}
        preselectedSpecialist={selectedSpecialistForBooking}
      />

      <DiagnosticQuizModal
        isOpen={isDiagnosticOpen}
        onClose={() => setIsDiagnosticOpen(false)}
        onSelectCountry={handleViewCountryGuide}
        onBookConsultation={() => {
          setIsDiagnosticOpen(false);
          handleOpenConsultation('Diagnostic Follow-up Session');
        }}
      />

      <CountryComparisonModal
        countries={comparedCountries}
        onClose={() => setIsCompareModalOpen(false)}
        onRemoveCountry={(id) =>
          setComparedCountryIds(comparedCountryIds.filter((cid) => cid !== id))
        }
        onSelectCountryForGuide={(c) => {
          setIsCompareModalOpen(false);
          handleViewCountryGuide(c);
        }}
      />

      {/* Agency Verification Credentials Modal */}
      {agencyVerificationModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/75 backdrop-blur-sm">
          <div className="bg-surface-container-lowest rounded-3xl max-w-md w-full p-6 shadow-2xl relative border border-surface-container-high">
            <button
              onClick={() => setAgencyVerificationModal(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-surface-container text-on-surface-variant transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
            <div className="flex items-center gap-2 text-secondary font-bold text-xs uppercase mb-1">
              <span className="material-symbols-outlined text-[18px]">verified</span>
              Agency Trust Verification
            </div>
            <h3 className="text-xl font-bold text-on-surface mb-2">
              {agencyVerificationModal.name}
            </h3>
            <p className="text-xs text-on-surface-variant mb-4">
              {agencyVerificationModal.description}
            </p>
            <div className="space-y-2 text-xs bg-surface-container-low p-4 rounded-2xl mb-4 border border-surface-container">
              <div><strong>Rating:</strong> ★ {agencyVerificationModal.rating} ({agencyVerificationModal.reviewCount}+ student reviews)</div>
              <div><strong>Office:</strong> {agencyVerificationModal.officeLocation}</div>
              <div><strong>Services:</strong> {agencyVerificationModal.services.join(', ')}</div>
              <div><strong>Guarantee:</strong> {agencyVerificationModal.guaranteeText}</div>
            </div>
            <button
              onClick={() => {
                const ag = agencyVerificationModal;
                setAgencyVerificationModal(null);
                handleOpenConsultation(`Direct booking with ${ag.name}`);
              }}
              className="w-full py-2.5 rounded-xl bg-secondary text-white font-bold text-xs hover:bg-secondary-container transition-colors"
            >
              Contact This Verified Agency
            </button>
          </div>
        </div>
      )}

      {/* Global Footer */}
      <Footer
        onNavigate={setCurrentSection}
        onOpenConsultation={() => handleOpenConsultation()}
      />
    </div>
  );
}

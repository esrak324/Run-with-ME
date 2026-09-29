import React, { useState } from 'react';
import { BookingFormData, Specialist } from '../types';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedTopic?: string;
  preselectedSpecialist?: Specialist | null;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  preselectedTopic,
  preselectedSpecialist,
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    email: '',
    phoneWhatsApp: '',
    areaOfInterest: preselectedTopic || (preselectedSpecialist ? `1-on-1 Mentorship with ${preselectedSpecialist.name} (${preselectedSpecialist.role})` : 'Local Software Engineer Job Prep (Dhaka)'),
    academicBackground: '',
    targetTimeline: 'Fall 2026 / Next 6 Months',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phoneWhatsApp: '',
      areaOfInterest: 'Local Software Engineer Job Prep (Dhaka)',
      academicBackground: '',
      targetTimeline: 'Fall 2026 / Next 6 Months',
      notes: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/70 backdrop-blur-sm overflow-y-auto">
      <div className="bg-surface-container-lowest rounded-3xl max-w-lg w-full p-6 lg:p-8 shadow-2xl relative border border-surface-container-high max-h-[92vh] overflow-y-auto">
        <button
          aria-label="Close modal"
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-surface-container text-on-surface-variant transition-colors"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-200">
              <span className="material-symbols-outlined text-3xl">check_circle</span>
            </div>
            <h3 className="text-2xl font-bold text-on-surface mb-2">
              Session Request Confirmed!
            </h3>
            <p className="text-sm text-on-surface-variant max-w-sm mx-auto mb-6 leading-relaxed">
              Thank you, <strong>{formData.fullName}</strong>. Md. Masruk Esrak or the assigned mentor will connect via WhatsApp (<strong>{formData.phoneWhatsApp}</strong>) within 12 hours with appointment slots.
            </p>
            <div className="bg-surface-container-low p-4 rounded-xl text-left text-xs text-on-surface-variant space-y-1 mb-6 border border-surface-container">
              <div><strong>Topic:</strong> {formData.areaOfInterest}</div>
              <div><strong>Academic info:</strong> {formData.academicBackground || 'Not specified'}</div>
              <div><strong>Intended timeline:</strong> {formData.targetTimeline}</div>
            </div>
            <button
              onClick={handleResetAndClose}
              className="w-full py-3 rounded-xl bg-secondary text-white font-bold text-sm hover:bg-secondary-container transition-colors"
            >
              Done & Return
            </button>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <span className="text-[11px] font-bold text-secondary uppercase tracking-wider">
                Direct Mentorship & Higher Study Strategy
              </span>
              <h3 className="text-2xl font-bold text-on-surface mt-1">
                Book Your 1-on-1 Guidance Session
              </h3>
              <p className="text-[13px] text-on-surface-variant mt-1">
                {preselectedSpecialist
                  ? `Consult directly with ${preselectedSpecialist.name} (${preselectedSpecialist.role})`
                  : 'Route your query directly to Md. Masruk Esrak or a domain specialist.'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[12px] font-bold text-on-surface mb-1">
                  Your Full Name *
                </label>
                <input
                  required
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Tanvir Chowdhury"
                  className="w-full px-4 py-2.5 rounded-xl bg-surface-container-low text-on-surface border border-surface-container text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[12px] font-bold text-on-surface mb-1">
                    Email Address *
                  </label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@domain.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-surface-container-low text-on-surface border border-surface-container text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                </div>

                <div>
                  <label className="block text-[12px] font-bold text-on-surface mb-1">
                    WhatsApp Number *
                  </label>
                  <input
                    required
                    type="tel"
                    value={formData.phoneWhatsApp}
                    onChange={(e) => setFormData({ ...formData, phoneWhatsApp: e.target.value })}
                    placeholder="+880 1700-000000"
                    className="w-full px-4 py-2.5 rounded-xl bg-surface-container-low text-on-surface border border-surface-container text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[12px] font-bold text-on-surface mb-1">
                  Primary Area of Interest *
                </label>
                <select
                  value={formData.areaOfInterest}
                  onChange={(e) => setFormData({ ...formData, areaOfInterest: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-surface-container-low text-on-surface border border-surface-container text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                >
                  <option>Local Software Engineer Job Prep (Dhaka)</option>
                  <option>Full Stack Developer Career Roadmap Review</option>
                  <option>Master's in Italy (Universitaly & DSU Scholarship)</option>
                  <option>Master's in Germany (Uni-Assist & Blocked Account)</option>
                  <option>Master's in Ireland (2-Yr Stamp 1G Tech Roles)</option>
                  <option>Central/Eastern Europe (Poland, Czech, Hungary)</option>
                  <option>Canada Thesis MSc / Assistantship Strategy</option>
                  <option>AI / Data Science Portfolio Evaluation</option>
                  {preselectedSpecialist && (
                    <option value={`1-on-1 with ${preselectedSpecialist.name}`}>
                      Direct 1-on-1 with {preselectedSpecialist.name} ({preselectedSpecialist.company})
                    </option>
                  )}
                </select>
              </div>

              <div>
                <label className="block text-[12px] font-bold text-on-surface mb-1">
                  University, Current Semester & CGPA *
                </label>
                <input
                  required
                  type="text"
                  value={formData.academicBackground}
                  onChange={(e) => setFormData({ ...formData, academicBackground: e.target.value })}
                  placeholder="e.g. BRAC University, 7th Semester, CGPA 3.42"
                  className="w-full px-4 py-2.5 rounded-xl bg-surface-container-low text-on-surface border border-surface-container text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>

              <div>
                <label className="block text-[12px] font-bold text-on-surface mb-1">
                  Target Timeline
                </label>
                <select
                  value={formData.targetTimeline}
                  onChange={(e) => setFormData({ ...formData, targetTimeline: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-surface-container-low text-on-surface border border-surface-container text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                >
                  <option>Immediate (Next 1-2 Months)</option>
                  <option>Fall 2026 Intake</option>
                  <option>Spring 2027 Intake</option>
                  <option>Graduation Year (Final Year Planning)</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-secondary text-white font-bold text-sm hover:bg-secondary-container transition-all shadow-md mt-4 active:scale-[0.98]"
              >
                Confirm Strategy Session Request
              </button>

              <p className="text-[11px] text-on-surface-variant text-center mt-2">
                🔒 We respect your privacy. No spam. You will be messaged solely for scheduling your session.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

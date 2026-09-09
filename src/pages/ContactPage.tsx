import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  HelpCircle,
  ChevronDown
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    servicePillar: 'Welding & High-Pressure Fabrication',
    location: 'Port Harcourt / Rivers State',
    scope: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="w-full">
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative bg-[#0B192C] text-white py-20 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-white/10 mb-10">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
              <Link to="/" className="hover:text-emerald-400 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-emerald-400 font-bold">Contact &amp; Tender Desk</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-emerald-300 uppercase tracking-wider">
              24/7 Emergency Dispatch Active
            </div>
          </div>

          <div className="max-w-3xl space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-[#FF6A00]/20 text-[#FF6A00] text-xs font-semibold uppercase tracking-wider border border-[#FF6A00]/30">
              Direct Project Mobilization
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Tender Desk &amp; <br />
              <span className="text-[#FF6A00]">RFQ Submission</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Submit your engineering tenders, requests for quotation (RFQ), or technical workforce requests. 
              Our Port Harcourt commercial estimating desk will review and respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== MAIN CONTACT & RFQ FORM SPLIT ==================== */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Direct Head Office Information */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-[#00503a] text-xs font-semibold uppercase tracking-wider border border-emerald-200 mb-3">
                  Operational Headquarters
                </div>
                <h2 className="font-display text-3xl font-bold text-slate-900 tracking-tight">
                  Connect Directly with Our Engineers
                </h2>
                <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                  Located in the heart of the Niger Delta industrial hub, our Port Harcourt staging yard and executive offices provide rapid response to all offshore and onshore project requests.
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#FF6A00] flex items-center justify-center shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-slate-900">Head Office Location</h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      3 Wopara Street, Off Eneka Road, Port Harcourt, Rivers State, Nigeria
                    </p>
                    <span className="text-[11px] font-semibold text-emerald-600 uppercase tracking-wider block mt-1">
                      RC: 9665822
                    </span>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 text-[#00503a] flex items-center justify-center shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-slate-900">Direct Telephone Hotline</h3>
                    <a href="tel:08062887287" className="text-sm font-semibold text-slate-900 hover:text-[#00503a] block mt-1">
                      08062887287
                    </a>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Available for urgent mobilization and field dispatch.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-slate-900">Official Tender Email</h3>
                    <a href="mailto:jotechnicalsourceslimited@gmail.com" className="text-xs font-semibold text-slate-900 hover:text-[#00503a] block mt-1 break-all">
                      jotechnicalsourceslimited@gmail.com
                    </a>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Send RFQ documents, drawings, and technical tender packages.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-slate-900">Working Hours</h3>
                    <p className="text-xs text-slate-600 mt-1">
                      Mon – Sat: 08:00 AM – 06:00 PM (West Africa Time)
                    </p>
                    <p className="text-xs text-emerald-600 font-medium mt-0.5">
                      24/7 Field Dispatch for Emergency Shutdowns
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive RFQ Submission Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl border border-slate-200 p-8 lg:p-10 shadow-sm">
                
                {formSubmitted ? (
                  <div className="text-center py-12 space-y-6">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 size={36} />
                    </div>
                    <h3 className="font-display font-bold text-2xl text-slate-900">
                      Tender Request Received!
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      Thank you for submitting your project requirements to <strong>J&amp;O Technical Services Limited</strong>. 
                      Our commercial estimating team in Port Harcourt is reviewing your scope and will get back to you shortly at <strong>{formData.email}</strong>.
                    </p>
                    <div className="pt-4">
                      <button 
                        onClick={() => {
                          setFormSubmitted(false);
                          setFormData({
                            name: '',
                            email: '',
                            phone: '',
                            company: '',
                            servicePillar: 'Welding & High-Pressure Fabrication',
                            location: 'Port Harcourt / Rivers State',
                            scope: ''
                          });
                        }}
                        className="btn bg-[#00503a] text-white px-6 py-2.5 rounded-lg text-sm font-semibold"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <h3 className="font-display font-bold text-2xl text-slate-900 tracking-tight">
                        Submit RFQ / Project Inquiry
                      </h3>
                      <p className="text-xs text-slate-500 mt-1">
                        Please provide project scope details below for rapid commercial assessment.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                          Representative Name *
                        </label>
                        <input 
                          type="text" 
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="e.g. Engr. Chukwuma Obi"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#00503a] focus:ring-1 focus:ring-[#00503a] bg-slate-50/50"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                          Corporate Email *
                        </label>
                        <input 
                          type="email" 
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="name@company.com"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#00503a] focus:ring-1 focus:ring-[#00503a] bg-slate-50/50"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                          Phone Number *
                        </label>
                        <input 
                          type="tel" 
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder="080XXXXXXXX"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#00503a] focus:ring-1 focus:ring-[#00503a] bg-slate-50/50"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                          Company / Organization
                        </label>
                        <input 
                          type="text" 
                          value={formData.company}
                          onChange={(e) => setFormData({...formData, company: e.target.value})}
                          placeholder="e.g. Energy Operator Ltd"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#00503a] focus:ring-1 focus:ring-[#00503a] bg-slate-50/50"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                          Primary Service Pillar
                        </label>
                        <select 
                          value={formData.servicePillar}
                          onChange={(e) => setFormData({...formData, servicePillar: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#00503a] focus:ring-1 focus:ring-[#00503a] bg-slate-50/50"
                        >
                          <option value="Welding & High-Pressure Fabrication">1. Welding &amp; High-Pressure Fabrication</option>
                          <option value="Mechanical & Industrial Installation">2. Mechanical &amp; Industrial Installation</option>
                          <option value="Civil & Heavy Structural Construction">3. Civil &amp; Heavy Construction</option>
                          <option value="Asset Preventive Maintenance & Turnarounds">4. Asset Maintenance &amp; Turnarounds</option>
                          <option value="Technical Procurement & Supply Chain">5. Technical Supply Chain &amp; Logistics</option>
                          <option value="Technical Manpower Outsourcing & Cleaning">6. Manpower Outsourcing &amp; Cleaning</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                          Project Location
                        </label>
                        <select 
                          value={formData.location}
                          onChange={(e) => setFormData({...formData, location: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#00503a] focus:ring-1 focus:ring-[#00503a] bg-slate-50/50"
                        >
                          <option value="Port Harcourt / Rivers State">Port Harcourt / Rivers State</option>
                          <option value="Offshore Niger Delta Platform">Offshore Niger Delta Platform</option>
                          <option value="Warri / Delta State">Warri / Delta State</option>
                          <option value="Bayelsa Swamp Flowstation">Bayelsa Swamp Flowstation</option>
                          <option value="Lagos / Commercial Hub">Lagos / Industrial Area</option>
                          <option value="Other Location">Other Location</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                        Scope Summary / Specifications *
                      </label>
                      <textarea 
                        rows={4}
                        required
                        value={formData.scope}
                        onChange={(e) => setFormData({...formData, scope: e.target.value})}
                        placeholder="Detail the project scope, required materials, pipe dimensions, timeline milestones, or manpower specifications..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#00503a] focus:ring-1 focus:ring-[#00503a] bg-slate-50/50"
                      ></textarea>
                    </div>

                    <div className="pt-2">
                      <button 
                        type="submit"
                        className="w-full py-4 rounded-xl bg-[#FF6A00] hover:bg-[#e05e00] text-white font-display font-bold text-base flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
                      >
                        <Send size={18} />
                        <span>Submit Project RFQ / Tender</span>
                      </button>
                      <p className="text-center text-[11px] text-slate-600 mt-3">
                        Protected by statutory confidentiality. Direct SLA response within 24 hours.
                      </p>
                    </div>
                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================== TENDER FAQ ACCORDION ==================== */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-[#00503a] text-xs font-semibold uppercase tracking-wider border border-emerald-200 mb-2">
              <HelpCircle size={14} /> Information Desk
            </div>
            <h2 className="font-display text-3xl font-bold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            <details className="p-6 rounded-2xl border border-slate-200 bg-slate-50 group open:bg-white open:shadow-sm transition-all">
              <summary className="font-display font-bold text-base text-slate-900 cursor-pointer flex justify-between items-center list-none">
                <span>What is the typical response turnaround time for submitted RFQs?</span>
                <ChevronDown size={18} className="text-slate-500 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                Standard technical scopes receive an initial response and commercial review within 24 business hours. For complex EPC packages or full turnaround proposals, an estimating engineer will establish a dedicated bid schedule.
              </p>
            </details>

            <details className="p-6 rounded-2xl border border-slate-200 bg-slate-50 group open:bg-white open:shadow-sm transition-all">
              <summary className="font-display font-bold text-base text-slate-900 cursor-pointer flex justify-between items-center list-none">
                <span>Is J&amp;O Technical Services Limited registered on the NOGIC JQS portal?</span>
                <ChevronDown size={18} className="text-slate-500 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                Yes. We are registered with the Nigerian Content Development and Monitoring Board (NCDMB) under NOGICD and possess full regulatory permits for heavy fabrication, pipeline maintenance, and technical manpower services.
              </p>
            </details>

            <details className="p-6 rounded-2xl border border-slate-200 bg-slate-50 group open:bg-white open:shadow-sm transition-all">
              <summary className="font-display font-bold text-base text-slate-900 cursor-pointer flex justify-between items-center list-none">
                <span>How quickly can emergency shutdown or leak repair crews mobilize?</span>
                <ChevronDown size={18} className="text-slate-500 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                From our Port Harcourt operations base, emergency certified welding and mechanical repair teams can be mobilized within 4 to 12 hours for onshore sites, and within standard marine logistics dispatch windows for swamp and offshore platforms.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  AlertTriangle, 
  HeartHandshake, 
  ArrowRight, 
  FileText, 
  Leaf
} from 'lucide-react';
import { getAssetUrl } from '../utils/assets.ts';

export const HSEPage: React.FC = () => {
  return (
    <div className="w-full">
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative bg-[#0B192C] text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src={getAssetUrl('assets/images/hse_safety.png')}
            alt="HSE Safety Operations in Nigerian Energy Sector" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0B192C]/90"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-white/10 mb-10">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
              <Link to="/" className="hover:text-emerald-400 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-emerald-400 font-bold">HSE &amp; Quality Assurance</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-emerald-300 uppercase tracking-wider">
              Zero LTI Mandate • ISO 9001 Aligned
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-[#006A4E]/40 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
                Uncompromising Safety Culture
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                Safety First, <br />
                <span className="text-emerald-400">Quality Assured</span>
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
                At <strong>J&amp;O Technical Services Limited</strong>, the health and safety of our personnel, the protection of the Niger Delta environment, and uncompromising quality standards are the pillars of all operations.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-2 bg-[#FF6A00] hover:bg-[#e05e00] text-white font-display font-semibold text-sm px-6 py-3.5 rounded-lg shadow-md transition-all"
                >
                  <span>Request Safety &amp; QA Dossier</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-800">
                <img 
                  src={getAssetUrl('assets/images/hse_safety.png')}
                  alt="HSE Safety Inspection" 
                  className="w-full h-[380px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C] via-transparent to-transparent"></div>
                <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                  <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block mb-1">
                    Stop Work Authority (SWA)
                  </span>
                  <p className="font-display font-medium text-sm text-slate-200">
                    Every employee and subcontractor has the unconditional authority to halt any activity deemed unsafe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CORE SAFETY PRINCIPLES ==================== */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-[#00503a] text-xs font-semibold uppercase tracking-wider border border-emerald-200 mb-3">
              Zero Harm Framework
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
              Our 4 Pillars of Operational Safety
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Systematic risk management applied across high-pressure fabrication yards, swamp flowlines, and marine barge operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-500 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-[#00503a] flex items-center justify-center mb-6">
                <ShieldCheck size={24} />
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900 mb-2">
                1. Job Safety Analysis (JSA)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Mandatory hazard assessments and mitigation controls conducted prior to initiating any hot work, confined space entry, or crane lifting.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-500 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#FF6A00] flex items-center justify-center mb-6">
                <AlertTriangle size={24} />
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900 mb-2">
                2. Stop Work Authority
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Unconditional empowerment of all personnel to suspend work whenever an unsafe condition or procedural deviation is identified.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-500 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-6">
                <FileText size={24} />
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900 mb-2">
                3. Permit to Work (PTW)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Strict multi-level sign-offs for hot work, radiography, hydrotesting, electrical isolation, and excavation tasks.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-500 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-[#00503a] flex items-center justify-center mb-6">
                <Leaf size={24} />
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900 mb-2">
                4. Environmental Care
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Zero spillage policy, proper industrial effluent containment, waste segregation, and proactive ecological preservation.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ==================== QUALITY ASSURANCE & ISO ==================== */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-[#00503a] text-xs font-semibold uppercase tracking-wider border border-emerald-200">
                <Award size={14} /> Quality Management System
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                ISO 9001:2015 Aligned QA/QC Framework
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Our quality management system governs every phase of project lifecycle—from raw material receipt and Mill Test Certificate (MTC) verification to Welding Procedure Specification (WPS) qualification and final hydro-test certification.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">Inspection &amp; Test Plans (ITP)</h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Detailed hold and witness points established collaboratively with client inspectors and third-party certifying authorities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">WPS &amp; PQR Certification</h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Pre-qualified welding procedure specifications matching ASME IX, API 1104, and AWS D1.1 codes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">Traceability &amp; Material Control</h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      100% heat number transfer, positive material identification (PMI), and comprehensive weld logs for every spool.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white">
                <img 
                  src={getAssetUrl('assets/images/materials_testing.png')}
                  alt="Industrial Materials Quality Testing" 
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================== COMMUNITY RELATIONS ==================== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5">
              <div className="p-8 rounded-2xl bg-[#00503a] text-white shadow-xl space-y-4">
                <HeartHandshake size={36} className="text-emerald-300" />
                <h3 className="font-display font-bold text-2xl">Community Freedom to Operate (FTO)</h3>
                <p className="text-sm text-emerald-100 leading-relaxed">
                  We maintain harmonious stakeholder engagement across host communities in Rivers, Bayelsa, and Delta States through transparent local employment, capacity building, and respect for community leadership.
                </p>
                <div className="pt-2 text-xs font-semibold text-emerald-200 uppercase tracking-wider">
                  Zero Community Disruptions Logged
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-[#00503a] text-xs font-semibold uppercase tracking-wider border border-emerald-200">
                Sustainable Partnership
              </div>
              <h2 className="font-display text-3xl font-bold text-slate-900 tracking-tight">
                Community Engagement &amp; Local Content Development
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                As a genuinely indigenous contractor, our success is intertwined with the prosperity of the Niger Delta communities where we operate. We strictly enforce local recruitment quotas for non-technical labor and provide apprenticeship pathways for aspiring welders and fitters.
              </p>
              <div className="pt-2">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-2 bg-[#00503a] hover:bg-emerald-700 text-white font-display font-semibold text-sm px-6 py-3.5 rounded-lg shadow-sm transition-all"
                >
                  <span>Connect with Our Project Team</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

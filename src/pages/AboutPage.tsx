import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  ArrowRight, 
  Target, 
  Eye, 
  Award, 
  Building, 
  CheckCircle2, 
  MapPin
} from 'lucide-react';
import { getAssetUrl } from '../utils/assets.ts';

export const AboutPage: React.FC = () => {
  return (
    <div className="w-full">
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative bg-[#0B192C] text-white py-20 lg:py-28 overflow-hidden">
        {/* Ambient Gradient Glows */}
        <div className="absolute -right-48 -top-48 w-[600px] h-[600px] bg-[#006A4E]/20 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute -left-32 bottom-0 w-[480px] h-[480px] bg-[#FF6A00]/15 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          {/* Breadcrumb Ribbon */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-white/10 mb-10">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
              <Link to="/" className="hover:text-emerald-400 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-slate-300">About Us</span>
              <span>/</span>
              <span className="text-emerald-400 font-bold">Corporate Profile &amp; Governance</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-emerald-300 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              RC: 9665822 • NOGICD Fully Compliant
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-[#006A4E]/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
                Institutional Legacy • Niger Delta Energy Infrastructure
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                Indigenous Excellence, <br />
                <span className="text-emerald-400">Global Engineering Rigor</span>
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
                Founded and headquartered in Port Harcourt, Rivers State, <strong>J&amp;O Technical Services Limited</strong> delivers 
                high-spec mechanical fabrication, high-pressure piping, structural construction, and asset integrity solutions across Nigeria’s energy corridors.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-2 bg-[#FF6A00] hover:bg-[#e05e00] text-white font-display font-semibold text-sm px-6 py-3.5 rounded-lg shadow-md transition-all"
                >
                  <span>Submit Tender Scope</span>
                  <ArrowRight size={16} />
                </Link>
                <a 
                  href="#governance" 
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white font-display font-semibold text-sm px-6 py-3.5 rounded-lg border border-white/20 transition-all"
                >
                  <span>Corporate Governance</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-800">
                <img 
                  src={getAssetUrl('assets/images/boardroom_governance.png')}
                  alt="J&O Technical Services Engineering Boardroom" 
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C] via-[#0B192C]/30 to-transparent"></div>
                <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                  <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-1">
                    <ShieldCheck size={16} /> Executive Steering Committee
                  </div>
                  <p className="font-display font-medium text-sm text-slate-200">
                    Direct oversight by seasoned indigenous engineers and project managers in Port Harcourt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== STATUTORY IDENTITY & HISTORY ==================== */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-[#00503a] text-xs font-semibold uppercase tracking-wider border border-emerald-200">
                Statutory Standing &amp; Background
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                Built on Rigor, Rooted in National Energy Security
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Incorporated under the Companies and Allied Matters Act of the Federal Republic of Nigeria (<strong>RC: 9665822</strong>), 
                <strong> J&amp;O Technical Services Limited</strong> was established to bridge critical technical execution gaps within the onshore, swamp, and deepwater energy domains.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                Operating under strict adherence to the <strong>Nigerian Oil and Gas Industry Content Development (NOGICD) Act of 2010</strong>, 
                our organization champions genuine sovereign capacity: deploying certified local welders, operating homegrown fabrication yards, and adhering to global EPC-tier inspection certifications.
              </p>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 font-display font-bold text-slate-900 text-base mb-1">
                  <Award size={20} className="text-[#00503a]" />
                  <span>NCDMB &amp; NUPRC Statutory Registration</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Registered and active under the NOGIC JQS portal for heavy spooling, offshore structural fabrication, facility maintenance, and non-destructive asset testing.
                </p>
              </div>
            </div>

            {/* Metrics Dashboard Bento Grid */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-[#0B192C] text-white p-6 rounded-2xl shadow-md flex flex-col justify-between min-h-[180px]">
                <div>
                  <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Safety Milestone</span>
                  <div className="font-display text-4xl font-bold text-white mt-2">450,000+</div>
                </div>
                <div>
                  <p className="font-semibold text-sm text-slate-200">Safe Man-Hours (LTI-Free)</p>
                  <p className="text-xs text-slate-400 mt-0.5">Across swamp flowstations and plant sites.</p>
                </div>
              </div>

              <div className="bg-[#00503a] text-white p-6 rounded-2xl shadow-md flex flex-col justify-between min-h-[180px]">
                <div>
                  <span className="text-xs font-semibold text-emerald-300 uppercase tracking-wider">Local Content</span>
                  <div className="font-display text-4xl font-bold text-white mt-2">100%</div>
                </div>
                <div>
                  <p className="font-semibold text-sm text-white">Indigenous Ownership</p>
                  <p className="text-xs text-emerald-100 mt-0.5">Sovereign workforce mobilization &amp; training.</p>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-2xs flex flex-col justify-between min-h-[180px]">
                <div>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Horizon 2028</span>
                  <div className="font-display text-4xl font-bold text-slate-900 mt-2">Top 5</div>
                </div>
                <div>
                  <p className="font-semibold text-sm text-slate-900">Regional Ranking Goal</p>
                  <p className="text-xs text-slate-500 mt-0.5">Targeting top indigenous contractor status.</p>
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-200 p-6 rounded-2xl shadow-2xs flex flex-col justify-between min-h-[180px]">
                <div>
                  <span className="text-xs font-semibold text-[#FF6A00] uppercase tracking-wider">Quality Benchmark</span>
                  <div className="font-display text-4xl font-bold text-[#FF6A00] mt-2">0.02%</div>
                </div>
                <div>
                  <p className="font-semibold text-sm text-slate-900">Weld Repair Ratio</p>
                  <p className="text-xs text-slate-500 mt-0.5">Exceeding ASME IX &amp; API 1104 standards.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================== VISION & MISSION ==================== */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-[#00503a] flex items-center justify-center mb-6">
                <Eye size={26} />
              </div>
              <h3 className="font-display font-bold text-2xl text-slate-900 mb-4">
                Our Corporate Vision
              </h3>
              <p className="text-slate-600 text-base leading-relaxed">
                To be the leading indigenous technical services company in Nigeria, recognized nationally and internationally for technical excellence, safety leadership, and continuous engineering innovation.
              </p>
            </div>

            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#FF6A00] flex items-center justify-center mb-6">
                <Target size={26} />
              </div>
              <h3 className="font-display font-bold text-2xl text-slate-900 mb-4">
                Our Corporate Mission
              </h3>
              <p className="text-slate-600 text-base leading-relaxed">
                To provide world-class welding, fabrication, construction, maintenance, and logistics solutions that enable our clients to achieve their project goals while upholding the highest standards of quality, safety, and integrity.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ==================== CORE VALUES (S.Q.I.C.E) ==================== */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-[#00503a] text-xs font-semibold uppercase tracking-wider border border-emerald-200 mb-3">
              Guiding Operating Philosophy
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
              Core Values: The S.Q.I.C.E Framework
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Our cultural DNA is anchored on five non-negotiable principles that drive every engineering calculation, welding bead, and commercial contract.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            
            {/* Value S */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-500 hover:shadow-lg transition-all text-center group">
              <div className="w-14 h-14 rounded-2xl bg-[#00503a] text-white flex items-center justify-center mx-auto mb-4 font-display font-bold text-2xl shadow-md">
                S
              </div>
              <h4 className="font-display font-bold text-lg text-slate-900 mb-2">Safety First</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Zero compromise on personnel protection, asset security, and environmental stewardship.
              </p>
            </div>

            {/* Value Q */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-500 hover:shadow-lg transition-all text-center group">
              <div className="w-14 h-14 rounded-2xl bg-[#00503a] text-white flex items-center justify-center mx-auto mb-4 font-display font-bold text-2xl shadow-md">
                Q
              </div>
              <h4 className="font-display font-bold text-lg text-slate-900 mb-2">Quality Delivery</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Adherence to ASME, API, and ISO standards with rigorous third-party inspection validation.
              </p>
            </div>

            {/* Value I */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-500 hover:shadow-lg transition-all text-center group">
              <div className="w-14 h-14 rounded-2xl bg-[#00503a] text-white flex items-center justify-center mx-auto mb-4 font-display font-bold text-2xl shadow-md">
                I
              </div>
              <h4 className="font-display font-bold text-lg text-slate-900 mb-2">Integrity</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Transparent contractual ethics, statutory compliance, and genuine community accountability.
              </p>
            </div>

            {/* Value C */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-500 hover:shadow-lg transition-all text-center group">
              <div className="w-14 h-14 rounded-2xl bg-[#00503a] text-white flex items-center justify-center mx-auto mb-4 font-display font-bold text-2xl shadow-md">
                C
              </div>
              <h4 className="font-display font-bold text-lg text-slate-900 mb-2">Customer Focus</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tailored execution strategies aligned directly with client milestone deadlines and budgets.
              </p>
            </div>

            {/* Value E */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-500 hover:shadow-lg transition-all text-center group">
              <div className="w-14 h-14 rounded-2xl bg-[#FF6A00] text-white flex items-center justify-center mx-auto mb-4 font-display font-bold text-2xl shadow-md">
                E
              </div>
              <h4 className="font-display font-bold text-lg text-slate-900 mb-2">Excellence</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Continuous improvement, cutting-edge tooling, and rapid turnaround execution.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ==================== FABRICATION YARD & INFRASTRUCTURE ==================== */}
      <section id="operational-base" className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-[#00503a] text-xs font-semibold uppercase tracking-wider border border-emerald-200">
                <Building size={14} /> Operational Base
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                Port Harcourt Logistics Hub &amp; Fabrication Yard
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Our strategic head office and operational staging facility at <strong>3 Wopara Street, Off Eneka Road, Port Harcourt</strong> offers rapid access to key swamp flowlines, onshore drilling corridors, and export terminals across Rivers, Bayelsa, and Delta states.
              </p>

              <div className="space-y-3 text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-[#FF6A00] shrink-0 mt-1" />
                  <span>3 Wopara Street, Off Eneka Road, Port Harcourt, Rivers State, Nigeria</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-1" />
                  <span>Dedicated heavy welding bays, pipe spool staging areas &amp; hydrostatic test pit</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-1" />
                  <span>Rapid 24/7 emergency repair mobilization team and dispatch fleet</span>
                </div>
              </div>

              <div className="pt-2">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-2 bg-[#00503a] hover:bg-emerald-700 text-white font-display font-semibold text-sm px-6 py-3 rounded-lg shadow-sm transition-all"
                >
                  <span>Contact Operations Base</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white">
                <img 
                  src={getAssetUrl('assets/images/supply_yard.png')}
                  alt="Port Harcourt Fabrication and Logistics Yard" 
                  className="w-full h-[380px] object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================== CORPORATE OBJECTIVES ==================== */}
      <section id="governance" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-[#00503a] text-xs font-semibold uppercase tracking-wider border border-emerald-200 mb-3">
              Strategic Roadmap
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
              Our 5 Key Corporate Objectives
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50">
              <div className="font-display font-bold text-lg text-slate-900 mb-2 flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-emerald-100 text-[#00503a] flex items-center justify-center text-xs font-bold">01</span>
                Service Excellence
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Consistently exceeding client technical specifications through advanced tooling, qualified engineers, and strict QA protocols.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50">
              <div className="font-display font-bold text-lg text-slate-900 mb-2 flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-emerald-100 text-[#00503a] flex items-center justify-center text-xs font-bold">02</span>
                Horizon 2028 Growth
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Ranking among the top 5 indigenous technical services and fabrication contractors in the South-South region by 2028.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50">
              <div className="font-display font-bold text-lg text-slate-900 mb-2 flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-emerald-100 text-[#00503a] flex items-center justify-center text-xs font-bold">03</span>
                Capacity Building
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Continuous investment in local technical skills training, apprentice welders, NDT certifications, and community development.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50">
              <div className="font-display font-bold text-lg text-slate-900 mb-2 flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-emerald-100 text-[#00503a] flex items-center justify-center text-xs font-bold">04</span>
                Client Partnership
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Building enduring, collaborative relationships with international oil companies (IOCs), indigenous operators, and industrial firms.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50 md:col-span-2 lg:col-span-2">
              <div className="font-display font-bold text-lg text-slate-900 mb-2 flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-emerald-100 text-[#00503a] flex items-center justify-center text-xs font-bold">05</span>
                Zero-Harm HSE Compliance
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Total statutory adherence to DPR/NUPRC guidelines, NCDMB regulations, and global environmental protection standards with zero lost time incidents.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

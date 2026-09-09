import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  ArrowRight, 
  Wrench, 
  Building2, 
  Settings2, 
  Truck, 
  Users, 
  CheckCircle2, 
  Flame, 
  Zap, 
  Factory, 
  Landmark, 
  Award,
  Clock,
  Sparkles
} from 'lucide-react';

export const HomePage: React.FC = () => {
  return (
    <div className="w-full">
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative min-h-[640px] lg:min-h-[720px] flex items-center bg-[#0B192C] text-white overflow-hidden">
        {/* High-Quality Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/images/hero_offshore.png" 
            alt="Offshore Niger Delta Platform Operations" 
            className="w-full h-full object-cover object-center"
          />
          {/* Gradient Tint Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B192C] via-[#0B192C]/90 to-[#0B192C]/50"></div>
          <div className="absolute inset-0 bg-[#0B192C]/30"></div>
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32 w-full">
          <div className="max-w-3xl">
            {/* Subtle Pre-Title Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-medium tracking-wider text-emerald-300 uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Indigenous Nigerian Oilfield &amp; Engineering Contractor
            </div>

            {/* Main Title */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] mb-6">
              Delivering Technical Excellence, <span className="text-emerald-400">Safely</span> and <span className="text-[#FF6A00]">On Time</span>.
            </h1>

            {/* Concise Supporting Subhead */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed mb-10 max-w-2xl">
              Premier Nigerian technical engineering, high-spec pipeline fabrication, structural construction, 
              and asset integrity contractor supporting major energy operators across the Niger Delta.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-14">
              <Link 
                to="/services" 
                className="inline-flex items-center justify-center gap-2 bg-[#00503a] hover:bg-emerald-700 text-white font-display font-semibold text-sm sm:text-base px-7 py-3.5 rounded-lg transition-all shadow-md hover:shadow-lg"
              >
                <span>Explore Capabilities</span>
                <Wrench size={18} />
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/20 font-display font-semibold text-sm sm:text-base px-7 py-3.5 rounded-lg backdrop-blur-sm transition-all"
              >
                <span>Request a Quote</span>
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Regulatory Accreditations Strip */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400 font-medium tracking-wider uppercase">
              <span className="flex items-center gap-1.5 text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>NCDMB Compliant
              </span>
              <span className="hidden sm:inline text-white/20">•</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>DPR / NUPRC Certified
              </span>
              <span className="hidden sm:inline text-white/20">•</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>ISO 9001 Aligned
              </span>
              <span className="hidden sm:inline text-white/20">•</span>
              <span className="text-slate-300">Port Harcourt, Nigeria</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== BY THE NUMBERS ==================== */}
      <section className="border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            {/* Metric 1 */}
            <div className="pt-6 sm:pt-0 sm:pr-6">
              <div className="font-display text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-2">
                450,000+
              </div>
              <div className="text-sm font-semibold text-[#00503a] uppercase tracking-wide mb-1">
                Zero Lost Time Injuries
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Continuous safe man-hours logged across swamp flowlines and offshore installations.
              </p>
            </div>

            {/* Metric 2 */}
            <div className="pt-6 sm:pt-0 sm:px-6">
              <div className="font-display text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-2">
                100%
              </div>
              <div className="text-sm font-semibold text-[#00503a] uppercase tracking-wide mb-1">
                Indigenous Workforce
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Full compliance with the Nigerian Oil &amp; Gas Industry Content Development (NOGICD) Act.
              </p>
            </div>

            {/* Metric 3 */}
            <div className="pt-6 sm:pt-0 sm:px-6">
              <div className="font-display text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-2">
                99.8%
              </div>
              <div className="text-sm font-semibold text-[#00503a] uppercase tracking-wide mb-1">
                On-Time Milestone Rate
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Precision project management and rapid field mobilization from our Port Harcourt operational base.
              </p>
            </div>

            {/* Metric 4 */}
            <div className="pt-6 sm:pt-0 sm:pl-6">
              <div className="font-display text-4xl lg:text-5xl font-bold text-[#FF6A00] tracking-tight mb-2">
                0.02%
              </div>
              <div className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-1">
                Weld Repair Ratio
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Exceeding ASME Section IX and API 1104 radiographic inspection benchmarks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CORPORATE OVERVIEW SPLIT ==================== */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-[#00503a] text-xs font-semibold uppercase tracking-wider border border-emerald-200">
                <Sparkles size={14} /> Corporate Standing
              </div>
              
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                Indigenous Engineering Leadership Rooted in the Niger Delta
              </h2>

              <p className="text-slate-600 text-base leading-relaxed">
                Incorporated under the laws of the Federal Republic of Nigeria (<strong>RC: 9665822</strong>), 
                <strong> J&amp;O Technical Services Limited</strong> operates as a tier-one indigenous contractor 
                delivering turnkey mechanical fabrication, high-pressure pipeline engineering, heavy construction, 
                and supply chain solutions.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="font-display font-bold text-slate-900 text-base mb-1">Our Vision</div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    To be the leading indigenous technical services company in Nigeria, recognized for excellence, safety, and innovation.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="font-display font-bold text-slate-900 text-base mb-1">Our Mission</div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    To provide world-class welding, construction, maintenance, and logistics solutions while upholding highest quality and integrity.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link 
                  to="/about" 
                  className="inline-flex items-center gap-2 font-display font-semibold text-sm text-[#00503a] hover:text-emerald-700"
                >
                  <span>Read full corporate profile &amp; governance</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white">
                <img 
                  src="/assets/images/boardroom_governance.png" 
                  alt="J&O Technical Services Engineering Leadership Boardroom" 
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C]/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                  <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-1">
                    <ShieldCheck size={16} /> Port Harcourt Operations Base
                  </div>
                  <p className="font-display font-medium text-sm text-slate-200">
                    Direct executive leadership and operational steering located at 3 Wopara Street, Off Eneka Road.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================== 5 KEY SERVICE PILLARS ==================== */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-[#00503a] text-xs font-semibold uppercase tracking-wider border border-emerald-200 mb-3">
              Comprehensive Portfolio
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
              Core Technical Capabilities
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              We deploy multidisciplinary engineering teams, certified high-pressure welders, heavy equipment, 
              and streamlined procurement systems across 5 specialized service pillars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Pillar 1 */}
            <div className="rounded-2xl border border-slate-200 p-8 bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-[#00503a] flex items-center justify-center mb-6 group-hover:bg-[#00503a] group-hover:text-white transition-colors">
                  <Wrench size={24} />
                </div>
                <h3 className="font-display font-bold text-xl text-slate-900 mb-3">
                  Engineering &amp; Technical
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Certified welding and fabrication (ASME Sec IX, API 1104), high-pressure spooling, mechanical installation, and on-site engineering integrity support.
                </p>
                <ul className="space-y-2 text-xs text-slate-600 mb-6 font-medium">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0" /> High-Pressure Piping &amp; Manifold Spools
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0" /> Heavy Industrial Plant Mechanical Setup
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0" /> Non-Destructive Testing (NDT) &amp; QA/QC
                  </li>
                </ul>
              </div>
              <Link to="/services" className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00503a] uppercase tracking-wider pt-2">
                <span>Pillar Details</span> <ArrowRight size={14} />
              </Link>
            </div>

            {/* Pillar 2 */}
            <div className="rounded-2xl border border-slate-200 p-8 bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-[#00503a] flex items-center justify-center mb-6 group-hover:bg-[#00503a] group-hover:text-white transition-colors">
                  <Building2 size={24} />
                </div>
                <h3 className="font-display font-bold text-xl text-slate-900 mb-3">
                  Construction Works
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Turnkey civil and structural engineering, industrial foundations, heavy steel erections, facilities construction, and end-to-end project management.
                </p>
                <ul className="space-y-2 text-xs text-slate-600 mb-6 font-medium">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0" /> Structural Steel Skids &amp; Pipe Racks
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0" /> Industrial Facility &amp; Base Building
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0" /> General Contracting &amp; Site Supervision
                  </li>
                </ul>
              </div>
              <Link to="/services" className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00503a] uppercase tracking-wider pt-2">
                <span>Pillar Details</span> <ArrowRight size={14} />
              </Link>
            </div>

            {/* Pillar 3 */}
            <div className="rounded-2xl border border-slate-200 p-8 bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-[#00503a] flex items-center justify-center mb-6 group-hover:bg-[#00503a] group-hover:text-white transition-colors">
                  <Settings2 size={24} />
                </div>
                <h3 className="font-display font-bold text-xl text-slate-900 mb-3">
                  Asset Maintenance
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Comprehensive preventive and corrective maintenance programs, turnaround shutdowns, rotating equipment overhaul, and plant facility management.
                </p>
                <ul className="space-y-2 text-xs text-slate-600 mb-6 font-medium">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0" /> Plant Turnaround &amp; Emergency Repairs
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0" /> Valve Servicing &amp; Hydrostatic Testing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0" /> Rotating Equipment Alignment &amp; Overhaul
                  </li>
                </ul>
              </div>
              <Link to="/services" className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00503a] uppercase tracking-wider pt-2">
                <span>Pillar Details</span> <ArrowRight size={14} />
              </Link>
            </div>

            {/* Pillar 4 */}
            <div className="rounded-2xl border border-slate-200 p-8 bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-[#00503a] flex items-center justify-center mb-6 group-hover:bg-[#00503a] group-hover:text-white transition-colors">
                  <Truck size={24} />
                </div>
                <h3 className="font-display font-bold text-xl text-slate-900 mb-3">
                  Supply Chain &amp; Logistics
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Strategic procurement of technical tools, pipes, valves, OEM consumables, yard staging, marine cargo dispatch, and material handling across Rivers State.
                </p>
                <ul className="space-y-2 text-xs text-slate-600 mb-6 font-medium">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0" /> Certified Piping, Flanges &amp; Fittings Supply
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0" /> Port Logistics Yard &amp; Warehousing Staging
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0" /> Field Dispatch &amp; Heavy Haulage Transport
                  </li>
                </ul>
              </div>
              <Link to="/services" className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00503a] uppercase tracking-wider pt-2">
                <span>Pillar Details</span> <ArrowRight size={14} />
              </Link>
            </div>

            {/* Pillar 5 */}
            <div className="rounded-2xl border border-slate-200 p-8 bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300 group flex flex-col justify-between md:col-span-2 lg:col-span-2">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-[#00503a] flex items-center justify-center mb-6 group-hover:bg-[#00503a] group-hover:text-white transition-colors">
                  <Users size={24} />
                </div>
                <h3 className="font-display font-bold text-xl text-slate-900 mb-3">
                  Support &amp; Outsourcing Services
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Mobilization of certified technical manpower (coded welders, riggers, NDT level II technicians, QA inspectors), alongside heavy industrial and commercial cleaning services.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0" /> Coded 6G / 6GR Welders &amp; Fitters
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0" /> Industrial Tank &amp; Vessel Decontamination
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0" /> Certified Safety Officers (NEBOSH/ISPON)
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0" /> Commercial Facility Environmental Management
                  </div>
                </div>
              </div>
              <Link to="/services" className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00503a] uppercase tracking-wider pt-2">
                <span>Pillar Details</span> <ArrowRight size={14} />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ==================== SECTORS SERVED ==================== */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3">
              Operational Footprint
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Strategic Sectors We Support
            </h2>
            <p className="text-slate-400 text-base leading-relaxed">
              Delivering high-reliability engineering across mission-critical energy, production, and public infrastructure corridors in Nigeria.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-6 text-center hover:border-emerald-500 transition-all group">
              <div className="w-12 h-12 rounded-lg bg-emerald-950/80 text-emerald-400 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#00503a] group-hover:text-white transition-colors">
                <Flame size={24} />
              </div>
              <h4 className="font-display font-bold text-base mb-2">Oil &amp; Gas</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Upstream flowstations, swamp pipelines, offshore platforms &amp; export terminals.
              </p>
            </div>

            <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-6 text-center hover:border-emerald-500 transition-all group">
              <div className="w-12 h-12 rounded-lg bg-emerald-950/80 text-emerald-400 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#00503a] group-hover:text-white transition-colors">
                <Zap size={24} />
              </div>
              <h4 className="font-display font-bold text-base mb-2">Power &amp; Energy</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Gas turbine plants, substations, cooling circuits, and high-voltage transmission skids.
              </p>
            </div>

            <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-6 text-center hover:border-emerald-500 transition-all group">
              <div className="w-12 h-12 rounded-lg bg-emerald-950/80 text-emerald-400 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#00503a] group-hover:text-white transition-colors">
                <Factory size={24} />
              </div>
              <h4 className="font-display font-bold text-base mb-2">Industrial Plants</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Chemical manufacturing, refineries, heavy equipment maintenance &amp; process lines.
              </p>
            </div>

            <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-6 text-center hover:border-emerald-500 transition-all group">
              <div className="w-12 h-12 rounded-lg bg-emerald-950/80 text-emerald-400 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#00503a] group-hover:text-white transition-colors">
                <Building2 size={24} />
              </div>
              <h4 className="font-display font-bold text-base mb-2">Commercial Facilities</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Corporate headquarters, logistics parks, marine bases &amp; technical warehouses.
              </p>
            </div>

            <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-6 text-center hover:border-emerald-500 transition-all group">
              <div className="w-12 h-12 rounded-lg bg-emerald-950/80 text-emerald-400 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#00503a] group-hover:text-white transition-colors">
                <Landmark size={24} />
              </div>
              <h4 className="font-display font-bold text-base mb-2">Infrastructure</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Civil drainage systems, roads, heavy jetty structures, bridges &amp; coastal piling.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ==================== HSE & QUALITY SPOTLIGHT ==================== */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                <img 
                  src="/assets/images/hse_safety.png" 
                  alt="J&O Technical Services Health Safety and Environment HSE Operations" 
                  className="w-full h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C]/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                  <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block mb-1">
                    Zero Harm Standard
                  </span>
                  <p className="text-sm font-medium text-slate-200">
                    Strict adherence to Stop Work Authority (SWA) and continuous Job Safety Analysis (JSA) at every work site.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-[#00503a] text-xs font-semibold uppercase tracking-wider border border-emerald-200">
                <ShieldCheck size={14} /> Uncompromising Standards
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                Health, Safety, Environment &amp; Quality Assurance
              </h2>

              <p className="text-slate-600 text-base leading-relaxed">
                At J&amp;O Technical Services Limited, safety is not merely a policy—it is our core operating culture. 
                Our zero-incident philosophy guides all welding, lifting, offshore mobilization, and chemical operations.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">Zero LTI Mandate</h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Targeting zero lost time injuries with proactive hazard hunts and daily toolbox talks.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Award size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">ISO 9001:2015 Aligned</h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Full inspection test plans (ITP), WPS/PQR validation, and third-party radiographic testing.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link 
                  to="/hse" 
                  className="inline-flex items-center gap-2 bg-[#00503a] hover:bg-emerald-700 text-white font-display font-semibold text-sm px-6 py-3 rounded-lg shadow-sm transition-all"
                >
                  <span>Explore HSE Framework &amp; Policies</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================== RFQ / TENDER CALLOUT BANNER ==================== */}
      <section className="py-20 bg-gradient-to-r from-[#00503a] to-[#006A4E] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-emerald-200 text-xs font-semibold uppercase tracking-wider">
              <Clock size={14} /> Rapid Field Mobilization
            </span>
            
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight">
              Ready to Execute Your Next Engineering or Maintenance Project?
            </h2>

            <p className="text-emerald-100 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Submit your RFQ, tender scope, or technical manpower requirements. Our Port Harcourt project desk will review and provide a detailed quotation within 24 hours.
            </p>

            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 bg-[#FF6A00] hover:bg-[#e05e00] text-white font-display font-bold text-base px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <span>Submit Tender / RFQ Document</span>
                <ArrowRight size={18} />
              </Link>
              <a 
                href="tel:08062887287" 
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-display font-semibold text-base px-8 py-4 rounded-xl backdrop-blur-sm border border-white/20 transition-all"
              >
                <span>Call Hotline: 08062887287</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

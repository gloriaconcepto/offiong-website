import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Wrench, 
  Building2, 
  Settings2, 
  Truck, 
  Users, 
  ArrowRight
} from 'lucide-react';
import { getAssetUrl } from '../utils/assets.ts';

export const ServicesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'engineering' | 'construction' | 'maintenance' | 'supply' | 'support'>('all');

  return (
    <div className="w-full">
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative bg-[#0B192C] text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <img 
            src={getAssetUrl('assets/images/pipe_welders.png')}
            alt="High-pressure Pipe Welders and Industrial Fabricators" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0B192C]/90"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-white/10 mb-10">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
              <Link to="/" className="hover:text-emerald-400 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-emerald-400 font-bold">Services &amp; Capabilities</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-emerald-300 uppercase tracking-wider">
              ASME IX • API 1104 • ISO 9001 Aligned
            </div>
          </div>

          <div className="max-w-3xl space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-[#006A4E]/40 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
              High-Precision Industrial Engineering
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Turnkey Technical Solutions &amp; <br />
              <span className="text-[#FF6A00]">Field Capabilities</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
              From high-pressure flowline spooling and heavy structural skid fabrication to strategic technical procurement and plant maintenance, J&amp;O Technical Services Limited delivers end-to-end execution across Nigeria.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 bg-[#FF6A00] hover:bg-[#e05e00] text-white font-display font-semibold text-sm px-6 py-3.5 rounded-lg shadow-md transition-all"
              >
                <span>Request Technical Quote</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SERVICE FILTER TABS ==================== */}
      <section className="bg-white border-b border-slate-200 sticky top-20 z-30 shadow-2xs">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 overflow-x-auto">
          <div className="flex items-center gap-2 min-w-max">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-lg text-xs font-display font-semibold transition-all ${
                activeTab === 'all' 
                  ? 'bg-[#00503a] text-white shadow-xs' 
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              All Capabilities
            </button>
            <button
              onClick={() => setActiveTab('engineering')}
              className={`px-4 py-2 rounded-lg text-xs font-display font-semibold transition-all ${
                activeTab === 'engineering' 
                  ? 'bg-[#00503a] text-white shadow-xs' 
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              1. Engineering &amp; Welding
            </button>
            <button
              onClick={() => setActiveTab('construction')}
              className={`px-4 py-2 rounded-lg text-xs font-display font-semibold transition-all ${
                activeTab === 'construction' 
                  ? 'bg-[#00503a] text-white shadow-xs' 
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              2. Heavy Construction
            </button>
            <button
              onClick={() => setActiveTab('maintenance')}
              className={`px-4 py-2 rounded-lg text-xs font-display font-semibold transition-all ${
                activeTab === 'maintenance' 
                  ? 'bg-[#00503a] text-white shadow-xs' 
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              3. Asset Maintenance
            </button>
            <button
              onClick={() => setActiveTab('supply')}
              className={`px-4 py-2 rounded-lg text-xs font-display font-semibold transition-all ${
                activeTab === 'supply' 
                  ? 'bg-[#00503a] text-white shadow-xs' 
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              4. Supply Chain &amp; Logistics
            </button>
            <button
              onClick={() => setActiveTab('support')}
              className={`px-4 py-2 rounded-lg text-xs font-display font-semibold transition-all ${
                activeTab === 'support' 
                  ? 'bg-[#00503a] text-white shadow-xs' 
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              5. Support &amp; Manpower
            </button>
          </div>
        </div>
      </section>

      {/* ==================== DETAILED SERVICES BREAKDOWN ==================== */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">

          {/* PILLAR 1: ENGINEERING & WELDING */}
          {(activeTab === 'all' || activeTab === 'engineering') && (
            <div className="bg-white rounded-3xl border border-slate-200 p-8 lg:p-12 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-[#00503a] text-xs font-semibold uppercase tracking-wider">
                    <Wrench size={14} /> Pillar 01
                  </div>
                  <h2 className="font-display text-3xl font-bold text-slate-900 tracking-tight">
                    Engineering &amp; Technical Services
                  </h2>
                  <p className="text-slate-600 text-base leading-relaxed">
                    Our welding and fabrication division operates to the most stringent international standards including 
                    <strong> ASME Section IX</strong> and <strong>API 1104</strong>. We specialize in high-pressure piping spools, 
                    pig receivers, manifolds, and complex industrial mechanical installations.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <h4 className="font-display font-bold text-sm text-slate-900 mb-1">Welding &amp; Fabrication</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        SMAW, GTAW, and GMAW high-spec welding on carbon steel, duplex, stainless steel, and specialty alloys.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <h4 className="font-display font-bold text-sm text-slate-900 mb-1">Mechanical Installation</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Heavy industrial equipment setting, precision shaft alignment, compressor &amp; pump hook-ups.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <h4 className="font-display font-bold text-sm text-slate-900 mb-1">Non-Destructive Testing (NDT)</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        100% Radiographic Testing (RT), Ultrasonic (UT), Magnetic Particle (MPI), and Dye Penetrant (DPT).
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <h4 className="font-display font-bold text-sm text-slate-900 mb-1">Hydrostatic Pressure Testing</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        High-pressure testing benches and calibrated data loggers verifying joint integrity up to 15,000 PSI.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                    <img 
                      src={getAssetUrl('assets/images/pipe_welders.png')}
                      alt="Mechanical Pipe Welding in Nigeria" 
                      className="w-full h-[360px] object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* PILLAR 2: HEAVY CONSTRUCTION */}
          {(activeTab === 'all' || activeTab === 'construction') && (
            <div className="bg-white rounded-3xl border border-slate-200 p-8 lg:p-12 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-5 order-2 lg:order-1">
                  <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                    <img 
                      src={getAssetUrl('assets/images/terminal_aerial.png')}
                      alt="Heavy Industrial Construction and Terminal Works" 
                      className="w-full h-[360px] object-cover"
                    />
                  </div>
                </div>

                <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-[#00503a] text-xs font-semibold uppercase tracking-wider">
                    <Building2 size={14} /> Pillar 02
                  </div>
                  <h2 className="font-display text-3xl font-bold text-slate-900 tracking-tight">
                    Civil &amp; Structural Construction
                  </h2>
                  <p className="text-slate-600 text-base leading-relaxed">
                    We engineer and construct heavy-duty industrial foundations, structural steel frameworks, 
                    pipe bridges, skids, and complete facility enclosures built to withstand the humid marine atmosphere of the Niger Delta.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <h4 className="font-display font-bold text-sm text-slate-900 mb-1">Structural Steel Skids &amp; Racks</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Design, prefabrication, blast-coating, and crane erection of structural modules and catwalks.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <h4 className="font-display font-bold text-sm text-slate-900 mb-1">Industrial Civil Works</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Reinforced concrete equipment plinths, drainage bund walls, retaining barriers, and piling.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <h4 className="font-display font-bold text-sm text-slate-900 mb-1">General Contracting Management</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Comprehensive turnkey project delivery with transparent QA/QC and milestone scheduling.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <h4 className="font-display font-bold text-sm text-slate-900 mb-1">Site Earthworks &amp; Roadways</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Access road paving, swamp location preparation, and heavy equipment access paths.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* PILLAR 3: ASSET MAINTENANCE */}
          {(activeTab === 'all' || activeTab === 'maintenance') && (
            <div className="bg-white rounded-3xl border border-slate-200 p-8 lg:p-12 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-[#00503a] text-xs font-semibold uppercase tracking-wider">
                    <Settings2 size={14} /> Pillar 03
                  </div>
                  <h2 className="font-display text-3xl font-bold text-slate-900 tracking-tight">
                    Preventive &amp; Corrective Maintenance
                  </h2>
                  <p className="text-slate-600 text-base leading-relaxed">
                    Unplanned plant shutdowns cost millions. Our proactive maintenance teams specialize in plant turnarounds, 
                    rotating equipment overhaul, emergency leak repairs, and full facility asset integrity management.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <h4 className="font-display font-bold text-sm text-slate-900 mb-1">Turnaround &amp; Shutdowns</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Rapid mobilization of multi-skilled maintenance taskforces executing tight turnaround schedules.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <h4 className="font-display font-bold text-sm text-slate-900 mb-1">Rotating Equipment Overhaul</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Servicing of centrifugal pumps, gas compressors, electric motor skids, and gearboxes.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <h4 className="font-display font-bold text-sm text-slate-900 mb-1">Valve Servicing &amp; Testing</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Ball, gate, globe, and check valve refurbishment, seat lapping, and hydro-testing.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <h4 className="font-display font-bold text-sm text-slate-900 mb-1">Facility Management</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        End-to-end technical utility management, HVAC maintenance, and electrical power support.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                    <img 
                      src={getAssetUrl('assets/images/facility_installation.png')}
                      alt="Industrial Mechanical Maintenance and Installation" 
                      className="w-full h-[360px] object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* PILLAR 4: SUPPLY CHAIN & LOGISTICS */}
          {(activeTab === 'all' || activeTab === 'supply') && (
            <div className="bg-white rounded-3xl border border-slate-200 p-8 lg:p-12 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-5 order-2 lg:order-1">
                  <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                    <img 
                      src={getAssetUrl('assets/images/procurement_logistics.png')}
                      alt="Technical Procurement and Logistics Management" 
                      className="w-full h-[360px] object-cover"
                    />
                  </div>
                </div>

                <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-[#00503a] text-xs font-semibold uppercase tracking-wider">
                    <Truck size={14} /> Pillar 04
                  </div>
                  <h2 className="font-display text-3xl font-bold text-slate-900 tracking-tight">
                    Technical Procurement &amp; Logistics
                  </h2>
                  <p className="text-slate-600 text-base leading-relaxed">
                    Sourcing genuine OEM oilfield components, high-grade line pipes, API valves, gaskets, 
                    and structural steel with complete Mill Test Certificates (MTCs) and seamless Port Harcourt yard staging.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <h4 className="font-display font-bold text-sm text-slate-900 mb-1">OEM Piping &amp; Valves</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Seamless &amp; welded line pipes, ANSI class flanges, forged fittings, and actuated control valves.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <h4 className="font-display font-bold text-sm text-slate-900 mb-1">Port Yard Logistics</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Warehousing, material receipt inspection, container staging, and secure inventory preservation.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <h4 className="font-display font-bold text-sm text-slate-900 mb-1">Field Dispatch &amp; Transport</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Heavy haulage lowbeds, hiab crane trucks, and shallow-draft marine vessel cargo loading.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <h4 className="font-display font-bold text-sm text-slate-900 mb-1">Consumables &amp; Tooling</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Welding electrodes, grinding discs, PPE, rigging slings, and precision torque tools.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* PILLAR 5: SUPPORT & MANPOWER */}
          {(activeTab === 'all' || activeTab === 'support') && (
            <div className="bg-white rounded-3xl border border-slate-200 p-8 lg:p-12 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-[#00503a] text-xs font-semibold uppercase tracking-wider">
                    <Users size={14} /> Pillar 05
                  </div>
                  <h2 className="font-display text-3xl font-bold text-slate-900 tracking-tight">
                    Support Services &amp; Manpower Outsourcing
                  </h2>
                  <p className="text-slate-600 text-base leading-relaxed">
                    Rapid mobilization of vetted, certified, and drug-tested technical personnel across offshore and onshore assets, paired with industrial tank cleaning, decontamination, and environmental cleaning services.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <h4 className="font-display font-bold text-sm text-slate-900 mb-1">Coded Welders &amp; Fitters</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        ASME 6G/6GR certified pipe welders, structural fitters, and fabricators ready for immediate deployment.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <h4 className="font-display font-bold text-sm text-slate-900 mb-1">NDT &amp; QA/QC Inspectors</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        ASNT Level II technicians, CSWIP / AWS certified welding inspectors, and coating specialists.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <h4 className="font-display font-bold text-sm text-slate-900 mb-1">Industrial Tank Cleaning</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Crude oil storage tank desludging, vessel high-pressure hydro-blasting, and confined space entry.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <h4 className="font-display font-bold text-sm text-slate-900 mb-1">Facility Janitorial &amp; Hygiene</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Comprehensive commercial cleaning, pest control, and environmental sanitation for camp &amp; offices.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                    <img 
                      src={getAssetUrl('assets/images/materials_testing.png')}
                      alt="Industrial Materials Testing and Technical Manpower" 
                      className="w-full h-[360px] object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* ==================== CTA BANNER ==================== */}
      <section className="py-20 bg-[#0B192C] text-white text-center">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-6">
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
            Need a Specialized Technical Crew or Heavy Equipment Mobilization?
          </h2>
          <p className="text-slate-300 text-base max-w-2xl mx-auto">
            Our Port Harcourt operations desk is available 24/7 to coordinate emergency field support, procurement tenders, and long-term service agreements.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 bg-[#FF6A00] hover:bg-[#e05e00] text-white font-display font-bold text-base px-8 py-3.5 rounded-xl shadow-lg transition-all"
            >
              <span>Submit RFQ / Tender</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

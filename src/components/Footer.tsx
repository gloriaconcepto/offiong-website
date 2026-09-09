import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  ArrowRight, 
  Clock, 
  Award,
  ChevronRight
} from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B192C] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-slate-800/80">
          
          {/* Corporate Profile Column */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <img 
                src="/assets/images/company_logo.png" 
                alt="J&O Technical Services Limited" 
                className="h-10 w-auto object-contain rounded"
              />
              <div>
                <h3 className="font-display font-bold text-white text-lg tracking-tight">
                  J&amp;O TECHNICAL SERVICES
                </h3>
                <span className="text-xs font-semibold text-emerald-400 tracking-wider uppercase">
                  Limited • RC: 9665822
                </span>
              </div>
            </div>
            
            <p className="text-sm text-slate-400 leading-relaxed">
              Premier Nigerian engineering, high-pressure pipeline fabrication, structural construction, 
              and asset integrity contractor serving operators across the Niger Delta energy corridor.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/90 text-emerald-400 border border-emerald-500/20">
                <ShieldCheck size={13} /> NCDMB Compliant
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/90 text-slate-300 border border-slate-700">
                <Award size={13} /> NUPRC / DPR Certified
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link to="/" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight size={14} className="text-slate-600" /> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight size={14} className="text-slate-600" /> About Corporate
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight size={14} className="text-slate-600" /> Technical Services
                </Link>
              </li>
              <li>
                <Link to="/hse" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight size={14} className="text-slate-600" /> HSE &amp; Quality
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight size={14} className="text-slate-600" /> Tender / RFQ Desk
                </Link>
              </li>
            </ul>
          </div>

          {/* Technical Capabilities */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider">
              Key Capabilities
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="flex items-center gap-1.5">
                <ChevronRight size={14} className="text-emerald-500" /> Welding &amp; High-Pressure Spooling
              </li>
              <li className="flex items-center gap-1.5">
                <ChevronRight size={14} className="text-emerald-500" /> Mechanical &amp; Plant Installation
              </li>
              <li className="flex items-center gap-1.5">
                <ChevronRight size={14} className="text-emerald-500" /> Heavy Civil &amp; Structural Works
              </li>
              <li className="flex items-center gap-1.5">
                <ChevronRight size={14} className="text-emerald-500" /> Supply Chain &amp; Yard Logistics
              </li>
              <li className="flex items-center gap-1.5">
                <ChevronRight size={14} className="text-emerald-500" /> Preventive &amp; Asset Integrity
              </li>
            </ul>
          </div>

          {/* Head Office & Direct Contact */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider">
              Head Office
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#FF6A00] shrink-0 mt-0.5" />
                <span>3 Wopara Street, Off Eneka Road, Port Harcourt, Rivers State, Nigeria</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#FF6A00] shrink-0" />
                <a href="tel:08062887287" className="hover:text-white transition-colors">
                  08062887287
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#FF6A00] shrink-0" />
                <a href="mailto:jotechnicalsourceslimited@gmail.com" className="hover:text-white transition-colors break-all">
                  jotechnicalsourceslimited@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-400 pt-1">
                <Clock size={16} className="text-emerald-400 shrink-0" />
                <span>Mon – Sat: 08:00 – 18:00 (24/7 Field Dispatch)</span>
              </div>
            </div>

            <div className="pt-2">
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#FF6A00] hover:text-[#ff8533] uppercase tracking-wider"
              >
                <span>Request Project Mobilization</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Legal / Copyright Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} <strong className="text-white">J&amp;O Technical Services Limited</strong>. All rights reserved. RC: 9665822.
          </div>
          <div className="flex items-center gap-6">
            <span>Motto: &ldquo;Delivering Technical Excellence, Safely and On Time&rdquo;</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

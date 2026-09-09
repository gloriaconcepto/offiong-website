import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ArrowRight, ShieldCheck, Phone, Mail } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Corporate Status Bar */}
      <div className="bg-[#0B192C] text-slate-300 text-xs border-b border-slate-800/80 py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 font-medium text-emerald-400">
              <ShieldCheck size={14} /> RC: 9665822 • NCDMB Fully Compliant
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-400">Port Harcourt, Rivers State, Nigeria</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="tel:08062887287" className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors">
              <Phone size={13} /> 08062887287
            </a>
            <span className="text-slate-500">•</span>
            <a href="mailto:jotechnicalsourceslimited@gmail.com" className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors">
              <Mail size={13} /> jotechnicalsourceslimited@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all shadow-xs">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Identity */}
          <Link to="/" className="flex items-center gap-3.5 group">
            <img 
              src="/assets/images/company_logo.png" 
              alt="J&O Technical Services Limited Logo" 
              className="h-11 w-auto object-contain rounded"
              onError={(e) => {
                // Fallback badge if image fails
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <div className="flex flex-col">
              <span className="font-display font-bold text-slate-900 tracking-tight text-base sm:text-lg leading-tight group-hover:text-[#00503a] transition-colors">
                J&amp;O TECHNICAL SERVICES
              </span>
              <span className="text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
                Limited • RC: 9665822
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-slate-600">
            <NavLink 
              to="/" 
              end
              className={({ isActive }) => 
                `transition-colors hover:text-[#00503a] ${isActive ? 'text-[#00503a] font-semibold' : ''}`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `transition-colors hover:text-[#00503a] ${isActive ? 'text-[#00503a] font-semibold' : ''}`
              }
            >
              About Us
            </NavLink>
            <NavLink 
              to="/services" 
              className={({ isActive }) => 
                `transition-colors hover:text-[#00503a] ${isActive ? 'text-[#00503a] font-semibold' : ''}`
              }
            >
              Services &amp; Capabilities
            </NavLink>
            <NavLink 
              to="/hse" 
              className={({ isActive }) => 
                `transition-colors hover:text-[#00503a] ${isActive ? 'text-[#00503a] font-semibold' : ''}`
              }
            >
              HSE &amp; Quality
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `transition-colors hover:text-[#00503a] ${isActive ? 'text-[#00503a] font-semibold' : ''}`
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* Action CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 bg-[#FF6A00] hover:bg-[#e05e00] text-white font-display font-semibold text-sm px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition-all"
            >
              <span>Submit RFQ / Tender</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-4 shadow-lg">
            <nav className="flex flex-col gap-4 font-medium text-slate-700">
              <NavLink 
                to="/" 
                end 
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => `py-2 transition-colors ${isActive ? 'text-[#00503a] font-bold' : ''}`}
              >
                Home
              </NavLink>
              <NavLink 
                to="/about" 
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => `py-2 transition-colors ${isActive ? 'text-[#00503a] font-bold' : ''}`}
              >
                About Us
              </NavLink>
              <NavLink 
                to="/services" 
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => `py-2 transition-colors ${isActive ? 'text-[#00503a] font-bold' : ''}`}
              >
                Services &amp; Capabilities
              </NavLink>
              <NavLink 
                to="/hse" 
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => `py-2 transition-colors ${isActive ? 'text-[#00503a] font-bold' : ''}`}
              >
                HSE &amp; Quality
              </NavLink>
              <NavLink 
                to="/contact" 
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => `py-2 transition-colors ${isActive ? 'text-[#00503a] font-bold' : ''}`}
              >
                Contact
              </NavLink>
              <Link 
                to="/contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 bg-[#FF6A00] text-white font-display font-semibold text-sm px-5 py-3 rounded-lg mt-2"
              >
                <span>Submit RFQ / Tender</span>
                <ArrowRight size={16} />
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

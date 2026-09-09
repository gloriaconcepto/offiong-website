import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, Home, ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-28 text-center">
      <div className="w-20 h-20 rounded-full bg-red-50 text-red-500 flex items-center justify-center mx-auto mb-6 border border-red-200">
        <AlertCircle size={40} />
      </div>
      <h1 className="font-display text-5xl font-bold text-slate-900 tracking-tight mb-2">404</h1>
      <h2 className="font-display text-2xl font-bold text-slate-800 mb-3">
        Page Not Found
      </h2>
      <p className="text-slate-600 text-sm max-w-md mx-auto mb-8">
        The requested technical resource or route does not exist. Please return to the corporate homepage or contact our Port Harcourt desk.
      </p>
      <div className="flex justify-center items-center gap-4">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 bg-[#00503a] hover:bg-emerald-700 text-white font-display font-semibold text-sm px-6 py-3 rounded-lg shadow-sm transition-all"
        >
          <Home size={16} />
          <span>Return Home</span>
        </Link>
        <button 
          onClick={() => window.history.back()} 
          className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-display font-semibold text-sm px-6 py-3 rounded-lg border border-slate-200 transition-all"
        >
          <ArrowLeft size={16} />
          <span>Go Back</span>
        </button>
      </div>
    </div>
  );
};

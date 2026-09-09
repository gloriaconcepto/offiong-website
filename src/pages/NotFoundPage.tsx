import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, Home, ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="container" style={{ textAlign: 'center', padding: '5rem 1rem' }}>
      <div 
        style={{ 
          width: '72px', 
          height: '72px', 
          borderRadius: '50%', 
          background: 'rgba(239, 68, 68, 0.1)', 
          color: '#ef4444', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          margin: '0 auto 1.5rem',
          border: '1px solid rgba(239, 68, 68, 0.25)' 
        }}
      >
        <AlertCircle size={36} />
      </div>
      <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '0.75rem' }}>404</h1>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>
        Page Not Found
      </h2>
      <p style={{ color: 'var(--text-secondary)', maxWidth: '480px', margin: '0 auto 2rem' }}>
        The route you are looking for does not exist or has been moved. Check the URL or return back home.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <Link to="/" className="btn btn-primary">
          <Home size={16} />
          <span>Back to Home</span>
        </Link>
        <button onClick={() => window.history.back()} className="btn btn-secondary">
          <ArrowLeft size={16} />
          <span>Go Back</span>
        </button>
      </div>
    </div>
  );
};

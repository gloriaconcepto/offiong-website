import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  ShieldCheck, 
  Route as RouteIcon, 
  Sparkles, 
  ArrowRight, 
  Plus, 
  Minus, 
  RotateCcw,
  CheckCircle2
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-badge">
          <Sparkles size={14} />
          <span>React 19 + TypeScript + Vite + Router Ready</span>
        </div>
        <h1 className="hero-title">
          Build Faster with <span className="gradient-text">Modern Web Stack</span>
        </h1>
        <p className="hero-description">
          A lightning-fast starter template configured with React 19, TypeScript,
          Vite bundler, React Router v7, and custom modular styling tokens.
        </p>

        <div className="hero-cta">
          <Link to="/features" className="btn btn-primary">
            <span>Explore Features</span>
            <ArrowRight size={16} />
          </Link>
          <Link to="/about" className="btn btn-secondary">
            <span>View Architecture</span>
          </Link>
        </div>

        <div className="badge-list" style={{ justifyContent: 'center' }}>
          <span className="badge">
            <CheckCircle2 size={14} color="#10b981" /> React 19
          </span>
          <span className="badge">
            <CheckCircle2 size={14} color="#10b981" /> TypeScript 5.8
          </span>
          <span className="badge">
            <CheckCircle2 size={14} color="#10b981" /> Vite 6
          </span>
          <span className="badge">
            <CheckCircle2 size={14} color="#10b981" /> React Router 7
          </span>
          <span className="badge">
            <CheckCircle2 size={14} color="#10b981" /> Lucide Icons
          </span>
        </div>
      </section>

      {/* Interactive State & React Demo */}
      <section className="interactive-section">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.35rem' }}>
              Interactive Component State
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem' }}>
              Test React dynamic reactivity, hooks, and clean state handling in action.
            </p>
          </div>

          <div className="counter-wrapper">
            <button 
              className="btn btn-secondary" 
              onClick={() => setCount((prev) => prev - 1)}
              aria-label="Decrement counter"
            >
              <Minus size={16} />
            </button>
            <div className="counter-value">{count}</div>
            <button 
              className="btn btn-primary" 
              onClick={() => setCount((prev) => prev + 1)}
              aria-label="Increment counter"
            >
              <Plus size={16} />
            </button>
            <button 
              className="btn btn-secondary" 
              onClick={() => setCount(0)}
              title="Reset counter"
              aria-label="Reset counter"
              style={{ marginLeft: '0.5rem', padding: '0.65rem' }}
            >
              <RotateCcw size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Feature Highlights Grid */}
      <section className="features-grid">
        <div className="feature-card">
          <div className="feature-icon-wrapper">
            <Zap size={24} />
          </div>
          <h3 className="feature-title">Instant Server Start</h3>
          <p className="feature-desc">
            Experience lightning-fast Hot Module Replacement (HMR) powered by Vite's native ES module tooling.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon-wrapper">
            <ShieldCheck size={24} />
          </div>
          <h3 className="feature-title">End-to-End TypeScript</h3>
          <p className="feature-desc">
            Complete type safety with strict compiler configuration, autocomplete, and robust developer ergonomics.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon-wrapper">
            <RouteIcon size={24} />
          </div>
          <h3 className="feature-title">Declarative Routing</h3>
          <p className="feature-desc">
            Organized layouts, nested routes, route active states, and custom 404 handling using React Router.
          </p>
        </div>
      </section>
    </div>
  );
};

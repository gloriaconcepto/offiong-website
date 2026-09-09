import React, { useState } from 'react';
import { 
  Layers, 
  Palette, 
  Boxes, 
  Cpu, 
  Code, 
  Terminal,
  Check
} from 'lucide-react';

export const FeaturesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'routing' | 'typescript' | 'styling'>('routing');

  return (
    <div className="container">
      <header className="page-header">
        <h1 className="page-title">
          Stack <span className="gradient-text">Capabilities</span>
        </h1>
        <p className="page-subtitle">
          Everything configured out of the box so you can focus on building your product.
        </p>
      </header>

      {/* Tabs / Switcher */}
      <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
        <button
          className={`btn ${activeTab === 'routing' ? 'btn-primary' : 'btn-secondary'}`}
          onClick={() => setActiveTab('routing')}
        >
          <Boxes size={16} />
          <span>React Router Setup</span>
        </button>
        <button
          className={`btn ${activeTab === 'typescript' ? 'btn-primary' : 'btn-secondary'}`}
          onClick={() => setActiveTab('typescript')}
        >
          <Cpu size={16} />
          <span>TypeScript &amp; Vite</span>
        </button>
        <button
          className={`btn ${activeTab === 'styling' ? 'btn-primary' : 'btn-secondary'}`}
          onClick={() => setActiveTab('styling')}
        >
          <Palette size={16} />
          <span>Modern Styling System</span>
        </button>
      </div>

      {/* Dynamic Content Panel */}
      <div className="interactive-section" style={{ marginTop: 0 }}>
        {activeTab === 'routing' && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div className="feature-icon-wrapper" style={{ margin: 0, width: '40px', height: '40px' }}>
                <Boxes size={20} />
              </div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Declarative Client-Side Routing</h2>
            </div>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
              Configured using modern React Router nested route hierarchy, layouts with <code>&lt;Outlet /&gt;</code>,
              and programmatic link states:
            </p>
            <pre className="code-block">
{`// src/router/index.tsx
import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../components/Layout.tsx';
import { HomePage } from '../pages/HomePage.tsx';
import { FeaturesPage } from '../pages/FeaturesPage.tsx';
import { AboutPage } from '../pages/AboutPage.tsx';
import { NotFoundPage } from '../pages/NotFoundPage.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'features', element: <FeaturesPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);`}
            </pre>
          </div>
        )}

        {activeTab === 'typescript' && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div className="feature-icon-wrapper" style={{ margin: 0, width: '40px', height: '40px' }}>
                <Cpu size={20} />
              </div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Strict TypeScript &amp; Bundler Config</h2>
            </div>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
              Fully typed components, props validation, fast JSX compilation, and isolated build configuration:
            </p>
            <pre className="code-block">
{`// Standard TypeScript React Component Pattern
import React from 'react';

interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export const FeatureCard: React.FC<CardProps> = ({ title, description, icon }) => {
  return (
    <div className="feature-card">
      {icon && <div className="feature-icon-wrapper">{icon}</div>}
      <h3 className="feature-title">{title}</h3>
      <p className="feature-desc">{description}</p>
    </div>
  );
};`}
            </pre>
          </div>
        )}

        {activeTab === 'styling' && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div className="feature-icon-wrapper" style={{ margin: 0, width: '40px', height: '40px' }}>
                <Palette size={20} />
              </div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Custom CSS Design Tokens</h2>
            </div>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
              Zero bulky CSS runtime dependencies. Crafted with modern CSS variables, glassmorphism, responsive grid,
              and sleek dark-mode aesthetics.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
              <div style={{ padding: '1rem', background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-card)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: 'var(--accent-primary)', fontWeight: 600 }}>
                  <Check size={16} /> Theme Tokens
                </div>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Standardized spacing, radiuses, colors, and shadows</span>
              </div>
              <div style={{ padding: '1rem', background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-card)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: 'var(--accent-secondary)', fontWeight: 600 }}>
                  <Check size={16} /> Glassmorphism
                </div>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Backdrop blurs and translucent borders</span>
              </div>
              <div style={{ padding: '1rem', background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-card)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: 'var(--accent-success)', fontWeight: 600 }}>
                  <Check size={16} /> Responsive
                </div>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Clean mobile-first viewport layout support</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon-wrapper">
            <Layers size={22} />
          </div>
          <h3 className="feature-title">Modular Component Design</h3>
          <p className="feature-desc">
            Components, layout containers, and pages are organized cleanly for effortless scalability.
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-icon-wrapper">
            <Code size={22} />
          </div>
          <h3 className="feature-title">Clean Codebase</h3>
          <p className="feature-desc">
            Oxlint integration, strict TypeScript rules, and predictable project hierarchy.
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-icon-wrapper">
            <Terminal size={22} />
          </div>
          <h3 className="feature-title">Developer Scripts</h3>
          <p className="feature-desc">
            Fast commands for dev server, type checking, production builds, and bundle previewing.
          </p>
        </div>
      </div>
    </div>
  );
};

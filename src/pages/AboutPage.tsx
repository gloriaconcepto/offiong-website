import React from 'react';
import { 
  FolderTree, 
  Terminal, 
  Layers, 
  Sparkles, 
  CheckCircle2 
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="container">
      <header className="page-header">
        <h1 className="page-title">
          About <span className="gradient-text">This Project</span>
        </h1>
        <p className="page-subtitle">
          Architecture overview, directory structure, and instructions to get started.
        </p>
      </header>

      {/* Directory Structure */}
      <section className="interactive-section" style={{ marginTop: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
          <div className="feature-icon-wrapper" style={{ margin: 0, width: '40px', height: '40px' }}>
            <FolderTree size={20} />
          </div>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Project Structure</h2>
        </div>

        <pre className="code-block">
{`offiong-website/
├── public/                 # Static assets
│   └── favicon.svg         # Application icon
├── src/
│   ├── assets/             # Images and media assets
│   ├── components/         # Reusable UI components
│   │   ├── Navbar.tsx      # Global navigation with active routes
│   │   ├── Footer.tsx      # Global footer
│   │   └── Layout.tsx      # Main layout wrapper with <Outlet />
│   ├── pages/              # Route page views
│   │   ├── HomePage.tsx    # Landing / Hero page
│   │   ├── FeaturesPage.tsx# Feature showcase and code demos
│   │   ├── AboutPage.tsx   # Project details and guide
│   │   └── NotFoundPage.tsx# 404 fallback page
│   ├── router/             # React Router setup
│   │   └── index.tsx       # Browser router definition
│   ├── App.tsx             # Root application component
│   ├── index.css           # Global design system & theme variables
│   └── main.tsx            # Application entry point
├── index.html              # HTML shell & font imports
├── package.json            # Scripts & dependencies
├── tsconfig.json           # Root TypeScript configuration
├── tsconfig.app.json       # Frontend TypeScript rules
└── vite.config.ts          # Vite build & plugin configuration`}
        </pre>
      </section>

      {/* Quick Start Commands */}
      <section className="interactive-section">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
          <div className="feature-icon-wrapper" style={{ margin: 0, width: '40px', height: '40px' }}>
            <Terminal size={20} />
          </div>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Available Scripts</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
          <div style={{ background: 'var(--bg-tertiary)', padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-card)' }}>
            <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-secondary)', fontWeight: 600 }}>npm run dev</span>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.35rem' }}>
              Starts the local Vite dev server with instant HMR.
            </p>
          </div>
          <div style={{ background: 'var(--bg-tertiary)', padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-card)' }}>
            <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)', fontWeight: 600 }}>npm run build</span>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.35rem' }}>
              Type-checks with TypeScript and compiles production bundle to <code>dist/</code>.
            </p>
          </div>
          <div style={{ background: 'var(--bg-tertiary)', padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-card)' }}>
            <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-success)', fontWeight: 600 }}>npm run preview</span>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.35rem' }}>
              Locally serves the production build to preview output.
            </p>
          </div>
          <div style={{ background: 'var(--bg-tertiary)', padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-card)' }}>
            <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-warning)', fontWeight: 600 }}>npm run lint</span>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.35rem' }}>
              Runs fast code linting via Oxlint.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack Summary */}
      <section className="features-grid">
        <div className="feature-card">
          <div className="feature-icon-wrapper">
            <Sparkles size={22} />
          </div>
          <h3 className="feature-title">Modern React 19</h3>
          <p className="feature-desc">
            Equipped with modern React concurrent features, hooks, and clean component compositions.
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-icon-wrapper">
            <Layers size={22} />
          </div>
          <h3 className="feature-title">React Router v7</h3>
          <p className="feature-desc">
            Declarative client routing, nested layouts, and easy integration with data routers.
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-icon-wrapper">
            <CheckCircle2 size={22} />
          </div>
          <h3 className="feature-title">Ready for Production</h3>
          <p className="feature-desc">
            Optimized assets, tree-shaking, fast chunk splitting, and SEO-friendly document structure.
          </p>
        </div>
      </section>
    </div>
  );
};

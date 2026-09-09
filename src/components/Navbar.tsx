import React from 'react';
import { NavLink } from 'react-router-dom';
import { Layers, Sparkles, BookOpen, Compass, Code2 } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <NavLink to="/" className="brand-logo">
          <div className="logo-icon-wrapper">
            <Layers size={20} />
          </div>
          <span>ViteStack</span>
        </NavLink>

        <nav>
          <ul className="nav-links">
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                end
              >
                <Sparkles size={16} />
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/features" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                <Compass size={16} />
                <span>Features</span>
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                <BookOpen size={16} />
                <span>About</span>
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="nav-actions">
          <a
            href="https://vitejs.dev"
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
            style={{ padding: '0.45rem 0.9rem', fontSize: '0.85rem' }}
          >
            <Code2 size={16} />
            <span>Docs</span>
          </a>
        </div>
      </div>
    </header>
  );
};

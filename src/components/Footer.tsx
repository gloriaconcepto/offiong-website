import React from 'react';
import { Heart, Code2 } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Code2 size={18} color="var(--accent-primary)" />
          <span>Built with React, TypeScript, Vite &amp; React Router</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <span>Crafted with</span>
          <Heart size={14} color="#ec4899" fill="#ec4899" />
          <span>&copy; {new Date().getFullYear()} All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

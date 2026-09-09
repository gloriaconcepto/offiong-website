import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar.tsx';
import { Footer } from './Footer.tsx';

export const Layout: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="page-container">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

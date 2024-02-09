// Code: Layout component to include Navbar and Footer

import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { AuthContextProvider } from '@/context/AuthContext';

const Layout = ({ children, includeNavbar = true, includeFooter = true }) => {
  return (
    <div>
      {includeNavbar && <Navbar />}
      {children}
      {includeFooter && <Footer />}
    </div>
  );
};

export default Layout;

// Page.js
'use client'

import React from 'react';
import { useRouter,usePathname } from 'next/navigation';
import Navbar from './components/HomePage/Navbar';
import Section from './components/HomePage/Section';
import OurStory from './components/HomePage/NavContent/OurStory';
import Collections from './components/HomePage/NavContent/Collections';
import Schemes from './components/HomePage/NavContent/Schemes';
import StoreLocator from './components/HomePage/NavContent/StoreLocator';
import Contact from './components/HomePage/NavContent/Contact';

export default function Page() {
  const pathname = usePathname()
  const renderPage = () => {
    switch (pathname) {
      case '/':
        return <Section />;
      case '/our-story':
        return <OurStory />;
      case '/collections':
        return <Collections />;
      case '/schemes':
        return <Schemes />;
      case '/store-locator':
        return <StoreLocator />;
      case '/contact':
        return <Contact />;
      default:
        return <Section />;
    }
  };

  return (
    <>
      <Navbar />
      {renderPage()}
    </>
  );
}

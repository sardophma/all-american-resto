import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ServicesPage from '@/pages/ServicesPage';
import GalleryPage from '@/pages/GalleryPage';
import ContactPage from '@/pages/ContactPage';

// Service Pages
import TileStoneServicePage from '@/pages/services/TileStoneServicePage';
import DrywallServicePage from '@/pages/services/DrywallServicePage';
import PaintingServicePage from '@/pages/services/PaintingServicePage';
import CabinetsServicePage from '@/pages/services/CabinetsServicePage';
import BathroomsServicePage from '@/pages/services/BathroomsServicePage';

// Import ScrollToTop if you have it, otherwise standard routing works
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="contact" element={<ContactPage />} />
          
          {/* Service Routes */}
          <Route path="services/tile-stone" element={<TileStoneServicePage />} />
          <Route path="services/drywall" element={<DrywallServicePage />} />
          <Route path="services/painting" element={<PaintingServicePage />} />
          <Route path="services/cabinets" element={<CabinetsServicePage />} />
          <Route path="services/bathrooms" element={<BathroomsServicePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

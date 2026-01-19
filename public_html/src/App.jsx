import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ServicesPage from '@/pages/ServicesPage';
import TileStoneServicePage from '@/pages/services/TileStoneServicePage';
import DrywallServicePage from '@/pages/services/DrywallServicePage';
import PaintingServicePage from '@/pages/services/PaintingServicePage';
import CabinetsServicePage from '@/pages/services/CabinetsServicePage';
import BathroomsServicePage from '@/pages/services/BathroomsServicePage';
import FullRemodelingServicePage from '@/pages/services/FullRemodelingServicePage';
import GalleryPage from '@/pages/GalleryPage';
import ContactPage from '@/pages/ContactPage';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/tile-stone" element={<TileStoneServicePage />} />
          <Route path="/services/drywall" element={<DrywallServicePage />} />
          <Route path="/services/painting" element={<PaintingServicePage />} />
          <Route path="/services/cabinets" element={<CabinetsServicePage />} />
          <Route path="/services/bathrooms" element={<BathroomsServicePage />} />
          <Route path="/services/full-remodeling" element={<FullRemodelingServicePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
      <Toaster />
    </Router>
  );
}

export default App;
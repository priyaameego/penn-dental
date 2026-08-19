import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

// We will create these next
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import Contact from './pages/Contact.jsx';
import FAQ from './pages/FAQ.jsx';
import Gallery from './pages/Gallery.jsx';
import Testimonials from './pages/Testimonials.jsx';
import DentalImplants from './pages/DentalImplants.jsx';
import SleepApnea from './pages/SleepApnea.jsx';
import OralSurgery from './pages/OralSurgery.jsx';
import CosmeticDentistry from './pages/CosmeticDentistry.jsx';
import RestorativeDentistry from './pages/RestorativeDentistry.jsx';
import Orthodontics from './pages/Orthodontics.jsx';
import XGuide from './pages/XGuide.jsx';
import About from './pages/About.jsx';

import './style.css';

function App() {

  return (
    <>
      <Header />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services.html" element={<Services />} />
          <Route path="/contact.html" element={<Contact />} />
          <Route path="/faq.html" element={<FAQ />} />
          <Route path="/gallery.html" element={<Gallery />} />
          <Route path="/testimonials.html" element={<Testimonials />} />
          <Route path="/services/dental-implants" element={<DentalImplants />} />
          <Route path="/services/sleep-apnea" element={<SleepApnea />} />
          <Route path="/services/oral-surgery" element={<OralSurgery />} />
          <Route path="/services/cosmetic-dentistry" element={<CosmeticDentistry />} />
          <Route path="/services/restorative-dentistry" element={<RestorativeDentistry />} />
          <Route path="/services/orthodontics" element={<Orthodontics />} />
          <Route path="/x-guide" element={<XGuide />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;

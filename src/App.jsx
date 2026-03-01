import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout';
import { ScrollToTop } from './components/common';
import { Home } from './features/home';
import { ServiceDetail, Services as ServicesPage } from './features/services';
import { GetStarted } from './features/get-started';
import { Footer } from './components/layout';
import ErrorBoundary from './components/common/ErrorBoundary';
import PricingPage from './pages/Pricing';
import ArtistServices from './pages/ArtistServices';
import FAQPage from './pages/FAQPage';

export default function App() {
  return (
    <ErrorBoundary>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-dark-bg text-text-primary">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/artist-services" element={<ArtistServices />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/start" element={<GetStarted />} />
              <Route path="/service/:id" element={<ServiceDetail />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

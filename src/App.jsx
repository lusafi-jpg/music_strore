import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import GetStarted from './pages/GetStarted';
import ServicesPage from './pages/Services';
import Footer from './components/Footer';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-dark-bg text-text-primary">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/start" element={<GetStarted />} />
            <Route path="/service/:id" element={<ServiceDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

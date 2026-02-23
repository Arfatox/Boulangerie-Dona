import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Index from './index';
import Pain from './pains';
import Viennoiseries from './viennoiseries';
import Patisseries from './patisseries';
import Boissons from './boissons';
import Sandwichs from './sandwichs';
import MentionsLegales from './mentionsLegales';
import APropos from './aPropos';
import NotFound from './notFound';
import ScrollToTop from './components/ScrollToTop';
import ShowImgs from './components/ShowImgs';

import bg0 from '@/assets/img/background(0).webp';
import bg1 from '@/assets/img/background(1).webp';

function App() {
  const [availableHeight, setAvailableHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);
  const footerRef = useRef(null);

  useEffect(() => {
    const updateFooterHeight = () => {
      setFooterHeight(footerRef.current?.offsetHeight || 0);
    };

    updateFooterHeight();
    window.addEventListener('resize', updateFooterHeight);
    return () => window.removeEventListener('resize', updateFooterHeight);
  }, []);

  const headerHeight = 185.5;
  const availableContentHeight = `calc(100vh - ${headerHeight + footerHeight}px)`;

  useEffect(() => {
    document.documentElement.style.overflowX = "hidden";
    document.body.style.overflowX = "hidden";
    setAvailableHeight(availableContentHeight);
  }, [footerHeight]);

  return (
    <Router>
      <div className="app-container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/pains" element={<Pain />} />
            <Route path="/viennoiseries" element={<Viennoiseries />} />
            <Route path="/patisseries" element={<Patisseries />} />
            <Route path="/sandwichs" element={<Sandwichs />} />
            <Route path="/boissons" element={<Boissons />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/aPropos" element={<APropos />} />
            <Route path="*" element={<NotFound availableHeight={availableHeight} />} />
          </Routes>


          <ShowImgs src={bg0} id="bg0" alt="Image de fond" footerRef={footerRef} />
          <ShowImgs src={bg0} id="bg1" alt="Image de fond" footerRef={footerRef} />
          <ShowImgs src={bg1} id="bg2" alt="Image de fond" footerRef={footerRef} />
          {/*
          <ShowImgs src={bg1} id="bg3" alt="Image de fond" footerRef={footerRef} />
          <ShowImgs src={bg0} id="bg4" alt="Image de fond" footerRef={footerRef} />
          <ShowImgs src={bg1} id="bg5" alt="Image de fond" footerRef={footerRef} />
          */}
        </main>

        <ScrollToTop />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

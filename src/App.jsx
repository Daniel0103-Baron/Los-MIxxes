import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TacticalBoard from './components/TacticalBoard';
import RosterStats from './components/RosterStats';
import NewsSection from './components/NewsSection';
import PressReleases from './components/PressReleases';
import KitsSection from './components/KitsSection';
import Footer from './components/Footer';
import ParticlesBg from './components/ui/ParticlesBg';
import LiveTickerToast from './components/ui/LiveTickerToast';
import { Skiper31 } from './components/ui/text-scroll-animation';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  const scrollTo = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0e14] text-slate-100 font-['Outfit',sans-serif] relative overflow-hidden">
      {/* 21st.dev Dynamic Cyber Particles Background */}
      <ParticlesBg />

      {/* Top Navbar */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Sections */}
      <main className="relative">
        <Hero scrollTo={scrollTo} />
        
        {/* Interactive Text Scroll Animation Section */}
        <section className="relative z-10 my-10 border-y border-cyan-500/20">
          <Skiper31 />
        </section>

        <TacticalBoard />
        <RosterStats />
        <NewsSection />
        <PressReleases />
        <KitsSection />
      </main>

      {/* 21st.dev Live Vestuario Notification Toast */}
      <LiveTickerToast scrollTo={scrollTo} />

      {/* Footer */}
      <Footer scrollTo={scrollTo} />
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Newspaper, FileText, Users, Shirt, LayoutGrid, Menu, X, Activity } from 'lucide-react';

export default function Navbar({ activeSection, setActiveSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Inicio', icon: Shield },
    { id: 'tactical', label: 'Formación 4-4-2', icon: LayoutGrid },
    { id: 'roster', label: 'Plantilla & Stats', icon: Users },
    { id: 'news', label: 'Noticias', icon: Newspaper },
    { id: 'press', label: 'Comunicados', icon: FileText },
    { id: 'kits', label: 'Uniformes', icon: Shirt }
  ];

  const scrollTo = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#0b0e14]/90 backdrop-blur-md border-b border-cyan-500/20 py-3 shadow-xl shadow-black/50' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Club Name */}
          <div 
            onClick={() => scrollTo('hero')} 
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative w-11 h-11 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-amber-500 p-0.5 shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#0b0e14] rounded-[10px] flex items-center justify-center overflow-hidden">
                <img 
                  src="/logo/Logo Mixxes.png" 
                  alt="Los Mixxes Logo" 
                  className="w-9 h-9 object-contain drop-shadow-md"
                />
              </div>
            </div>
            <div>
              <span className="text-xl font-black tracking-wider bg-gradient-to-r from-white via-slate-100 to-cyan-400 bg-clip-text text-transparent font-['Rajdhani']">
                LOS MIXXES
              </span>
              <div className="flex items-center gap-1.5 text-[10px] text-cyan-400 font-semibold tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Pro Clubs Official
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-[#121826]/80 p-1.5 rounded-full border border-white/10 backdrop-blur-md shadow-inner">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                    isActive ? 'text-cyan-300 font-bold' : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabNav"
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-cyan-500/10 border border-cyan-500/40 rounded-full shadow-sm"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <Icon className={`w-3.5 h-3.5 relative z-10 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                  <span className="relative z-10">{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Live Status Badge */}
          <div className="hidden lg:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/10 to-red-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold">
            <Activity className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: '6s' }} />
            <span>Formación 4-4-2 Lista</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-[#121826] border border-white/10 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0b0e14]/95 border-b border-cyan-500/30 backdrop-blur-xl px-4 py-6"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                      isActive ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'text-slate-300 hover:bg-white/5'
                    }`}
                  >
                    <Icon className="w-5 h-5 text-cyan-400" />
                    <span>{link.label}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

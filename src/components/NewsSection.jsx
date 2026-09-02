import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NOTICIAS_DATA } from '../data/clubData';
import { Newspaper, Search, Eye, Calendar, Sparkles, Image as ImageIcon, ChevronRight } from 'lucide-react';

export default function NewsSection() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeNewsModal, setActiveNewsModal] = useState(null);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  const categories = ['ALL', 'El Diario Deportivo', 'Exclusiva', 'Redes & Discord', 'Fotogalería'];

  const filteredNews = NOTICIAS_DATA.filter(news => {
    const matchesCategory = selectedCategory === 'ALL' || news.category === selectedCategory;
    const matchesSearch = news.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          news.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="news" className="py-20 bg-[#090c12] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Newspaper className="w-3.5 h-3.5" />
              <span>Prensa y Novedades</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-['Rajdhani'] uppercase">
              Diario Deportivo & <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-amber-400 bg-clip-text text-transparent">Noticias</span>
            </h2>
          </div>

          {/* Search bar */}
          <div className="mt-6 md:mt-0 relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar noticia..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#121826] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/20'
                  : 'bg-[#121826] border border-white/10 text-slate-300 hover:border-cyan-500/40'
              }`}
            >
              {cat === 'ALL' ? 'Todas las Noticias' : cat}
            </button>
          ))}
        </div>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((news) => (
            <motion.article
              key={news.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              onClick={() => {
                setActiveNewsModal(news);
                setActiveGalleryIndex(0);
              }}
              className="glass-card rounded-3xl overflow-hidden border border-white/10 cursor-pointer group hover:border-cyan-500/40 flex flex-col justify-between"
            >
              <div>
                {/* News Banner Image */}
                <div className="relative h-52 overflow-hidden bg-slate-900">
                  <img 
                    src={news.image} 
                    alt={news.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121826] via-transparent to-transparent opacity-80" />
                  
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
                    {news.category}
                  </span>

                  <span className="absolute bottom-3 left-3 flex items-center gap-1 text-[11px] text-slate-300 font-medium">
                    <Calendar className="w-3 h-3 text-cyan-400" />
                    {news.date}
                  </span>
                </div>

                {/* News Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white font-['Rajdhani'] leading-snug group-hover:text-cyan-300 transition-colors mb-3">
                    {news.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                    {news.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between text-xs font-bold text-cyan-400 group-hover:translate-x-1 transition-transform">
                <span>Leer Noticia Completa</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </motion.article>
          ))}
        </div>

        {/* News Modal */}
        <AnimatePresence>
          {activeNewsModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto"
              onClick={() => setActiveNewsModal(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-[#121826] border border-cyan-500/40 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative my-8"
              >
                <button
                  onClick={() => setActiveNewsModal(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300"
                >
                  ✕
                </button>

                {/* Modal Main Image Display */}
                <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mb-6 bg-slate-900 border border-white/10">
                  <img
                    src={activeNewsModal.gallery ? activeNewsModal.gallery[activeGalleryIndex] : activeNewsModal.image}
                    alt={activeNewsModal.title}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-xs font-bold uppercase backdrop-blur-md">
                    {activeNewsModal.category}
                  </span>
                </div>

                {/* Gallery Thumbnails if available */}
                {activeNewsModal.gallery && activeNewsModal.gallery.length > 1 && (
                  <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                    {activeNewsModal.gallery.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveGalleryIndex(idx)}
                        className={`w-16 h-12 rounded-lg overflow-hidden border-2 flex-shrink-0 transition-all ${
                          activeGalleryIndex === idx ? 'border-cyan-400 scale-105 shadow-md shadow-cyan-500/30' : 'border-transparent opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img src={img} alt="Thumb" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}

                <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{activeNewsModal.date}</span>
                </div>

                <h3 className="text-2xl font-extrabold text-white font-['Rajdhani'] mb-4 leading-tight">
                  {activeNewsModal.title}
                </h3>

                <div className="text-sm text-slate-300 leading-relaxed whitespace-pre-line bg-black/40 p-4 rounded-xl border border-white/5 mb-6">
                  {activeNewsModal.fullBody}
                </div>

                <button
                  onClick={() => setActiveNewsModal(null)}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-bold text-white text-xs uppercase tracking-wider"
                >
                  Cerrar Noticia
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

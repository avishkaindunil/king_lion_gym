'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight, FiMaximize2 } from 'react-icons/fi';
import AnimatedSection from '../../components/AnimatedSection';

const images = [
  { src: '/images/gym1.jpg', title: 'Premium Equipment Floor', category: 'Equipment' },
  { src: '/images/gym2.jpg', title: 'Training Zone', category: 'Training' },
  { src: '/images/gym3.jpg', title: 'Free Weights Area', category: 'Equipment' },
  { src: '/images/gym4.jpg', title: 'Main Gym Floor', category: 'Facility' },
  { src: '/images/gym5.jpg', title: 'Bench Press Zone', category: 'Equipment' },
  { src: '/images/gym6.jpg', title: 'Cable Station', category: 'Equipment' },
  { src: '/images/gym7.jpg', title: 'Dumbbell Rack', category: 'Equipment' },
  { src: '/images/gym8.jpg', title: 'Strength Training', category: 'Training' },
  { src: '/images/gym9.jpg', title: 'Cardio Section', category: 'Cardio' },
  { src: '/images/gym10.jpg', title: 'Sprint Track & Cardio', category: 'Cardio' },
  { src: '/images/gym11.jpg', title: 'Functional Training', category: 'Training' },
  { src: '/images/gym12.jpg', title: 'Facility Overview', category: 'Facility' },
];

const categories = ['All', 'Equipment', 'Training', 'Cardio', 'Facility'];

export default function GalleryPage() {
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered = filter === 'All' ? images : images.filter(img => img.category === filter);

  const openLightbox = (index) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);
  const prevImage = () => setLightbox((lightbox - 1 + filtered.length) % filtered.length);
  const nextImage = () => setLightbox((lightbox + 1) % filtered.length);

  return (
    <div className="bg-[#0A0A0A] pt-20">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/gym1.jpg" alt="Gallery" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="font-body text-[#CC0000] text-xs tracking-[0.4em] uppercase mb-3">Visual Tour</p>
            <h1 className="font-display font-bold text-6xl md:text-7xl text-white tracking-tight leading-none">
              OUR <span className="gradient-text">GALLERY</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="py-16 relative">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Filter tabs */}
          <AnimatedSection className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map(cat => (
              <motion.button
                key={cat}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 font-display tracking-widest uppercase text-xs transition-all duration-300 ${
                  filter === cat
                    ? 'bg-[#CC0000] text-white'
                    : 'border border-white/10 text-[#666] hover:text-white hover:border-white/30'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </AnimatedSection>

          {/* Image Grid */}
          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            <AnimatePresence>
              {filtered.map((img, i) => (
                <motion.div
                  key={img.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className={`relative overflow-hidden cursor-pointer group ${
                    i === 0 || i === 5 ? 'col-span-2 row-span-2' : ''
                  }`}
                  style={{ aspectRatio: (i === 0 || i === 5) ? '1' : '3/4' }}
                  onClick={() => openLightbox(i)}
                >
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
                    <p className="font-display font-semibold text-white text-sm tracking-wide">{img.title}</p>
                    <span className="font-body text-[#CC0000] text-xs tracking-wider uppercase">{img.category}</span>
                  </div>
                  <div className="absolute top-3 right-3 w-8 h-8 bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <FiMaximize2 className="text-white" size={14} />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-5xl w-full max-h-[90vh] aspect-[4/3]"
              onClick={e => e.stopPropagation()}
            >
              <Image
                src={filtered[lightbox].src}
                alt={filtered[lightbox].title}
                fill
                className="object-contain"
              />
              {/* Close */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 w-10 h-10 bg-[#CC0000] flex items-center justify-center z-10 hover:bg-[#FF1A1A] transition-colors"
              >
                <FiX className="text-white" size={18} />
              </button>
              {/* Prev/Next */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/60 border border-white/10 flex items-center justify-center hover:bg-[#CC0000] hover:border-[#CC0000] transition-all"
              >
                <FiChevronLeft className="text-white" size={20} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/60 border border-white/10 flex items-center justify-center hover:bg-[#CC0000] hover:border-[#CC0000] transition-all"
              >
                <FiChevronRight className="text-white" size={20} />
              </button>
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-5">
                <p className="font-display font-semibold text-white tracking-wide">{filtered[lightbox].title}</p>
                <p className="font-body text-[#CC0000] text-xs tracking-widest uppercase">{filtered[lightbox].category}</p>
              </div>
              {/* Counter */}
              <div className="absolute top-4 left-4 bg-black/60 px-3 py-1">
                <span className="font-display text-white text-sm">{lightbox + 1}</span>
                <span className="text-[#666] text-sm"> / {filtered.length}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

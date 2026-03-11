'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FiArrowRight } from 'react-icons/fi';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Our Team', href: '/team' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <>
      {/* Desktop navbar — transitions from full-width to floating pill */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed z-50 left-0 right-0 flex justify-center"
        style={{ top: scrolled ? '16px' : '0px', transition: 'top 0.4s ease' }}
      >
        <motion.div
          animate={scrolled ? {
            maxWidth: '880px',
            borderRadius: '14px',
            paddingTop: '10px',
            paddingBottom: '10px',
            paddingLeft: '24px',
            paddingRight: '24px',
            background: 'rgba(8,8,8,0.92)',
            boxShadow: '0 8px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(204,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.04)',
            backdropFilter: 'blur(24px)',
          } : {
            maxWidth: '100%',
            borderRadius: '0px',
            paddingTop: '18px',
            paddingBottom: '18px',
            paddingLeft: '40px',
            paddingRight: '40px',
            background: 'rgba(8,8,8,0)',
            boxShadow: 'none',
            backdropFilter: 'none',
          }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="w-full flex items-center justify-between overflow-hidden"
        >
          {/* Scrolled: top glow line */}
          {scrolled && (
            <div className="absolute top-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-red-700/60 to-transparent" />
          )}

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0 relative z-10">
            <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-white/10 group-hover:border-red-700/50 transition-all duration-300">
              <Image src="/images/logo.jpg" alt="King Lion Gym" fill className="object-cover" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-black text-white text-base tracking-widest uppercase leading-tight">King Lion</span>
              <span className="text-red-600 text-[9px] tracking-[0.35em] uppercase font-bold">GYM · AKURESSA</span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1 relative z-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-2 font-bold text-xs tracking-widest uppercase rounded-md transition-all duration-300 relative group animated-underline ${
                  pathname === link.href
                    ? 'text-white bg-white/5'
                    : 'text-[#777] hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
                {pathname === link.href && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-red-600"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3 relative z-10">
            <Link href="/register">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary px-5 py-2.5 text-xs font-black tracking-widest flex items-center gap-2"
              >
                Join Now <FiArrowRight size={13} />
              </motion.button>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-white/10 text-white hover:border-red-700/50 transition-colors z-10"
          >
            {mobileOpen ? <HiX size={18} /> : <HiMenuAlt3 size={18} />}
          </button>
        </motion.div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 220 }}
            className="fixed inset-0 z-40 flex flex-col pt-24 px-7"
            style={{ background: 'rgba(8,8,8,0.98)', backdropFilter: 'blur(20px)' }}
          >
            {/* Ambient red glow */}
            <div className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-10"
              style={{ background: 'radial-gradient(circle, #CC0000, transparent 70%)' }} />

            <div className="mb-8 flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-red-800/40">
                <Image src="/images/logo.jpg" alt="King Lion Gym" fill className="object-cover" />
              </div>
              <div>
                <p className="font-black text-white text-lg tracking-widest uppercase">King Lion Gym</p>
                <p className="text-red-600 text-[9px] tracking-[0.3em] uppercase font-bold">Akuressa, Sri Lanka</p>
              </div>
            </div>

            <nav className="space-y-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center justify-between py-4 px-4 rounded-lg font-bold text-xl tracking-wide uppercase transition-all duration-300 ${
                      pathname === link.href
                        ? 'text-white bg-red-900/20 border border-red-800/30'
                        : 'text-white/50 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                    <FiArrowRight size={16} className="opacity-40" />
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="mt-8"
            >
              <Link href="/register">
                <button className="btn-primary w-full py-4 text-sm font-black tracking-widest flex items-center justify-center gap-2">
                  Start Your Journey <FiArrowRight size={15} />
                </button>
              </Link>
            </motion.div>

            <div className="mt-auto pb-8 flex gap-3 pt-6 border-t border-white/5">
              <p className="text-[#444] text-xs">© 2024 King Lion Gym · Akuressa, Sri Lanka</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
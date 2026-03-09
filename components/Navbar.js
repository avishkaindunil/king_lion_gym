'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';
import { FiArrowUpRight } from 'react-icons/fi';

const LINKS = [
  { name: 'Home',     href: '/' },
  { name: 'About',    href: '/about' },
  { name: 'Gallery',  href: '/gallery' },
  { name: 'Our Team', href: '/team' },
  { name: 'Contact',  href: '/contact' },
];

/* tiny hook — was this link just navigated to? */
function useActiveLink(href) {
  const path = usePathname();
  return path === href;
}

/* ── Magnetic button effect ── */
function MagneticBtn({ children, className = '', href, ...props }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 20 });
  const sy = useSpring(y, { stiffness: 200, damping: 20 });

  const move = (e) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const cx = e.clientX - r.left - r.width / 2;
    const cy = e.clientY - r.top - r.height / 2;
    x.set(cx * 0.3);
    y.set(cy * 0.3);
  };
  const leave = () => { x.set(0); y.set(0); };

  const El = motion[href ? 'a' : 'button'];
  return (
    <El ref={ref} style={{ x: sx, y: sy }} onMouseMove={move} onMouseLeave={leave}
      className={className} {...(href ? { href } : {})} {...props}>
      {children}
    </El>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  const path = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);
  useEffect(() => { setOpen(false); }, [path]);

  return (
    <>
      {/* ════════════════ DESKTOP NAV ════════════════ */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="fixed z-50 inset-x-0 top-0 flex justify-center pointer-events-none"
        style={{ paddingTop: scrolled ? '12px' : '0px', transition: 'padding-top 0.5s cubic-bezier(0.16,1,0.3,1)' }}
      >
        <motion.nav
          animate={scrolled
            ? {
                maxWidth: '900px',
                borderRadius: '14px',
                paddingTop: '10px',
                paddingBottom: '10px',
                paddingLeft: '20px',
                paddingRight: '20px',
                background: 'rgba(4,4,4,0.96)',
                boxShadow: [
                  '0 1px 0 rgba(200,16,46,0.2) inset',
                  '0 -1px 0 rgba(255,255,255,0.03) inset',
                  '0 20px 60px rgba(0,0,0,0.8)',
                  '0 0 0 1px rgba(200,16,46,0.08)',
                ].join(','),
              }
            : {
                maxWidth: '100%',
                borderRadius: '0px',
                paddingTop: '22px',
                paddingBottom: '22px',
                paddingLeft: '48px',
                paddingRight: '48px',
                background: 'transparent',
                boxShadow: 'none',
              }
          }
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-auto w-full flex items-center justify-between gap-6 relative"
          style={{ backdropFilter: scrolled ? 'blur(32px) saturate(180%)' : 'none' }}
        >
          {/* ── Red hairline top (scrolled only) ── */}
          <AnimatePresence>
            {scrolled && (
              <motion.div
                initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} exit={{ scaleX: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute top-0 inset-x-0 h-[1.5px] origin-left rounded-t-xl"
                style={{ background: 'linear-gradient(90deg, transparent, #C8102E 25%, #C8102E 75%, transparent)' }}
              />
            )}
          </AnimatePresence>

          {/* ── LOGO ── */}
          <Link href="/" className="group flex items-center gap-3 flex-shrink-0 relative z-10">
            {/* Logo mark */}
            <div className="relative">
              <div className="relative w-9 h-9 rounded-[9px] overflow-hidden border border-black-5 group-hover:border-red-500/40 transition-all duration-400 flex-shrink-0">
                <Image src="/images/logo.jpg" alt="KLG" fill className="object-cover scale-105" />
              </div>
              {/* Glow dot */}
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#C8102E] border border-[#050505] animate-pulse" />
            </div>
            {/* Text */}
            <div className="flex flex-col leading-none">
              <span className="font-bebas text-white text-[17px] tracking-[0.14em] uppercase">King Lion Gym</span>
              <span className="text-[#C8102E] font-manrope font-700 text-[8px] tracking-[0.32em] uppercase mt-[1px]">Negombo · Sri Lanka</span>
            </div>
          </Link>

          {/* ── DESKTOP LINKS with animated indicator ── */}
          <div className="hidden md:flex items-center relative" onMouseLeave={() => setHovered(null)}>
            {/* Hover pill background */}
            <AnimatePresence>
              {hovered !== null && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="absolute inset-y-0 rounded-lg pointer-events-none"
                  style={{
                    background: 'rgba(200,16,46,0.07)',
                    left: document.getElementById(`nav-${hovered}`)?.offsetLeft ?? 0,
                    width: document.getElementById(`nav-${hovered}`)?.offsetWidth ?? 0,
                    transition: 'left 0.25s cubic-bezier(0.16,1,0.3,1), width 0.25s',
                  }}
                />
              )}
            </AnimatePresence>

            {LINKS.map((l) => {
              const active = path === l.href;
              return (
                <Link key={l.name} href={l.href} id={`nav-${l.name}`}
                  onMouseEnter={() => setHovered(l.name)}
                  className={`relative px-4 py-2 font-manrope font-700 text-[11px] tracking-[0.16em] uppercase transition-all duration-300 ${
                    active ? 'text-white' : 'text-soft hover:text-white'
                  }`}
                >
                  {l.name}
                  {/* Active red dot */}
                  {active && (
                    <motion.span layoutId="nav-dot"
                      className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#C8102E]"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* ── CTA ROW ── */}
          <div className="hidden md:flex items-center gap-2 flex-shrink-0 relative z-10">
            {/* Subtle "Call" link */}
            <a href="tel:+94XXXXXXXXX"
              className="font-manrope font-700 text-[10px] tracking-[0.14em] text-ghost hover:text-white transition-colors duration-300 px-3 py-2 uppercase hidden lg:block">
              +94 XX XXX XXXX
            </a>
            <div className="w-px h-4 bg-white/[0.07] hidden lg:block" />
            {/* Join CTA — magnetic */}
            <Link href="/register">
              <MagneticBtn
                className="relative overflow-hidden group flex items-center gap-2 px-5 py-2.5 text-[10px] font-manrope font-800 tracking-[0.16em] uppercase text-white rounded-[8px]"
                style={{ background: 'linear-gradient(135deg, #C8102E 0%, #8B0000 100%)' }}
                whileTap={{ scale: 0.96 }}
              >
                {/* Shimmer */}
                <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
                Join Now
                <FiArrowUpRight size={12} />
              </MagneticBtn>
            </Link>
          </div>

          {/* ── MOBILE TOGGLE ── */}
          <motion.button
            onClick={() => setOpen(!open)}
            whileTap={{ scale: 0.9 }}
            className="md:hidden w-9 h-9 rounded-[9px] border border-black-5 flex items-center justify-center text-white relative z-10 hover:border-red-500/40 transition-colors"
          >
            <AnimatePresence mode="wait">
              {open
                ? <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}><HiOutlineX size={17} /></motion.span>
                : <motion.span key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}><HiOutlineMenuAlt3 size={17} /></motion.span>
              }
            </AnimatePresence>
          </motion.button>
        </motion.nav>
      </motion.div>

      {/* ════════════════ MOBILE DRAWER ════════════════ */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 md:hidden"
              style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
              onClick={() => setOpen(false)}
            />

            {/* Drawer panel */}
            <motion.aside
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 30, stiffness: 260, mass: 0.8 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-80 flex flex-col md:hidden"
              style={{ background: 'var(--black-0)', borderLeft: '1px solid rgba(200,16,46,0.15)' }}
            >
              {/* Top red accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ background: 'linear-gradient(90deg, transparent, #C8102E, transparent)' }} />

              {/* Header */}
              <div className="flex items-center justify-between px-7 pt-8 pb-6 border-b border-white/[0.04]">
                <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-black-5">
                    <Image src="/images/logo.jpg" alt="KLG" fill className="object-cover" />
                  </div>
                  <div>
                    <div className="font-bebas text-white text-lg tracking-[0.14em]">King Lion Gym</div>
                    <div className="text-[#C8102E] text-[8px] tracking-[0.3em] font-bold uppercase">Negombo · Sri Lanka</div>
                  </div>
                </Link>
                <motion.button whileTap={{ scale: 0.9 }} onClick={() => setOpen(false)}
                  className="w-8 h-8 rounded-lg border border-black-5 flex items-center justify-center text-soft hover:text-white transition-colors">
                  <HiOutlineX size={15} />
                </motion.button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 overflow-y-auto px-4 py-4">
                {LINKS.map((l, i) => {
                  const active = path === l.href;
                  return (
                    <motion.div key={l.name}
                      initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06, duration: 0.35 }}>
                      <Link href={l.href} onClick={() => setOpen(false)}
                        className={`flex items-center justify-between px-4 py-3.5 rounded-xl mb-1 group transition-all duration-300 ${
                          active
                            ? 'bg-red-950/30 border border-red-900/30 text-white'
                            : 'text-ghost hover:text-white hover:bg-white/[0.03]'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          {active && <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E] flex-shrink-0" />}
                          <span className="font-bebas text-2xl tracking-[0.1em] uppercase">{l.name}</span>
                        </div>
                        <FiArrowUpRight size={15} className={`transition-all duration-300 ${active ? 'text-[#C8102E]' : 'opacity-20 group-hover:opacity-60'}`} />
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Bottom CTA */}
              <div className="px-6 pb-8 pt-4 border-t border-white/[0.04]">
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                  <Link href="/register" onClick={() => setOpen(false)}>
                    <button className="w-full py-3.5 rounded-xl text-white text-xs font-manrope font-800 tracking-[0.16em] uppercase flex items-center justify-center gap-2 relative overflow-hidden group"
                      style={{ background: 'linear-gradient(135deg,#C8102E,#8B0000)' }}>
                      <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
                      Start Your Journey <FiArrowUpRight size={14} />
                    </button>
                  </Link>
                  <p className="text-center text-[#1A1A1A] text-[9px] font-semibold tracking-widest uppercase mt-4">
                    Negombo · Sri Lanka
                  </p>
                </motion.div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

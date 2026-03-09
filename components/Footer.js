'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiInstagram, FiFacebook, FiYoutube, FiArrowUpRight } from 'react-icons/fi';
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineMail } from 'react-icons/hi';

const NAV_COL = [['Home','/'],['About Us','/about'],['Gallery','/gallery'],['Our Team','/team'],['Register','/register'],['Contact','/contact']];
const PROG_COL = [['Strength Training','#'],['Personal Training','#'],['Cardio & HIIT','#'],['Bodybuilding','#'],['CrossFit','#'],['Yoga & Recovery','#']];
const HOURS = [['Mon – Fri','5:00 AM – 11:00 PM'],['Saturday','6:00 AM – 10:00 PM'],['Sunday','7:00 AM – 9:00 PM']];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: '#030303' }}>
      {/* Top divider */}
      <div className="divider-red-h" />
      {/* Ambient bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[220px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(200,16,46,0.06), transparent 70%)' }} />
      <div className="absolute inset-0 grid-lines pointer-events-none opacity-60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* ── CTA strip ── */}
        <div className="py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          style={{ borderBottom: '1px solid #131313' }}>
          <div>
            <p className="section-label mb-3">Ready to Start?</p>
            <h3 className="font-bebas text-4xl md:text-5xl text-white tracking-wide leading-none">JOIN KING LION GYM TODAY</h3>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <Link href="/register">
              <motion.button whileHover={{ scale: 1.03 }} className="btn-primary px-6 py-3 text-xs tracking-widest flex items-center gap-2">
                Become a Member <FiArrowUpRight size={12} />
              </motion.button>
            </Link>
            <Link href="/contact">
              <button className="btn-ghost px-6 py-3 text-xs tracking-widest">Contact Us</button>
            </Link>
          </div>
        </div>

        {/* ── Main columns ── */}
        <div className="py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 group mb-5">
              <div className="relative w-11 h-11 rounded-xl overflow-hidden border border-black-5 group-hover:border-red-DEFAULT/30 transition-all">
                <Image src="/images/logo.jpg" alt="King Lion Gym" fill className="object-cover" />
              </div>
              <div>
                <div className="font-bebas text-white text-xl tracking-[0.12em]">King Lion Gym</div>
                <div className="text-red-DEFAULT text-[8px] tracking-[0.3em] uppercase font-bold">Negombo · Sri Lanka</div>
              </div>
            </Link>
            <p className="text-soft text-sm leading-relaxed font-medium max-w-xs mb-6">
              Sri Lanka's most elite fitness destination. Where champions train and legends are forged.
            </p>
            <div className="space-y-2 mb-6">
              {[
                [HiOutlineLocationMarker, 'Negombo, Western Province, Sri Lanka'],
                [HiOutlinePhone, '+94 XX XXX XXXX'],
                [HiOutlineMail, 'info@kingliongym.lk'],
              ].map(([Icon, text], i) => (
                <div key={i} className="flex items-center gap-3">
                  <Icon className="text-red-DEFAULT flex-shrink-0" size={13} />
                  <span className="text-soft text-xs font-medium">{text}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              {[FiInstagram, FiFacebook, FiYoutube].map((Icon, i) => (
                <motion.a key={i} href="#" whileHover={{ y: -3 }}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-soft hover:text-white hover:bg-red-DEFAULT/10 transition-all duration-300"
                  style={{ border: '1px solid #1A1A1A' }}>
                  <Icon size={14} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h5 className="text-white text-xs tracking-[0.2em] uppercase font-black mb-5 flex items-center gap-2">
              <span className="w-3 h-px bg-red-DEFAULT" />Navigate
            </h5>
            <ul className="space-y-2">
              {NAV_COL.map(([name, href]) => (
                <li key={name}>
                  <Link href={href} className="text-soft hover:text-white text-sm font-medium transition-colors duration-300 flex items-center gap-1.5 group">
                    <span className="w-0 group-hover:w-2.5 h-px bg-red-DEFAULT transition-all duration-300" />{name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h5 className="text-white text-xs tracking-[0.2em] uppercase font-black mb-5 flex items-center gap-2">
              <span className="w-3 h-px bg-red-DEFAULT" />Programs
            </h5>
            <ul className="space-y-2">
              {PROG_COL.map(([name, href]) => (
                <li key={name}>
                  <Link href={href} className="text-soft hover:text-white text-sm font-medium transition-colors duration-300 flex items-center gap-1.5 group">
                    <span className="w-0 group-hover:w-2.5 h-px bg-red-DEFAULT transition-all duration-300" />{name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h5 className="text-white text-xs tracking-[0.2em] uppercase font-black mb-5 flex items-center gap-2">
              <span className="w-3 h-px bg-red-DEFAULT" />Hours
            </h5>
            <div className="space-y-4">
              {HOURS.map(([days, time]) => (
                <div key={days}>
                  <div className="text-soft text-xs font-semibold">{days}</div>
                  <div className="text-red-DEFAULT text-xs font-bold tracking-wide mt-0.5">{time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="py-5 flex flex-col md:flex-row items-center justify-between gap-2"
          style={{ borderTop: '1px solid #0D0D0D' }}>
          <p className="text-ghost text-xs font-semibold tracking-wide">
            © {new Date().getFullYear()} King Lion Gym · All Rights Reserved
          </p>
          <p className="text-ghost text-xs font-semibold flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-red-DEFAULT" />Built for Champions · Negombo, Sri Lanka
          </p>
        </div>
      </div>
    </footer>
  );
}

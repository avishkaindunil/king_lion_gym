'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiInstagram, FiFacebook, FiYoutube, FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

const navCol = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Our Team', href: '/team' },
  { name: 'Register', href: '/register' },
  { name: 'Contact', href: '/contact' },
];

const hours = [
  { days: 'Mon – Fri', time: '5:00 AM – 11:00 PM' },
  { days: 'Saturday', time: '6:00 AM – 10:00 PM' },
  { days: 'Sunday', time: '7:00 AM – 9:00 PM' },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: '#050505' }}>
      {/* Top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-700/50 to-transparent" />
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] opacity-[0.06]"
        style={{ background: 'radial-gradient(ellipse, #CC0000, transparent 70%)' }} />
      <div className="absolute inset-0 diagonal-lines opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Main footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand col */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 group mb-6">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-white/10 group-hover:border-red-700/40 transition-all">
                <Image src="/images/logo.jpg" alt="King Lion Gym" fill className="object-cover" />
              </div>
              <div>
                <p className="font-black text-white text-base tracking-widest uppercase leading-tight">King Lion</p>
                <p className="text-red-600 text-[9px] tracking-[0.3em] uppercase font-bold">GYM · NEGOMBO</p>
              </div>
            </Link>
            <p className="text-[#555] text-sm leading-relaxed mb-6 font-medium">
              Sri Lanka's most elite fitness destination. Where champions train and legends are forged.
            </p>
            <div className="flex items-center gap-3">
              {[
                { Icon: FiInstagram, href: '#', label: 'Instagram' },
                { Icon: FiFacebook, href: '#', label: 'Facebook' },
                { Icon: FiYoutube, href: '#', label: 'YouTube' },
              ].map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ y: -3 }}
                  className="w-9 h-9 rounded-lg border border-white/8 flex items-center justify-center text-[#555] hover:text-white hover:border-red-700/50 hover:bg-red-900/20 transition-all duration-300"
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-black text-white text-xs tracking-widest uppercase mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-red-600" /> Navigation
            </h4>
            <ul className="space-y-2">
              {navCol.map((l) => (
                <li key={l.name}>
                  <Link href={l.href}
                    className="text-[#555] hover:text-white font-semibold text-sm transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-3 h-px bg-red-600 transition-all duration-300" />
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-black text-white text-xs tracking-widest uppercase mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-red-600" /> Hours
            </h4>
            <ul className="space-y-3">
              {hours.map((h) => (
                <li key={h.days} className="flex flex-col gap-0.5">
                  <span className="text-[#555] text-xs font-semibold tracking-wide">{h.days}</span>
                  <span className="text-red-500 text-xs font-bold tracking-wide">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-black text-white text-xs tracking-widest uppercase mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-red-600" /> Contact
            </h4>
            <ul className="space-y-4">
              {[
                { Icon: FiMapPin, text: 'Negombo, Western Province, Sri Lanka' },
                { Icon: FiPhone, text: '+94 XX XXX XXXX' },
                { Icon: FiMail, text: 'info@kingliongym.lk' },
              ].map(({ Icon, text }, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-red-900/20 border border-red-800/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="text-red-600" size={12} />
                  </div>
                  <span className="text-[#555] text-sm font-medium leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-5 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[#333] text-xs font-semibold">© {new Date().getFullYear()} King Lion Gym. All rights reserved.</p>
          <div className="flex items-center gap-2 text-[#333] text-xs font-semibold">
            <span className="w-1 h-1 rounded-full bg-red-700" />
            Built for Champions in Sri Lanka
          </div>
        </div>
      </div>
    </footer>
  );
}

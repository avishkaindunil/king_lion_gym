'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiInstagram, FiFacebook, FiYoutube, FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#CC0000] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-[#CC0000] flex items-center justify-center font-display font-bold text-white text-lg tracking-wider transform -skew-x-6">
                KL
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-white text-lg tracking-widest uppercase">King Lion</span>
                <span className="font-body text-[#CC0000] text-xs tracking-[0.3em] uppercase">GYM</span>
              </div>
            </div>
            <p className="text-[#666] font-body text-sm leading-relaxed mb-6">
              Sri Lanka's most elite fitness destination. Where champions are forged and legends are born.
            </p>
            <div className="flex items-center gap-4">
              {[
                { Icon: FiInstagram, href: '#' },
                { Icon: FiFacebook, href: '#' },
                { Icon: FiYoutube, href: '#' },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 border border-white/10 flex items-center justify-center text-[#666] hover:text-white hover:border-[#CC0000] hover:bg-[#CC0000]/10 transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-white tracking-widest uppercase text-sm mb-5 flex items-center gap-2">
              <span className="w-5 h-px bg-[#CC0000]" />
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'Gallery', href: '/gallery' },
                { name: 'Our Team', href: '/team' },
                { name: 'Register', href: '/register' },
                { name: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#666] hover:text-[#CC0000] font-body text-sm transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-[#CC0000] transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display font-semibold text-white tracking-widest uppercase text-sm mb-5 flex items-center gap-2">
              <span className="w-5 h-px bg-[#CC0000]" />
              Training Hours
            </h4>
            <ul className="space-y-2 text-sm font-body">
              {[
                { days: 'Monday - Friday', time: '5:00 AM – 11:00 PM' },
                { days: 'Saturday', time: '6:00 AM – 10:00 PM' },
                { days: 'Sunday', time: '7:00 AM – 9:00 PM' },
                { days: 'Public Holidays', time: '8:00 AM – 8:00 PM' },
              ].map((item, i) => (
                <li key={i} className="flex justify-between gap-4">
                  <span className="text-[#666]">{item.days}</span>
                  <span className="text-[#CC0000]">{item.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-white tracking-widest uppercase text-sm mb-5 flex items-center gap-2">
              <span className="w-5 h-px bg-[#CC0000]" />
              Find Us
            </h4>
            <ul className="space-y-3 text-sm font-body">
              <li className="flex items-start gap-3 text-[#666]">
                <FiMapPin className="text-[#CC0000] mt-0.5 flex-shrink-0" size={15} />
                <span>King Lion Gym, Negombo, Western Province, Sri Lanka</span>
              </li>
              <li className="flex items-center gap-3 text-[#666]">
                <FiPhone className="text-[#CC0000] flex-shrink-0" size={15} />
                <a href="tel:+94XXXXXXXXX" className="hover:text-white transition-colors">+94 XX XXX XXXX</a>
              </li>
              <li className="flex items-center gap-3 text-[#666]">
                <FiMail className="text-[#CC0000] flex-shrink-0" size={15} />
                <a href="mailto:info@kingliongym.lk" className="hover:text-white transition-colors">info@kingliongym.lk</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-5 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-[#444] font-body">
          <p>© {new Date().getFullYear()} King Lion Gym. All rights reserved.</p>
          <p>Crafted for Champions in Sri Lanka 🦁</p>
        </div>
      </div>
    </footer>
  );
}

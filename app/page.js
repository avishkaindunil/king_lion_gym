'use client';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { FiArrowRight, FiArrowDown, FiCheckCircle, FiStar, FiUsers, FiZap, FiShield, FiTarget } from 'react-icons/fi';
import BMICalculator from '../components/BMICalculator';
import AnimatedSection from '../components/AnimatedSection';

/* ── Data ── */
const heroSlides = [
  { img: '/images/gym1.jpg', headline: ['FORGE', 'YOUR', 'LEGEND'], sub: 'Sri Lanka\'s most elite fitness destination.' },
  { img: '/images/gym10.jpg', headline: ['NO PAIN', 'NO', 'GAIN'], sub: 'Premium equipment. Elite coaches. Zero excuses.' },
  { img: '/images/gym5.jpg', headline: ['RISE', 'ABOVE', 'ALL'], sub: 'Train where champions are made.' },
];

const stats = [
  { n: 500, suf: '+', label: 'Active Members', icon: FiUsers },
  { n: 15, suf: '+', label: 'Elite Trainers', icon: FiStar },
  { n: 5, suf: '+', label: 'Years of Excellence', icon: FiShield },
  { n: 12, suf: 'k+', label: 'Sq. Ft. Facility', icon: FiTarget },
];

const services = [
  { title: 'Strength & Power', tag: 'Weights', img: '/images/gym1.jpg', desc: 'World-class Hammer Strength machines used by pros worldwide. Build the physique of your dreams.' },
  { title: 'Personal Training', tag: 'Coaching', img: '/images/gym5.jpg', desc: 'One-on-one elite coaching with nationally certified trainers. 100% tailored to your goals.' },
  { title: 'Cardio & HIIT', tag: 'Endurance', img: '/images/gym10.jpg', desc: 'Dedicated sprint track, spinning bikes, and high-intensity circuits to maximize your results.' },
];

const features = [
  'Premium Hammer Strength Equipment',
  'Air-Conditioned Training Zones',
  'Certified Elite Trainers',
  'Dedicated Cardio Sprint Track',
  'Nutrition Consultation',
  'Flexible Membership Plans',
  'Personal Locker Facilities',
  'Progress Tracking System',
];

const testimonials = [
  { name: 'Kasun Perera', role: 'Member since 2022', stars: 5, text: 'King Lion Gym completely transformed my life. The equipment, trainers, and atmosphere are absolutely world class. Nothing like it in Sri Lanka.' },
  { name: 'Priya Fernando', role: 'Member since 2023', stars: 5, text: "I've trained in Dubai and Singapore. King Lion matches that level. Incredible facility with genuinely passionate, expert coaches." },
  { name: 'Nuwan Jayawardene', role: 'Member since 2021', stars: 5, text: "The premium Hammer Strength machines are unmatched. I've achieved goals I never thought possible. This gym changed my life." },
];

/* ── Stat Card ── */
function StatCard({ n, suf, label, icon: Icon, i }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.1 }}
      className="relative group text-center p-8"
    >
      <div className="absolute inset-0 rounded-xl bg-white/[0.02] border border-white/[0.05] group-hover:border-red-800/40 transition-all duration-500" />
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(204,0,0,0.06), transparent 70%)' }} />
      <div className="relative z-10">
        <div className="w-10 h-10 rounded-lg bg-red-900/20 border border-red-800/20 flex items-center justify-center mx-auto mb-4">
          <Icon className="text-red-600" size={18} />
        </div>
        <div className="font-black text-5xl text-white mb-1 number-glow">
          {inView ? <CountUp end={n} duration={2.5} suffix={suf} /> : `0${suf}`}
        </div>
        <p className="text-[#555] text-xs font-bold tracking-widest uppercase">{label}</p>
      </div>
    </motion.div>
  );
}

/* ── Main ── */
export default function HomePage() {
  const [slide, setSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(null);
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const heroY = useTransform(scrollY, [0, 600], [0, 120]);

  useEffect(() => {
    const t = setInterval(() => {
      setPrevSlide(slide);
      setSlide(p => (p + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(t);
  }, [slide]);

  return (
    <div className="bg-[#080808]">
      {/* ══════════ HERO ══════════ */}
      <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
        {/* BG slideshow */}
        <AnimatePresence>
          <motion.div key={slide} initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }} transition={{ duration: 1.4, ease: 'easeInOut' }} className="absolute inset-0">
            <motion.div style={{ y: heroY }} className="absolute inset-0 scale-110">
              <Image src={heroSlides[slide].img} alt="King Lion Gym" fill className="object-cover" priority />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/75 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]/30 z-10" />
        <div className="absolute inset-0 diagonal-lines z-10 opacity-60" />

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${10 + i * 15}%`, top: `${20 + i * 10}%`,
            animationDuration: `${4 + i * 1.5}s`, animationDelay: `${i * 0.7}s`
          }} />
        ))}

        <motion.div style={{ opacity: heroOpacity }} className="relative z-20 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}
              className="section-badge mb-6">
              <span className="w-1 h-1 rounded-full bg-red-600" />
              Sri Lanka's Premier Gym · Negombo
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div key={slide} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.7 }}>
                <h1 className="font-black leading-none tracking-tighter mb-6"
                  style={{ fontSize: 'clamp(56px,10vw,110px)' }}>
                  {heroSlides[slide].headline.map((word, i) => (
                    <div key={i} className={i === 1 ? 'gradient-text red-glow' : 'text-white'}>
                      {word}
                    </div>
                  ))}
                </h1>
              </motion.div>
            </AnimatePresence>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
              className="text-[#888] text-lg font-medium max-w-lg leading-relaxed mb-10">
              {heroSlides[slide].sub}
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}
              className="flex flex-wrap gap-4">
              <Link href="/register">
                <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                  className="btn-primary px-8 py-4 text-sm font-black tracking-widest flex items-center gap-3">
                  Start Your Journey <FiArrowRight />
                </motion.button>
              </Link>
              <Link href="/gallery">
                <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                  className="btn-outline px-8 py-4 text-sm font-black tracking-widest">
                  View Facility
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Slide dots */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroSlides.map((_, i) => (
            <button key={i} onClick={() => setSlide(i)}
              className={`transition-all duration-500 rounded-full ${i === slide ? 'w-8 h-2 bg-red-600' : 'w-2 h-2 bg-white/20 hover:bg-white/40'}`} />
          ))}
        </div>

        {/* Scroll hint */}
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 right-10 z-20 hidden md:flex flex-col items-center gap-1">
          <span className="text-[#444] text-xs font-bold tracking-widest uppercase">Scroll</span>
          <FiArrowDown className="text-[#444]" size={16} />
        </motion.div>
      </section>

      {/* ══════════ STATS ══════════ */}
      <section className="relative overflow-hidden py-2" style={{ background: '#0A0A0A' }}>
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-800/40 to-transparent" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 py-8">
            {stats.map((s, i) => <StatCard key={i} {...s} i={i} />)}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-800/30 to-transparent" />
      </section>

      {/* ══════════ SERVICES ══════════ */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute inset-0 radial-red" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <div className="section-badge mx-auto mb-5">Training Programs</div>
            <h2 className="font-black text-5xl md:text-6xl text-white tracking-tight mb-4">
              ELITE <span className="gradient-text">PROGRAMS</span>
            </h2>
            <p className="text-[#555] font-semibold max-w-md mx-auto">
              Comprehensive programs engineered to push your limits and deliver exceptional results.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.15} direction="up">
                <motion.div whileHover={{ y: -10 }}
                  className="group rounded-xl overflow-hidden bg-[#0F0F0F] border border-white/5 hover:border-red-800/40 transition-all duration-500 shadow-card hover:shadow-card-hover card-shine">
                  <div className="relative h-52 overflow-hidden">
                    <Image src={s.img} alt={s.title} fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] to-transparent" />
                    <div className="absolute inset-0 bg-red-900/0 group-hover:bg-red-900/10 transition-colors duration-500" />
                    <div className="absolute top-4 left-4">
                      <span className="section-badge text-[9px]">{s.tag}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-black text-xl text-white tracking-tight mb-3">{s.title}</h3>
                    <p className="text-[#555] text-sm font-medium leading-relaxed mb-5">{s.desc}</p>
                    <div className="flex items-center gap-2 text-red-600 text-xs font-black tracking-widest uppercase group-hover:gap-4 transition-all duration-300">
                      Explore <FiArrowRight size={13} />
                    </div>
                  </div>
                  <div className="h-px bg-gradient-to-r from-red-700 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ ABOUT SNIPPET ══════════ */}
      <section className="py-24 relative overflow-hidden" style={{ background: '#0A0A0A' }}>
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-30">
          <Image src="/images/gym3.jpg" alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] to-transparent" />
        </div>
        <div className="absolute inset-0 radial-red-left" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-xl">
            <AnimatedSection direction="left">
              <div className="section-badge mb-5">Our Story</div>
              <h2 className="font-black text-5xl md:text-6xl text-white tracking-tight mb-6 leading-tight">
                WHERE<br /><span className="gradient-text">LIONS</span><br />ARE BORN
              </h2>
              <p className="text-[#666] font-medium leading-relaxed mb-5">
                King Lion Gym stands as Sri Lanka's most premium fitness destination — located in the heart of Negombo, Western Province. Founded with one vision: bring world-class fitness infrastructure to Sri Lanka, equipped with the finest Hammer Strength machines, led by passionate elite trainers.
              </p>
              <p className="text-[#666] font-medium leading-relaxed mb-8">
                Every detail is carefully crafted — from the signature red Hammer Strength equipment to the motivational murals of legendary champions. This is more than a gym. This is a temple of transformation.
              </p>
              <Link href="/about">
                <motion.button whileHover={{ scale: 1.03 }}
                  className="btn-primary px-8 py-3.5 text-sm font-black tracking-widest flex items-center gap-3 w-fit">
                  Our Full Story <FiArrowRight />
                </motion.button>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ══════════ FEATURES + BMI ══════════ */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection direction="left">
              <div className="section-badge mb-5">Why King Lion</div>
              <h2 className="font-black text-4xl md:text-5xl text-white tracking-tight mb-8 leading-tight">
                WORLD CLASS<br /><span className="gradient-text">FACILITIES</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {features.map((feat, i) => (
                  <motion.div key={i}
                    initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                    className="flex items-center gap-3 text-sm font-semibold text-[#666] group">
                    <div className="w-5 h-5 rounded-md bg-red-900/30 border border-red-800/30 flex items-center justify-center flex-shrink-0">
                      <FiCheckCircle className="text-red-600" size={11} />
                    </div>
                    <span className="group-hover:text-white transition-colors duration-300">{feat}</span>
                  </motion.div>
                ))}
              </div>
              {/* Mini gallery */}
              <div className="grid grid-cols-3 gap-2">
                {['/images/gym2.jpg', '/images/gym6.jpg', '/images/gym8.jpg'].map((img, i) => (
                  <div key={i} className="relative h-24 rounded-lg overflow-hidden group cursor-pointer">
                    <Image src={img} alt="" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-red-900/20 transition-colors duration-300 rounded-lg" />
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <BMICalculator />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ══════════ TESTIMONIALS ══════════ */}
      <section className="py-24 relative overflow-hidden" style={{ background: '#0A0A0A' }}>
        <div className="absolute inset-0 diagonal-lines opacity-50" />
        <div className="absolute inset-0 radial-red" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center mb-14">
            <div className="section-badge mx-auto mb-5">Member Voices</div>
            <h2 className="font-black text-5xl text-white tracking-tight">
              SUCCESS <span className="gradient-text">STORIES</span>
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimatedSection key={i} delay={i * 0.12} direction="up">
                <motion.div whileHover={{ y: -8 }}
                  className="rounded-xl bg-[#0F0F0F] border border-white/5 hover:border-red-800/30 p-7 relative overflow-hidden transition-all duration-500 group card-shine">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-red-700/0 via-red-700/50 to-red-700/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.stars)].map((_, j) => (
                      <FiStar key={j} className="text-red-600 fill-red-600" size={13} />
                    ))}
                  </div>
                  <p className="text-[#666] text-sm font-medium leading-relaxed mb-6 italic">"{t.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-red-900/20 border border-red-800/30 flex items-center justify-center font-black text-red-600 text-sm">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="font-black text-white text-sm tracking-wide">{t.name}</p>
                      <p className="text-[#444] text-xs font-semibold">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0">
          <Image src="/images/gym10.jpg" alt="" fill className="object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/85 to-[#080808]" />
        </div>
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-700/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-700/50 to-transparent" />

        <AnimatedSection className="relative z-10 max-w-7xl mx-auto px-6 text-center" direction="scale">
          <div className="relative w-20 h-20 rounded-2xl overflow-hidden mx-auto mb-8 border border-red-800/40 animate-pulse-glow">
            <Image src="/images/logo.jpg" alt="King Lion Gym" fill className="object-cover" />
          </div>
          <h2 className="font-black text-5xl md:text-7xl text-white tracking-tight mb-6 leading-none">
            ARE YOU READY<br />TO <span className="gradient-text red-glow">TRANSFORM?</span>
          </h2>
          <p className="text-[#666] font-semibold text-lg max-w-xl mx-auto mb-10">
            Join hundreds of members who chose King Lion Gym and never looked back. Your transformation begins with one decision.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/register">
              <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                className="btn-primary px-10 py-4 text-sm font-black tracking-widest">
                Become a Member
              </motion.button>
            </Link>
            <Link href="/contact">
              <motion.button whileHover={{ scale: 1.04 }}
                className="btn-outline px-10 py-4 text-sm font-black tracking-widest">
                Get in Touch
              </motion.button>
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}

'use client';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import {
  FiArrowRight, FiArrowDown, FiZap, FiTarget, FiShield,
  FiStar, FiClock, FiUsers, FiCheckCircle
} from 'react-icons/fi';
import { GiLion, GiMuscularTorso, GiWeightLiftingUp } from 'react-icons/gi';
import BMICalculator from '../components/BMICalculator';
import AnimatedSection from '../components/AnimatedSection';

const stats = [
  { number: 500, suffix: '+', label: 'Active Members', icon: FiUsers },
  { number: 15, suffix: '+', label: 'Expert Trainers', icon: FiStar },
  { number: 5, suffix: '', label: 'Years of Excellence', icon: FiShield },
  { number: 1000, suffix: '+', label: 'Sq. Ft. Space', icon: FiTarget },
];

const services = [
  {
    icon: GiWeightLiftingUp,
    title: 'Strength Training',
    desc: 'World-class Hammer Strength equipment for maximum muscle development. Build the physique you\'ve always dreamed of.',
    img: '/images/gym1.jpg',
  },
  {
    icon: GiMuscularTorso,
    title: 'Personal Training',
    desc: 'One-on-one sessions with Sri Lanka\'s most elite certified trainers. Customized programs for your unique goals.',
    img: '/images/gym5.jpg',
  },
  {
    icon: FiZap,
    title: 'Cardio & HIIT',
    desc: 'Cutting-edge cardio equipment and high-intensity interval training to maximize fat burn and cardiovascular health.',
    img: '/images/gym10.jpg',
  },
];

const features = [
  'Premium Hammer Strength Equipment',
  'Air-conditioned Training Zones',
  'Expert Certified Trainers',
  'Dedicated Cardio Track',
  'Nutrition Consultation',
  'Flexible Membership Plans',
  'Personal Locker Facilities',
  'Progress Tracking System',
];

const testimonials = [
  {
    name: 'Kasun Perera',
    role: 'Member since 2022',
    text: 'King Lion Gym completely transformed my life. The equipment, the trainers, the atmosphere — absolutely world class. Nothing like it in Sri Lanka.',
    rating: 5,
  },
  {
    name: 'Priya Fernando',
    role: 'Member since 2023',
    text: 'I\'ve been to gyms in Dubai and Singapore. King Lion matches that level. Incredible facility and genuinely passionate coaches.',
    rating: 5,
  },
  {
    name: 'Nuwan Jayawardene',
    role: 'Member since 2021',
    text: 'The premium red Hammer Strength machines are unmatched. I\'ve achieved goals I never thought possible thanks to this place.',
    rating: 5,
  },
];

function StatCard({ number, suffix, label, icon: Icon, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="text-center relative group"
    >
      <div className="absolute inset-0 bg-[#CC0000]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10 p-6">
        <Icon className="text-[#CC0000] mx-auto mb-3 opacity-60" size={28} />
        <div className="font-display font-bold text-5xl text-white mb-1">
          {inView ? (
            <CountUp end={number} duration={2.5} suffix={suffix} />
          ) : (
            <span>0{suffix}</span>
          )}
        </div>
        <p className="font-body text-[#888] text-sm tracking-wider uppercase">{label}</p>
      </div>
    </motion.div>
  );
}

export default function HomePage() {
  const [heroSlide, setHeroSlide] = useState(0);
  const heroImages = ['/images/gym1.jpg', '/images/gym10.jpg', '/images/gym5.jpg'];
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroSlide(prev => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#0A0A0A]">
      {/* ── HERO ── */}
      <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
        {/* Slideshow Background */}
        <AnimatePresence mode="wait">
          <motion.div
            key={heroSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <motion.div style={{ y: heroY }} className="absolute inset-0 scale-110">
              <Image
                src={heroImages[heroSlide]}
                alt="King Lion Gym"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/70 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent z-10" />
        <div className="absolute inset-0 diagonal-lines z-10" />

        {/* Content */}
        <motion.div style={{ opacity: heroOpacity }} className="relative z-20 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-8 h-px bg-[#CC0000]" />
              <span className="font-body text-[#CC0000] text-xs tracking-[0.4em] uppercase">Sri Lanka's Premier Gym</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-display font-bold text-7xl md:text-8xl xl:text-9xl text-white leading-none tracking-tighter mb-6"
            >
              FORGE
              <br />
              <span className="gradient-text">YOUR</span>
              <br />
              LEGEND
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="font-body text-lg text-[#999] max-w-xl leading-relaxed mb-10"
            >
              Where ordinary people transform into extraordinary athletes. World-class equipment, elite trainers, and an atmosphere that demands greatness.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/register">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-primary px-8 py-4 text-sm font-display tracking-widest flex items-center gap-3"
                >
                  Start Your Journey <FiArrowRight />
                </motion.button>
              </Link>
              <Link href="/gallery">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-outline px-8 py-4 text-sm font-display tracking-widest"
                >
                  View Facility
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Slide indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setHeroSlide(i)}
              className={`h-px transition-all duration-500 ${i === heroSlide ? 'w-10 bg-[#CC0000]' : 'w-4 bg-white/30'}`}
            />
          ))}
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 right-10 z-20 text-[#444] hidden md:block"
        >
          <FiArrowDown size={20} />
        </motion.div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-[#0D0D0D] border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#CC0000]/30 to-transparent" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/5">
            {stats.map((stat, i) => (
              <StatCard key={i} {...stat} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <p className="font-body text-[#CC0000] text-xs tracking-[0.4em] uppercase mb-3">What We Offer</p>
            <h2 className="font-display font-bold text-5xl md:text-6xl text-white tracking-tight mb-5">
              ELITE TRAINING<br /><span className="gradient-text">PROGRAMS</span>
            </h2>
            <p className="font-body text-[#666] max-w-xl mx-auto">
              Comprehensive fitness programs designed to push your limits and deliver exceptional results.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <AnimatedSection key={i} delay={i * 0.15} direction="up">
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group relative bg-[#111] border border-white/5 overflow-hidden h-full"
                >
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={service.img}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent" />
                    <div className="absolute inset-0 bg-[#CC0000]/0 group-hover:bg-[#CC0000]/10 transition-colors duration-500" />
                  </div>
                  <div className="p-6">
                    <service.icon className="text-[#CC0000] mb-4" size={28} />
                    <h3 className="font-display font-bold text-xl text-white tracking-wide mb-3">{service.title}</h3>
                    <p className="font-body text-[#666] text-sm leading-relaxed">{service.desc}</p>
                    <div className="mt-5 flex items-center gap-2 text-[#CC0000] text-xs font-display tracking-widest uppercase group-hover:gap-4 transition-all duration-300">
                      Learn More <FiArrowRight size={14} />
                    </div>
                  </div>
                  {/* Bottom red line on hover */}
                  <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-[#CC0000] transition-all duration-500" />
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT SNIPPET ── */}
      <section className="py-24 bg-[#0D0D0D] relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-20">
          <Image src="/images/gym3.jpg" alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D] to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-xl">
            <AnimatedSection direction="left">
              <p className="font-body text-[#CC0000] text-xs tracking-[0.4em] uppercase mb-3">Our Story</p>
              <h2 className="font-display font-bold text-5xl md:text-6xl text-white tracking-tight mb-6">
                WHERE LIONS<br /><span className="gradient-text">ARE BORN</span>
              </h2>
              <p className="font-body text-[#777] leading-relaxed mb-6">
                King Lion Gym stands as Sri Lanka's most premium fitness destination. Founded with a singular vision — to bring world-class fitness infrastructure to the island nation, equipped with the finest Hammer Strength machines and led by passionate elite trainers.
              </p>
              <p className="font-body text-[#777] leading-relaxed mb-8">
                Every detail in our facility has been carefully crafted — from the signature red Hammer Strength equipment to the motivational murals of legendary champions that line our walls. This is more than a gym. This is a temple of transformation.
              </p>
              <Link href="/about">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  className="btn-primary px-8 py-3.5 text-sm font-display tracking-widest flex items-center gap-3 w-fit"
                >
                  Our Story <FiArrowRight />
                </motion.button>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── FEATURES + BMI ── */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Features */}
            <AnimatedSection direction="left">
              <p className="font-body text-[#CC0000] text-xs tracking-[0.4em] uppercase mb-3">Why King Lion</p>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-white tracking-tight mb-8">
                WORLD CLASS<br /><span className="gradient-text">FACILITIES</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((feat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="flex items-center gap-3 text-sm font-body text-[#888] group"
                  >
                    <FiCheckCircle className="text-[#CC0000] flex-shrink-0 group-hover:scale-110 transition-transform" size={16} />
                    <span className="group-hover:text-white transition-colors duration-300">{feat}</span>
                  </motion.div>
                ))}
              </div>

              {/* Gallery preview */}
              <div className="mt-10 grid grid-cols-3 gap-2">
                {['/images/gym2.jpg', '/images/gym6.jpg', '/images/gym8.jpg'].map((img, i) => (
                  <div key={i} className="relative h-24 overflow-hidden group cursor-pointer">
                    <Image src={img} alt="" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-[#CC0000]/20 transition-colors duration-300" />
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* BMI Calculator */}
            <AnimatedSection direction="right">
              <BMICalculator />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 bg-[#0D0D0D] relative overflow-hidden">
        <div className="absolute inset-0 diagonal-lines opacity-30" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center mb-14">
            <p className="font-body text-[#CC0000] text-xs tracking-[0.4em] uppercase mb-3">What Members Say</p>
            <h2 className="font-display font-bold text-5xl text-white tracking-tight">
              SUCCESS <span className="gradient-text">STORIES</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimatedSection key={i} delay={i * 0.15} direction="up">
                <div className="bg-[#111] border border-white/5 p-7 relative group hover:border-[#CC0000]/30 transition-colors duration-500">
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.rating)].map((_, j) => (
                      <FiStar key={j} className="text-[#CC0000] fill-[#CC0000]" size={14} />
                    ))}
                  </div>
                  <p className="font-body text-[#888] text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#CC0000]/20 border border-[#CC0000]/30 flex items-center justify-center font-display font-bold text-[#CC0000]">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="font-display font-semibold text-white tracking-wide text-sm">{t.name}</p>
                      <p className="font-body text-[#555] text-xs">{t.role}</p>
                    </div>
                  </div>
                  <div className="absolute top-0 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-[#CC0000] to-transparent transition-all duration-700" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0">
          <Image src="/images/gym10.jpg" alt="" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-[#0A0A0A]" />
        </div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#CC0000]/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#CC0000]/50 to-transparent" />

        <AnimatedSection className="relative z-10 max-w-7xl mx-auto px-6 text-center" direction="scale">
          <GiLion className="text-[#CC0000] mx-auto mb-6 opacity-80" size={64} />
          <h2 className="font-display font-bold text-5xl md:text-7xl text-white tracking-tight mb-6">
            ARE YOU READY<br />TO <span className="gradient-text red-glow">TRANSFORM?</span>
          </h2>
          <p className="font-body text-[#777] text-lg max-w-xl mx-auto mb-10">
            Join hundreds of members who chose King Lion Gym and never looked back. Your transformation begins with one decision.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/register">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary px-10 py-4 text-base font-display tracking-widest"
              >
                Become a Member
              </motion.button>
            </Link>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.03 }}
                className="btn-outline px-10 py-4 text-base font-display tracking-widest"
              >
                Get in Touch
              </motion.button>
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}

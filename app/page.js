'use client';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { FiArrowUpRight, FiArrowDown, FiArrowRight, FiPlay, FiCheckCircle } from 'react-icons/fi';
import BMICalculator from '../components/BMICalculator';
import AnimatedSection from '../components/AnimatedSection';

/* ── Data ── */
const SLIDES = [
  { img:'/images/gym1.jpg', kicker:'Premium Facility', word1:'FORGE', word2:'YOUR', word3:'LEGEND' },
  { img:'/images/gym10.jpg', kicker:'Elite Equipment', word1:'NO PAIN', word2:'NO', word3:'GAIN' },
  { img:'/images/gym5.jpg', kicker:'Expert Coaching', word1:'RISE', word2:'ABOVE', word3:'ALL' },
];

const STATS = [
  { n:500, s:'+', label:'Active Members' },
  { n:15, s:'+', label:'Elite Coaches' },
  { n:5, s:'+', label:'Years Running' },
  { n:12, s:'k', label:'Sq Ft Facility' },
];

const SERVICES = [
  { num:'01', title:'Strength & Power', img:'/images/gym1.jpg', desc:'World-class Hammer Strength machines. Build your dream physique with equipment used by professional athletes worldwide.' },
  { num:'02', title:'Personal Training', img:'/images/gym5.jpg', desc:'1-on-1 elite coaching tailored entirely to your goals. Our certified trainers craft programs that deliver real results.' },
  { num:'03', title:'Cardio & HIIT', img:'/images/gym10.jpg', desc:'Dedicated sprint track, spinning bikes and high-intensity circuits. Maximize fat burn and cardiovascular performance.' },
  { num:'04', title:'Bodybuilding', img:'/images/gym3.jpg', desc:'Specialized hypertrophy programs guided by competitive bodybuilders. Sculpt and define your physique to perfection.' },
];

const FEATURES = [
  'Premium Hammer Strength Equipment',
  'Air-Conditioned Training Zones',
  'Certified Elite Trainers',
  'Dedicated Cardio Sprint Track',
  'Custom Nutrition Plans',
  'Flexible Membership Tiers',
  'Personal Locker Facilities',
  'Progress Tracking System',
];

const TESTIMONIALS = [
  { name:'Kasun Perera', role:'Member since 2022', text:'King Lion completely transformed my life. The equipment, trainers, and atmosphere are absolutely world class. Nothing like it anywhere in Sri Lanka.' },
  { name:'Priya Fernando', role:'Member since 2023', text:"I've trained in Dubai and Singapore. King Lion matches that level perfectly. Incredible facility with genuinely passionate, expert coaches." },
  { name:'Nuwan Jayawardene', role:'Member since 2021', text:"The premium Hammer Strength machines are unmatched. I've achieved goals I never thought possible. This place changed everything for me." },
];

const MARQUEE_WORDS = ['King Lion Gym','Strength','Power','Elite','Transform','Champion','Negombo','Sri Lanka','Excellence'];

/* ── Marquee component ── */
function Marquee({ words, className = '', speed = '' }) {
  const doubled = [...words, ...words];
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div className={`inline-flex gap-8 ${speed || 'marquee-fwd'} ${className}`}>
        {doubled.map((w, i) => (
          <span key={i} className="flex items-center gap-8">
            <span>{w}</span>
            <span className="text-[#C8102E]">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── Stat Card ── */
function Stat({ n, s, label, i }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  return (
    <motion.div ref={ref} initial={{opacity:0,y:24}} animate={inView?{opacity:1,y:0}:{}}
      transition={{duration:0.6,delay:i*0.1}}
      className="relative group py-10 px-6 border-r border-black-4 last:border-r-0 text-center hover:bg-white/[0.015] transition-colors duration-500">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-DEFAULT/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
      <div className="font-bebas text-6xl md:text-7xl text-white leading-none mb-1" style={{textShadow:'0 0 40px rgba(200,16,46,0.25)'}}>
        {inView ? <CountUp end={n} duration={2.5} suffix={s} /> : `0${s}`}
      </div>
      <div className="text-soft text-xs font-bold tracking-[0.2em] uppercase">{label}</div>
    </motion.div>
  );
}

/* ── Main Page ── */
export default function Home() {
  const [slide, setSlide] = useState(0);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 700], [0, 160]);
  const heroOp = useTransform(scrollY, [0, 450], [1, 0]);

  useEffect(() => {
    const t = setInterval(() => setSlide(p => (p + 1) % SLIDES.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{ background: 'var(--black-0)' }}>

      {/* ══════════════════════════ HERO ══════════════════════════ */}
      <section className="relative h-screen min-h-[700px] overflow-hidden flex items-center">
        {/* BG */}
        <AnimatePresence>
          <motion.div key={slide} initial={{opacity:0,scale:1.06}} animate={{opacity:1,scale:1}}
            exit={{opacity:0}} transition={{duration:1.6,ease:'easeInOut'}}
            className="absolute inset-0">
            <motion.div style={{y:heroY}} className="absolute inset-0 scale-110">
              <Image src={SLIDES[slide].img} alt="King Lion Gym" fill className="object-cover" priority />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-[#050505]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/20" />
        <div className="absolute inset-0 grid-lines opacity-30" />

        {/* Giant BG number */}
        <div className="absolute right-10 bottom-10 sec-num text-[18rem] opacity-[0.03] select-none pointer-events-none font-bebas">
          KLG
        </div>

        {/* Content */}
        <motion.div style={{opacity:heroOp}} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full pt-24">
          <AnimatePresence mode="wait">
            <motion.div key={slide} initial={{opacity:0,y:30}} animate={{opacity:1,y:0}}
              exit={{opacity:0,y:-20}} transition={{duration:0.8}}>

              {/* Kicker */}
              <div className="section-label mb-6">{SLIDES[slide].kicker}</div>

              {/* Main headline */}
              <h1 className="font-bebas leading-none tracking-wide mb-6" style={{fontSize:'clamp(72px,11vw,130px)'}}>
                <div className="text-white block">{SLIDES[slide].word1}</div>
                <div className="block" style={{
                  WebkitTextStroke:'2px rgba(200,16,46,0.4)',
                  color:'transparent',
                  WebkitTextFillColor:'transparent'
                }}>{SLIDES[slide].word2}</div>
                <div className="text-red-gradient block" style={{textShadow:'0 0 80px rgba(200,16,46,0.2)'}}>
                  {SLIDES[slide].word3}
                </div>
              </h1>

              {/* Sub */}
              <p className="text-soft font-medium text-lg max-w-md leading-relaxed mb-10">
                Sri Lanka's most elite fitness destination — Negombo.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Link href="/register">
                  <motion.button whileHover={{scale:1.03}} whileTap={{scale:0.97}}
                    className="btn-primary px-8 py-4 text-xs tracking-widest flex items-center gap-2">
                    Start Your Journey <FiArrowUpRight size={14}/>
                  </motion.button>
                </Link>
                <Link href="/gallery">
                  <motion.button whileHover={{scale:1.03}} className="btn-ghost px-8 py-4 text-xs tracking-widest flex items-center gap-2">
                    <FiPlay size={13}/> View Facility
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Slide indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex items-center gap-3">
          {SLIDES.map((_, i) => (
            <button key={i} onClick={()=>setSlide(i)}
              className={`transition-all duration-500 rounded-full ${i===slide?'w-8 h-1.5 bg-[#C8102E]':'w-1.5 h-1.5 bg-white/20 hover:bg-white/40'}`}/>
          ))}
        </div>

        {/* Scroll cue */}
        <motion.div animate={{y:[0,8,0]}} transition={{repeat:Infinity,duration:2}}
          className="absolute bottom-10 right-10 z-10 hidden md:flex flex-col items-center gap-2">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-[#333]" />
          <FiArrowDown className="text-soft" size={14}/>
        </motion.div>
      </section>

      {/* ══════════════════════════ MARQUEE ══════════════════════════ */}
      <div style={{background:'#080808', borderTop:'1px solid rgba(255,255,255,0.04)', borderBottom:'1px solid rgba(255,255,255,0.04)'}}>
        <div className="py-4 font-bebas text-2xl tracking-[0.15em] text-ghost uppercase overflow-hidden">
          <Marquee words={MARQUEE_WORDS} />
        </div>
      </div>

      {/* ══════════════════════════ STATS ══════════════════════════ */}
      <section style={{background:'var(--black-1)'}} className="relative overflow-hidden">
        <div className="absolute inset-0 radial-center pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/[0.04]">
            {STATS.map((s,i) => <Stat key={i} {...s} i={i}/>)}
          </div>
        </div>
      </section>

      {/* ══════════════════════════ ABOUT SPLIT ══════════════════════════ */}
      <section className="relative overflow-hidden py-28" style={{background:'#050505'}}>
        <div className="absolute inset-0 grid-lines opacity-20" />
        <div className="absolute inset-0 radial-top-right pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Image side */}
            <AnimatedSection direction="left">
              <div className="relative">
                {/* Big number behind */}
                <div className="absolute -top-8 -left-6 font-bebas text-[9rem] text-[#C8102E]/[0.06] leading-none select-none pointer-events-none">01</div>
                {/* Main image */}
                <div className="relative h-[520px] rounded-xl overflow-hidden">
                  <Image src="/images/gym4.jpg" alt="About" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 to-transparent" />
                </div>
                {/* Floating card */}
                <motion.div
                  animate={{y:[0,-6,0]}} transition={{duration:4,repeat:Infinity,ease:'easeInOut'}}
                  className="absolute -bottom-6 -right-6 rounded-xl p-5 border border-black-4"
                  style={{background:'rgba(11,11,11,0.95)', backdropFilter:'blur(20px)'}}>
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                      <Image src="/images/logo.jpg" alt="KLG" fill className="object-cover"/>
                    </div>
                    <div>
                      <div className="font-bebas text-white text-lg tracking-wide leading-tight">#1 GYM IN<br/>NEGOMBO</div>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(5)].map((_,j)=><span key={j} className="text-[#C8102E] text-xs">★</span>)}
                        <span className="text-soft text-xs ml-1 font-semibold">5.0</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
                {/* Side accent bar */}
                <div className="absolute top-10 -left-3 w-1 h-24 bg-gradient-to-b from-[#C8102E] to-transparent rounded-full" />
              </div>
            </AnimatedSection>

            {/* Text side */}
            <AnimatedSection direction="right" delay={0.15}>
              <div className="section-label mb-5">Our Story</div>
              <h2 className="font-bebas text-6xl md:text-7xl text-white tracking-wide leading-none mb-6">
                WHERE LIONS<br />
                <span className="text-red-gradient">ARE BORN</span>
              </h2>
              <p className="text-soft font-medium leading-relaxed mb-5 text-[15px]">
                Located in the heart of Negombo, Western Province, King Lion Gym was founded on one powerful belief — every person deserves access to world-class fitness. We refuse to compromise on quality.
              </p>
              <p className="text-soft font-medium leading-relaxed mb-8 text-[15px]">
                Our facility boasts an impressive lineup of premium Hammer Strength equipment — the same machines used by professional athletes worldwide. From the signature red machines to motivational murals of legendary champions, every element is designed to inspire peak performance.
              </p>
              {/* Stats strip */}
              <div className="flex gap-8 mb-8 pb-8 border-b border-black-4">
                {[['500+','Members'],['15+','Trainers'],['5+','Years']].map(([n,l])=>(
                  <div key={l}>
                    <div className="font-bebas text-4xl text-[#C8102E] leading-none">{n}</div>
                    <div className="text-soft text-xs font-bold tracking-[0.2em] uppercase mt-1">{l}</div>
                  </div>
                ))}
              </div>
              <Link href="/about">
                <motion.button whileHover={{scale:1.03}} className="btn-primary px-8 py-3.5 text-xs tracking-widest flex items-center gap-2 w-fit">
                  Our Full Story <FiArrowUpRight size={13}/>
                </motion.button>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ══════════════════════════ SERVICES ══════════════════════════ */}
      <section className="relative py-28 overflow-hidden" style={{background:'var(--black-1)'}}>
        <div className="absolute inset-0 grid-lines opacity-20" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <AnimatedSection direction="left">
              <div className="section-label mb-4">What We Offer</div>
              <h2 className="font-bebas text-6xl md:text-7xl text-white tracking-wide leading-none">
                ELITE<br /><span className="text-red-gradient">PROGRAMS</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <p className="text-soft font-medium max-w-xs text-sm leading-relaxed">
                Comprehensive fitness programs engineered to push your limits and deliver extraordinary results.
              </p>
            </AnimatedSection>
          </div>

          {/* 2x2 grid with alternating big/small */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SERVICES.map((s,i) => (
              <AnimatedSection key={i} delay={i*0.1} direction="up">
                <motion.div whileHover={{y:-6}}
                  className="group relative rounded-xl overflow-hidden border border-black-4 hover:border-red-DEFAULT/20 transition-all duration-500 cursor-pointer"
                  style={{height: i===0||i===3 ? '420px' : '320px'}}>
                  <Image src={s.img} alt={s.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent" />
                  <div className="absolute inset-0 bg-red-DEFAULT/0 group-hover:bg-red-DEFAULT/5 transition-colors duration-500" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-7">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <div className="font-bebas text-[#C8102E]/60 text-4xl leading-none mb-1">{s.num}</div>
                        <h3 className="font-bebas text-3xl text-white tracking-wide leading-tight mb-2">{s.title}</h3>
                        <p className="text-soft text-sm font-medium leading-relaxed max-w-xs opacity-0 group-hover:opacity-100 transition-all duration-500 max-h-0 group-hover:max-h-20 overflow-hidden">
                          {s.desc}
                        </p>
                      </div>
                      <div className="w-10 h-10 rounded-lg bg-[#C8102E] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                        <FiArrowUpRight className="text-white" size={16}/>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════ MARQUEE 2 ══════════════════════════ */}
      <div style={{borderTop:'1px solid rgba(255,255,255,0.03)',borderBottom:'1px solid rgba(255,255,255,0.03)',background:'var(--black-0)'}}>
        <div className="py-4 font-bebas text-3xl tracking-[0.12em] text-ghost uppercase">
          <Marquee words={['Transform','Strength','Dedication','Elite','Champion','No Limits','King Lion','Rise Above','Never Stop']} speed="marquee-rev" />
        </div>
      </div>

      {/* ══════════════════════════ FEATURES + BMI ══════════════════════════ */}
      <section className="relative py-28 overflow-hidden" style={{background:'#050505'}}>
        <div className="absolute inset-0 grid-lines opacity-20" />
        <div className="absolute inset-0 radial-bottom-left pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <AnimatedSection direction="left">
              <div className="section-label mb-5">Why King Lion</div>
              <h2 className="font-bebas text-6xl md:text-7xl text-white tracking-wide leading-none mb-10">
                WORLD CLASS<br /><span className="text-red-gradient">FACILITIES</span>
              </h2>
              <div className="space-y-3 mb-10">
                {FEATURES.map((feat,i) => (
                  <motion.div key={i}
                    initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}}
                    viewport={{once:true}} transition={{delay:i*0.06}}
                    className="flex items-center gap-3 group">
                    <div className="w-5 h-5 rounded-md bg-red-DEFAULT/10 border border-red-DEFAULT/20 flex items-center justify-center flex-shrink-0 group-hover:bg-red-DEFAULT/20 transition-colors">
                      <FiCheckCircle className="text-[#C8102E]" size={10}/>
                    </div>
                    <span className="text-soft text-sm font-semibold group-hover:text-white transition-colors duration-300">{feat}</span>
                  </motion.div>
                ))}
              </div>
              {/* Gallery row */}
              <div className="grid grid-cols-3 gap-2">
                {['/images/gym2.jpg','/images/gym6.jpg','/images/gym8.jpg'].map((src,i)=>(
                  <div key={i} className="relative h-24 rounded-lg overflow-hidden group">
                    <Image src={src} alt="" fill className="object-cover group-hover:scale-110 transition-transform duration-500"/>
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-red-DEFAULT/10 transition-colors duration-300 rounded-lg"/>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.1}>
              <BMICalculator />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ══════════════════════════ TESTIMONIALS ══════════════════════════ */}
      <section className="relative py-28 overflow-hidden" style={{background:'var(--black-1)'}}>
        <div className="absolute inset-0 grid-lines opacity-20" />
        <div className="absolute inset-0 radial-center pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="section-label mb-4">Member Voices</div>
              <h2 className="font-bebas text-6xl md:text-7xl text-white tracking-wide leading-none">
                SUCCESS<br /><span className="text-red-gradient">STORIES</span>
              </h2>
            </div>
            <Link href="/register" className="flex-shrink-0">
              <button className="btn-red-outline px-6 py-3 text-xs tracking-widest flex items-center gap-2">
                Join Them <FiArrowUpRight size={12}/>
              </button>
            </Link>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t,i)=>(
              <AnimatedSection key={i} delay={i*0.12} direction="up">
                <motion.div whileHover={{y:-7}}
                  className="card-dark p-7 relative overflow-hidden group h-full flex flex-col">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-DEFAULT/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                  {/* Quote */}
                  <div className="font-bebas text-6xl text-[#C8102E]/10 leading-none mb-2 -mt-2">"</div>
                  <p className="text-soft text-sm font-medium leading-relaxed mb-6 flex-1">{t.text}</p>
                  <div className="flex items-center gap-3 pt-5 border-t border-black-4">
                    <div className="w-9 h-9 rounded-lg bg-red-DEFAULT/10 border border-red-DEFAULT/20 flex items-center justify-center font-bebas text-[#C8102E] text-lg">
                      {t.name[0]}
                    </div>
                    <div>
                      <div className="font-manrope font-800 text-white text-sm">{t.name}</div>
                      <div className="text-ghost text-xs font-semibold">{t.role}</div>
                    </div>
                    <div className="ml-auto flex gap-0.5">
                      {[...Array(5)].map((_,j)=><span key={j} className="text-[#C8102E] text-xs">★</span>)}
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════ FULL-BLEED CTA ══════════════════════════ */}
      <section className="relative overflow-hidden" style={{minHeight:'520px'}}>
        <div className="absolute inset-0">
          <Image src="/images/gym10.jpg" alt="Join" fill className="object-cover"/>
          <div className="absolute inset-0" style={{background:'linear-gradient(to right, rgba(5,5,5,0.97) 40%, rgba(5,5,5,0.75) 70%, rgba(5,5,5,0.4) 100%)'}}/>
          <div className="absolute inset-0 grid-lines opacity-20"/>
        </div>
        <div className="absolute top-0 left-0 right-0 h-px" style={{background:'linear-gradient(90deg,transparent,rgba(200,16,46,0.5),transparent)'}}/>
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{background:'linear-gradient(90deg,transparent,rgba(200,16,46,0.5),transparent)'}}/>

        <AnimatedSection direction="left" className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-28">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-14 h-14 rounded-xl overflow-hidden border border-white/10">
                <Image src="/images/logo.jpg" alt="King Lion" fill className="object-cover"/>
              </div>
              <div className="section-label">Transform Now</div>
            </div>
            <h2 className="font-bebas leading-none tracking-wide mb-6" style={{fontSize:'clamp(56px,8vw,100px)'}}>
              <span className="text-white block">ARE YOU READY</span>
              <span className="text-stroke-red block">TO BECOME A</span>
              <span className="text-red-gradient text-glow block">CHAMPION?</span>
            </h2>
            <p className="text-soft font-medium text-lg max-w-md leading-relaxed mb-10">
              Join hundreds of members who chose King Lion Gym and never looked back. Your transformation begins with one decision.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/register">
                <motion.button whileHover={{scale:1.03}} whileTap={{scale:0.97}}
                  className="btn-primary px-10 py-4 text-xs tracking-widest">
                  Become a Member
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button whileHover={{scale:1.03}} className="btn-ghost px-10 py-4 text-xs tracking-widest">
                  Get in Touch
                </motion.button>
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </section>

    </div>
  );
}

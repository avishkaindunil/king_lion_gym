'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import AnimatedSection from '../../components/AnimatedSection';

const milestones = [
  { year: '2019', title: 'Founded', desc: 'King Lion Gym opened its doors with a vision to create Sri Lanka\'s most premium fitness destination.' },
  { year: '2020', title: 'Expansion', desc: 'Extended training floor and introduced premium Hammer Strength equipment throughout the entire facility.' },
  { year: '2022', title: 'Elite Trainers', desc: 'Onboarded nationally certified trainers and launched specialized performance training programs.' },
  { year: '2024', title: '500+ Members', desc: 'Reached the milestone of 500+ active members. Our community of champions continues to grow.' },
];

const values = [
  { title: 'Strength', desc: 'We build more than physical strength — we forge mental resilience, determination, and an unbreakable will to succeed.' },
  { title: 'Excellence', desc: 'From our equipment to our training methodologies, we accept nothing less than the absolute best in everything we do.' },
  { title: 'Community', desc: 'Every member is part of the King Lion family. We rise together, push each other, and celebrate every victory together.' },
];

export default function AboutPage() {
  return (
    <div className="bg-[#080808] pt-20">
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[380px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/gym4.jpg" alt="About" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/70 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <motion.div initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8 }}>
            <div className="section-badge mb-4">Our Story</div>
            <h1 className="font-black text-6xl md:text-7xl text-white tracking-tight leading-none">
              ABOUT<br /><span className="gradient-text">KING LION</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute inset-0 radial-red-left" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="section-badge mb-5">Who We Are</div>
              <h2 className="font-black text-4xl md:text-5xl text-white tracking-tight mb-6 leading-tight">
                SRI LANKA'S<br /><span className="gradient-text">FINEST GYM</span>
              </h2>
              <p className="text-[#666] font-medium leading-relaxed mb-5">
                Located in the heart of Negombo, Western Province, King Lion Gym was founded on a powerful belief: every person deserves access to world-class fitness and expert guidance. We refuse to compromise on quality.
              </p>
              <p className="text-[#666] font-medium leading-relaxed mb-8">
                Our facility boasts an impressive lineup of premium Hammer Strength equipment — the same machines used by professional athletes around the world. Every element is designed to inspire peak performance.
              </p>
              <div className="flex flex-wrap gap-8">
                {[['500+','Members'],['15+','Trainers'],['5+','Years']].map(([n,l]) => (
                  <div key={l} className="text-center">
                    <p className="font-black text-4xl text-red-600 number-glow">{n}</p>
                    <p className="text-[#555] text-xs font-bold uppercase tracking-wider mt-1">{l}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative">
                <div className="grid grid-cols-2 gap-3">
                  {['/images/gym5.jpg','/images/gym7.jpg','/images/gym9.jpg','/images/gym11.jpg'].map((img,i) => (
                    <div key={i} className={`relative overflow-hidden rounded-xl ${i===0||i===3?'h-60':'h-44'} ${i===1?'mt-8':''} ${i===2?'-mt-8':''}`}>
                      <Image src={img} alt="" fill className="object-cover" />
                      <div className="absolute inset-0 bg-red-900/0 hover:bg-red-900/10 transition-colors duration-300" />
                    </div>
                  ))}
                </div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-xl border-2 border-red-800/20 -z-10" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 relative overflow-hidden" style={{background:'#0A0A0A'}}>
        <div className="absolute inset-0 diagonal-lines opacity-40" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center mb-14">
            <div className="section-badge mx-auto mb-5">What Drives Us</div>
            <h2 className="font-black text-5xl text-white tracking-tight">
              OUR CORE <span className="gradient-text">VALUES</span>
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v,i) => (
              <AnimatedSection key={i} delay={i*0.15} direction="up">
                <motion.div whileHover={{y:-8}}
                  className="rounded-xl bg-[#0F0F0F] border border-white/5 hover:border-red-800/30 p-8 group transition-all duration-500 card-shine relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-red-700 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <div className="w-12 h-12 rounded-xl bg-red-900/20 border border-red-800/20 flex items-center justify-center mb-5">
                    <span className="font-black text-red-600 text-lg">{i+1}</span>
                  </div>
                  <h3 className="font-black text-xl text-white tracking-tight mb-3">{v.title}</h3>
                  <p className="text-[#555] text-sm font-medium leading-relaxed">{v.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center mb-14">
            <div className="section-badge mx-auto mb-5">Our Journey</div>
            <h2 className="font-black text-5xl text-white tracking-tight">
              THE <span className="gradient-text">MILESTONES</span>
            </h2>
          </AnimatedSection>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-red-800/60 via-red-800/20 to-transparent hidden md:block" />
            <div className="space-y-10">
              {milestones.map((m,i) => (
                <AnimatedSection key={i} delay={i*0.1} direction={i%2===0?'left':'right'}>
                  <div className={`flex items-center gap-8 ${i%2===0?'md:flex-row':'md:flex-row-reverse'}`}>
                    <div className={`flex-1 ${i%2===0?'md:text-right':''}`}>
                      <div className="rounded-xl bg-[#0F0F0F] border border-white/5 hover:border-red-800/30 p-6 transition-all duration-400 group">
                        <span className="font-black text-4xl text-red-600 block mb-2 number-glow">{m.year}</span>
                        <h3 className="font-black text-xl text-white mb-2 tracking-tight">{m.title}</h3>
                        <p className="text-[#555] text-sm font-medium leading-relaxed">{m.desc}</p>
                      </div>
                    </div>
                    <div className="hidden md:flex w-3 h-3 bg-red-700 rounded-full flex-shrink-0 relative z-10 shadow-[0_0_16px_rgba(204,0,0,0.7)]" />
                    <div className="flex-1 hidden md:block" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden" style={{background:'#0A0A0A'}}>
        <div className="absolute inset-0">
          <Image src="/images/gym10.jpg" alt="" fill className="object-cover opacity-10" />
          <div className="absolute inset-0 bg-[#0A0A0A]/90" />
        </div>
        <AnimatedSection className="relative z-10 max-w-3xl mx-auto px-6 text-center" direction="scale">
          <div className="relative w-16 h-16 rounded-xl overflow-hidden mx-auto mb-6 border border-red-800/40">
            <Image src="/images/logo.jpg" alt="King Lion" fill className="object-cover" />
          </div>
          <blockquote className="font-black text-3xl md:text-4xl text-white tracking-tight leading-tight mb-8">
            "Our mission is to transform lives. To build not just bodies, but <span className="gradient-text">champions</span> — in the gym and beyond."
          </blockquote>
          <p className="text-[#444] font-semibold mb-10 text-sm">— King Lion Gym, Negombo, Sri Lanka</p>
          <Link href="/register">
            <motion.button whileHover={{ scale: 1.03 }}
              className="btn-primary px-10 py-4 font-black tracking-widest text-sm flex items-center gap-3 mx-auto">
              Join Our Family <FiArrowRight />
            </motion.button>
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}

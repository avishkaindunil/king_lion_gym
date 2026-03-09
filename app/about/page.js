'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import { GiLion, GiWeightLiftingUp, GiMuscularTorso } from 'react-icons/gi';
import AnimatedSection from '../../components/AnimatedSection';

const milestones = [
  { year: '2019', title: 'Founded', desc: 'King Lion Gym opened its doors with a vision to create Sri Lanka\'s most premium fitness destination.' },
  { year: '2020', title: 'Expansion', desc: 'Extended training floor and introduced premium Hammer Strength equipment throughout the facility.' },
  { year: '2022', title: 'Elite Trainers', desc: 'Onboarded nationally certified trainers and launched specialized training programs.' },
  { year: '2024', title: '500+ Members', desc: 'Reached milestone of 500 active members. Community of champions continues to grow.' },
];

const values = [
  { icon: GiLion, title: 'Strength', desc: 'We build more than physical strength. We forge mental resilience, determination, and an unbreakable will.' },
  { icon: GiWeightLiftingUp, title: 'Excellence', desc: 'From equipment to training methodologies, we accept nothing less than the absolute best.' },
  { icon: GiMuscularTorso, title: 'Community', desc: 'Every member is part of the King Lion family. We rise together, we push each other, we celebrate victories together.' },
];

export default function AboutPage() {
  return (
    <div className="bg-[#0A0A0A] pt-20">
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/gym4.jpg" alt="About King Lion Gym" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/70 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="font-body text-[#CC0000] text-xs tracking-[0.4em] uppercase mb-3">Our Story</p>
            <h1 className="font-display font-bold text-6xl md:text-7xl text-white tracking-tight leading-none">
              ABOUT<br /><span className="gradient-text">KING LION</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <p className="font-body text-[#CC0000] text-xs tracking-[0.4em] uppercase mb-4">Who We Are</p>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-white tracking-tight mb-6">
                SRI LANKA'S<br /><span className="gradient-text">FINEST GYM</span>
              </h2>
              <p className="font-body text-[#777] leading-relaxed mb-5">
                Located in the heart of Negombo, Western Province, King Lion Gym was founded on a simple yet powerful belief: every person deserves access to world-class fitness facilities and expert guidance. We refuse to compromise on quality.
              </p>
              <p className="font-body text-[#777] leading-relaxed mb-5">
                Our facility boasts an impressive lineup of premium Hammer Strength equipment — the same machines used by professional athletes around the world. Paired with our expert team of certified trainers, we create an environment where transformation isn't just possible, it's inevitable.
              </p>
              <p className="font-body text-[#777] leading-relaxed mb-8">
                The signature red machines, the motivational murals of legendary bodybuilders like Arnold Schwarzenegger, and the dedicated sprint track — every element is designed to inspire peak performance and ignite your competitive spirit.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="text-center">
                  <p className="font-display font-bold text-4xl text-[#CC0000]">500+</p>
                  <p className="font-body text-[#666] text-xs uppercase tracking-wider mt-1">Members</p>
                </div>
                <div className="w-px bg-white/10" />
                <div className="text-center">
                  <p className="font-display font-bold text-4xl text-[#CC0000]">15+</p>
                  <p className="font-body text-[#666] text-xs uppercase tracking-wider mt-1">Trainers</p>
                </div>
                <div className="w-px bg-white/10" />
                <div className="text-center">
                  <p className="font-display font-bold text-4xl text-[#CC0000]">5+</p>
                  <p className="font-body text-[#666] text-xs uppercase tracking-wider mt-1">Years</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative">
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative h-64 overflow-hidden">
                    <Image src="/images/gym5.jpg" alt="Training" fill className="object-cover" />
                    <div className="absolute inset-0 bg-[#CC0000]/10" />
                  </div>
                  <div className="relative h-64 overflow-hidden mt-8">
                    <Image src="/images/gym7.jpg" alt="Equipment" fill className="object-cover" />
                  </div>
                  <div className="relative h-48 overflow-hidden -mt-8">
                    <Image src="/images/gym9.jpg" alt="Cardio" fill className="object-cover" />
                  </div>
                  <div className="relative h-48 overflow-hidden">
                    <Image src="/images/gym11.jpg" alt="Weights" fill className="object-cover" />
                    <div className="absolute inset-0 bg-[#CC0000]/10" />
                  </div>
                </div>
                {/* Accent box */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-[#CC0000]/30 -z-10" />
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#CC0000]/10 -z-10" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#0D0D0D] relative overflow-hidden">
        <div className="absolute inset-0 diagonal-lines opacity-30" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center mb-14">
            <p className="font-body text-[#CC0000] text-xs tracking-[0.4em] uppercase mb-3">What Drives Us</p>
            <h2 className="font-display font-bold text-5xl text-white tracking-tight">
              OUR CORE <span className="gradient-text">VALUES</span>
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={i} delay={i * 0.15} direction="up">
                <div className="bg-[#111] border border-white/5 p-8 group hover:border-[#CC0000]/30 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#CC0000] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <v.icon className="text-[#CC0000] mb-5 group-hover:scale-110 transition-transform duration-300" size={40} />
                  <h3 className="font-display font-bold text-xl text-white tracking-wide mb-3">{v.title}</h3>
                  <p className="font-body text-[#666] text-sm leading-relaxed">{v.desc}</p>
                </div>
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
            <p className="font-body text-[#CC0000] text-xs tracking-[0.4em] uppercase mb-3">Our Journey</p>
            <h2 className="font-display font-bold text-5xl text-white tracking-tight">
              THE <span className="gradient-text">MILESTONES</span>
            </h2>
          </AnimatedSection>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#CC0000] via-[#CC0000]/30 to-transparent hidden md:block" />
            <div className="space-y-12">
              {milestones.map((m, i) => (
                <AnimatedSection key={i} delay={i * 0.1} direction={i % 2 === 0 ? 'left' : 'right'}>
                  <div className={`flex items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="bg-[#111] border border-white/5 p-6 hover:border-[#CC0000]/30 transition-all duration-500 group">
                        <span className="font-display font-bold text-4xl text-[#CC0000] block mb-2">{m.year}</span>
                        <h3 className="font-display font-semibold text-xl text-white mb-2 tracking-wide">{m.title}</h3>
                        <p className="font-body text-[#666] text-sm leading-relaxed">{m.desc}</p>
                      </div>
                    </div>
                    {/* Center dot */}
                    <div className="hidden md:flex w-4 h-4 bg-[#CC0000] rounded-full flex-shrink-0 relative z-10 shadow-[0_0_12px_rgba(204,0,0,0.6)]" />
                    <div className="flex-1 hidden md:block" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 bg-[#0D0D0D] relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/gym10.jpg" alt="" fill className="object-cover opacity-10" />
          <div className="absolute inset-0 bg-[#0D0D0D]/90" />
        </div>
        <AnimatedSection className="relative z-10 max-w-4xl mx-auto px-6 text-center" direction="scale">
          <GiLion className="text-[#CC0000] mx-auto mb-6 opacity-80" size={56} />
          <blockquote className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight leading-tight mb-8">
            "Our mission is to transform lives through fitness. To build not just bodies, but <span className="gradient-text">champions</span> — in the gym and beyond."
          </blockquote>
          <p className="font-body text-[#666] mb-10">— King Lion Gym, Negombo, Sri Lanka</p>
          <Link href="/register">
            <motion.button whileHover={{ scale: 1.02 }} className="btn-primary px-10 py-4 font-display tracking-widest text-sm flex items-center gap-3 mx-auto">
              Join Our Family <FiArrowRight />
            </motion.button>
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}

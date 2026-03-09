'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiInstagram, FiFacebook, FiAward, FiStar } from 'react-icons/fi';
import AnimatedSection from '../../components/AnimatedSection';
import Link from 'next/link';

const trainers = [
  {
    name: 'Roshan Bandara',
    role: 'Head Coach & Founder',
    specialty: 'Powerlifting & Strength',
    exp: '10+ Years',
    cert: 'NSCA Certified',
    img: '/images/gym5.jpg',
    bio: 'Sri Lanka\'s most decorated strength coach. National powerlifting champion with a passion for elite athlete development.',
    achievements: ['National Champion 2019', 'NSCA-CSCS Certified', 'Former National Team Coach'],
  },
  {
    name: 'Dilini Perera',
    role: 'Senior Fitness Coach',
    specialty: 'Weight Loss & HIIT',
    exp: '7+ Years',
    cert: 'ACE Certified',
    img: '/images/gym10.jpg',
    bio: 'Specializing in body transformation programs, Dilini has helped over 200 members achieve their dream physique.',
    achievements: ['ACE Certified PT', '200+ Client Transformations', 'Nutrition Specialist'],
  },
  {
    name: 'Kamal Jayasinghe',
    role: 'Bodybuilding Coach',
    specialty: 'Hypertrophy & Aesthetics',
    exp: '8+ Years',
    cert: 'ISSA Certified',
    img: '/images/gym3.jpg',
    bio: 'Former competitive bodybuilder turned coach. Kamal\'s scientific approach to muscle building delivers unmatched results.',
    achievements: ['Mr. Western Province 2020', 'ISSA Master Trainer', 'Competition Prep Specialist'],
  },
  {
    name: 'Saman Wickramasinghe',
    role: 'Athletic Performance Coach',
    specialty: 'Speed & Conditioning',
    exp: '6+ Years',
    cert: 'NASM Certified',
    img: '/images/gym8.jpg',
    bio: 'Sports performance expert who works with athletes across multiple disciplines to unlock peak performance.',
    achievements: ['NASM-PES Certified', 'Former National Athlete', 'Sports Rehab Specialist'],
  },
  {
    name: 'Nirosha Silva',
    role: 'Yoga & Flexibility Coach',
    specialty: 'Mobility & Recovery',
    exp: '5+ Years',
    cert: 'RYT-200 Certified',
    img: '/images/gym9.jpg',
    bio: 'Bringing balance to strength training through yoga, mobility work, and mindfulness-based recovery protocols.',
    achievements: ['RYT-200 Yoga Alliance', 'FMS Certified', '5-Star Client Rating'],
  },
  {
    name: 'Pradeep Fernando',
    role: 'Cardio & CrossFit Coach',
    specialty: 'Endurance & Functional Fitness',
    exp: '5+ Years',
    cert: 'CrossFit L2',
    img: '/images/gym7.jpg',
    bio: 'Endurance athlete and CrossFit enthusiast who brings high energy and motivation to every training session.',
    achievements: ['CrossFit L2 Trainer', 'Marathon Finisher', 'HIIT Specialist'],
  },
];

export default function TeamPage() {
  return (
    <div className="bg-[#0A0A0A] pt-20">
      {/* Hero */}
      <section className="relative h-[45vh] min-h-[320px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/gym8.jpg" alt="Our Team" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="font-body text-[#CC0000] text-xs tracking-[0.4em] uppercase mb-3">The Lions Behind the Gym</p>
            <h1 className="font-display font-bold text-6xl md:text-7xl text-white tracking-tight leading-none">
              OUR <span className="gradient-text">TEAM</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <p className="font-body text-[#CC0000] text-xs tracking-[0.4em] uppercase mb-4">Elite Professionals</p>
            <h2 className="font-display font-bold text-4xl text-white tracking-tight mb-5">
              MEET YOUR <span className="gradient-text">COACHES</span>
            </h2>
            <p className="font-body text-[#666] leading-relaxed">
              Our trainers are among Sri Lanka's most qualified fitness professionals. Each one brings a unique expertise and a relentless passion for helping you achieve your goals.
            </p>
          </AnimatedSection>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.map((trainer, i) => (
              <AnimatedSection key={i} delay={i * 0.1} direction="up">
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group bg-[#111] border border-white/5 overflow-hidden hover:border-[#CC0000]/30 transition-all duration-500"
                >
                  {/* Photo */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={trainer.img}
                      alt={trainer.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
                    {/* Certification badge */}
                    <div className="absolute top-3 right-3 bg-[#CC0000] px-2 py-1">
                      <span className="font-display text-white text-xs tracking-wider">{trainer.cert}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-display font-bold text-xl text-white tracking-wide">{trainer.name}</h3>
                        <p className="font-body text-[#CC0000] text-xs tracking-widest uppercase mt-0.5">{trainer.role}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-display font-bold text-white text-sm">{trainer.exp}</p>
                        <p className="font-body text-[#555] text-xs">Experience</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                      <FiStar className="text-[#CC0000]" size={12} />
                      <span className="font-body text-[#777] text-xs tracking-wider uppercase">{trainer.specialty}</span>
                    </div>

                    <p className="font-body text-[#666] text-sm leading-relaxed mb-5">{trainer.bio}</p>

                    {/* Achievements */}
                    <div className="space-y-1.5 mb-5">
                      {trainer.achievements.map((ach, j) => (
                        <div key={j} className="flex items-center gap-2 text-xs">
                          <FiAward className="text-[#CC0000] flex-shrink-0" size={12} />
                          <span className="font-body text-[#555]">{ach}</span>
                        </div>
                      ))}
                    </div>

                    {/* Social */}
                    <div className="flex gap-2 pt-4 border-t border-white/5">
                      {[FiInstagram, FiFacebook].map((Icon, j) => (
                        <a
                          key={j}
                          href="#"
                          className="w-8 h-8 border border-white/10 flex items-center justify-center text-[#555] hover:text-white hover:border-[#CC0000] hover:bg-[#CC0000]/10 transition-all duration-300"
                        >
                          <Icon size={14} />
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Bottom red line */}
                  <div className="h-0.5 bg-gradient-to-r from-[#CC0000] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-20 bg-[#0D0D0D] relative overflow-hidden">
        <div className="absolute inset-0 diagonal-lines opacity-20" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#CC0000]/30 to-transparent" />
        <AnimatedSection className="relative z-10 max-w-4xl mx-auto px-6 text-center" direction="scale">
          <p className="font-body text-[#CC0000] text-xs tracking-[0.4em] uppercase mb-4">We're Growing</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white tracking-tight mb-5">
            JOIN OUR <span className="gradient-text">COACHING TEAM</span>
          </h2>
          <p className="font-body text-[#666] max-w-xl mx-auto mb-8">
            Are you a certified fitness professional passionate about transforming lives? King Lion Gym is always looking for elite trainers to join our pride.
          </p>
          <Link href="/contact">
            <motion.button whileHover={{ scale: 1.02 }} className="btn-primary px-10 py-4 font-display tracking-widest text-sm">
              Apply to Coach
            </motion.button>
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}

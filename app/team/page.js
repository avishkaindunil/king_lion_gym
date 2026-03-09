'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiInstagram, FiFacebook, FiAward, FiStar } from 'react-icons/fi';
import AnimatedSection from '../../components/AnimatedSection';

const trainers = [
  { name:'Roshan Bandara', role:'Head Coach & Founder', spec:'Powerlifting & Strength', exp:'10+ Yrs', cert:'NSCA Certified', img:'/images/gym5.jpg', bio:"Sri Lanka's most decorated strength coach. National powerlifting champion with a passion for elite athlete development.", ach:['National Champion 2019','NSCA-CSCS Certified','Former National Team Coach'] },
  { name:'Dilini Perera', role:'Senior Fitness Coach', spec:'Weight Loss & HIIT', exp:'7+ Yrs', cert:'ACE Certified', img:'/images/gym10.jpg', bio:'Specializing in body transformation programs, Dilini has helped over 200 members achieve their dream physique.', ach:['ACE Certified PT','200+ Transformations','Nutrition Specialist'] },
  { name:'Kamal Jayasinghe', role:'Bodybuilding Coach', spec:'Hypertrophy & Aesthetics', exp:'8+ Yrs', cert:'ISSA Certified', img:'/images/gym3.jpg', bio:"Former competitive bodybuilder turned coach. Kamal's scientific approach to muscle building delivers unmatched results.", ach:['Mr. Western Province 2020','ISSA Master Trainer','Competition Prep Specialist'] },
  { name:'Saman Wickramasinghe', role:'Athletic Performance', spec:'Speed & Conditioning', exp:'6+ Yrs', cert:'NASM Certified', img:'/images/gym8.jpg', bio:'Sports performance expert who works with athletes across multiple disciplines to unlock peak potential.', ach:['NASM-PES Certified','Former National Athlete','Sports Rehab Specialist'] },
  { name:'Nirosha Silva', role:'Yoga & Mobility Coach', spec:'Flexibility & Recovery', exp:'5+ Yrs', cert:'RYT-200', img:'/images/gym9.jpg', bio:'Bringing balance to strength training through yoga, mobility work, and mindfulness-based recovery protocols.', ach:['RYT-200 Yoga Alliance','FMS Certified','5-Star Rated'] },
  { name:'Pradeep Fernando', role:'Cardio & CrossFit Coach', spec:'Endurance & Functional', exp:'5+ Yrs', cert:'CrossFit L2', img:'/images/gym7.jpg', bio:'Endurance athlete and CrossFit enthusiast who brings high energy and motivation to every training session.', ach:['CrossFit L2 Trainer','Marathon Finisher','HIIT Specialist'] },
];

export default function TeamPage() {
  return (
    <div className="bg-[#080808] pt-20">
      <section className="relative h-[45vh] min-h-[300px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/gym8.jpg" alt="Our Team" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/70 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-14 w-full">
          <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:0.8}}>
            <div className="section-badge mb-4">The Lions</div>
            <h1 className="font-black text-6xl md:text-7xl text-white tracking-tight leading-none">
              OUR <span className="gradient-text">TEAM</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center max-w-xl mx-auto mb-14">
            <div className="section-badge mx-auto mb-5">Elite Professionals</div>
            <h2 className="font-black text-4xl text-white tracking-tight mb-4">
              MEET YOUR <span className="gradient-text">COACHES</span>
            </h2>
            <p className="text-[#555] font-medium leading-relaxed text-sm">
              Sri Lanka's most qualified fitness professionals. Each brings unique expertise and a relentless passion for helping you achieve your goals.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainers.map((t,i) => (
              <AnimatedSection key={i} delay={i*0.09} direction="up">
                <motion.div whileHover={{y:-8}}
                  className="group rounded-xl bg-[#0F0F0F] border border-white/5 hover:border-red-800/30 overflow-hidden transition-all duration-500 card-shine">
                  <div className="relative h-56 overflow-hidden">
                    <Image src={t.img} alt={t.name} fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-transparent" />
                    <div className="absolute top-3 right-3 rounded-lg bg-red-700 px-2.5 py-1">
                      <span className="text-white text-[9px] font-black tracking-wider">{t.cert}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-black text-lg text-white tracking-tight">{t.name}</h3>
                        <p className="text-red-600 text-xs font-bold tracking-widest uppercase mt-0.5">{t.role}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-black text-white text-sm">{t.exp}</p>
                        <p className="text-[#444] text-xs font-semibold">Experience</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <FiStar className="text-red-700" size={11} />
                      <span className="text-[#555] text-xs font-bold tracking-wider uppercase">{t.spec}</span>
                    </div>
                    <p className="text-[#555] text-sm font-medium leading-relaxed mb-4">{t.bio}</p>
                    <div className="space-y-1.5 mb-5">
                      {t.ach.map((a,j) => (
                        <div key={j} className="flex items-center gap-2">
                          <FiAward className="text-red-700 flex-shrink-0" size={11} />
                          <span className="text-[#444] text-xs font-semibold">{a}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-2 pt-4 border-t border-white/5">
                      {[FiInstagram,FiFacebook].map((Icon,j) => (
                        <a key={j} href="#" className="w-8 h-8 rounded-lg border border-white/8 flex items-center justify-center text-[#444] hover:text-white hover:border-red-700/50 hover:bg-red-900/20 transition-all duration-300">
                          <Icon size={13} />
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="h-px bg-gradient-to-r from-red-700 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden" style={{background:'#0A0A0A'}}>
        <div className="absolute inset-0 diagonal-lines opacity-30" />
        <AnimatedSection className="relative z-10 max-w-3xl mx-auto px-6 text-center" direction="scale">
          <div className="section-badge mx-auto mb-5">We're Growing</div>
          <h2 className="font-black text-4xl md:text-5xl text-white tracking-tight mb-5">
            JOIN OUR <span className="gradient-text">COACHING TEAM</span>
          </h2>
          <p className="text-[#555] font-medium max-w-lg mx-auto mb-8 text-sm">
            Are you a certified fitness professional passionate about transforming lives? King Lion Gym is always looking for elite trainers to join our pride.
          </p>
          <Link href="/contact">
            <motion.button whileHover={{scale:1.03}} className="btn-primary px-10 py-4 font-black tracking-widest text-sm">
              Apply to Coach
            </motion.button>
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}

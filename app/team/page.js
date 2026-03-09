'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiInstagram, FiFacebook, FiArrowUpRight } from 'react-icons/fi';
import AnimatedSection from '../../components/AnimatedSection';

const TEAM=[
  {name:'Roshan Bandara',role:'Head Coach & Founder',spec:'Powerlifting & Strength',exp:'10+ Yrs',img:'/images/gym5.jpg',bio:"Sri Lanka's most decorated strength coach. National powerlifting champion with a passion for elite development.",ach:['National Champion 2019','NSCA-CSCS Certified','Former National Team Coach']},
  {name:'Dilini Perera',role:'Senior Fitness Coach',spec:'Weight Loss & HIIT',exp:'7+ Yrs',img:'/images/gym10.jpg',bio:'Specializing in body transformation. Has helped 200+ members achieve their dream physique.',ach:['ACE Certified PT','200+ Transformations','Nutrition Specialist']},
  {name:'Kamal Jayasinghe',role:'Bodybuilding Coach',spec:'Hypertrophy & Aesthetics',exp:'8+ Yrs',img:'/images/gym3.jpg',bio:"Former competitive bodybuilder turned coach. Scientific approach that delivers unmatched results.",ach:['Mr. Western Province 2020','ISSA Master Trainer','Competition Prep']},
  {name:'Saman Wickramasinghe',role:'Athletic Performance',spec:'Speed & Conditioning',exp:'6+ Yrs',img:'/images/gym8.jpg',bio:'Sports performance expert across multiple disciplines. Unlocks peak athletic potential.',ach:['NASM-PES Certified','Former National Athlete','Sports Rehab']},
  {name:'Nirosha Silva',role:'Yoga & Mobility Coach',spec:'Flexibility & Recovery',exp:'5+ Yrs',img:'/images/gym9.jpg',bio:'Bringing balance to strength training through yoga, mobility work and recovery protocols.',ach:['RYT-200 Yoga Alliance','FMS Certified','5-Star Rated']},
  {name:'Pradeep Fernando',role:'Cardio & CrossFit Coach',spec:'Endurance & Functional',exp:'5+ Yrs',img:'/images/gym7.jpg',bio:'High-energy endurance athlete who brings passion and intensity to every session.',ach:['CrossFit L2 Trainer','Marathon Finisher','HIIT Specialist']},
];

export default function TeamPage(){
  return(
    <div style={{background:'#050505'}} className="pt-20">
      <section className="relative" style={{height:'55vh',minHeight:'360px'}}>
        <div className="absolute inset-0">
          <Image src="/images/gym8.jpg" alt="Team" fill className="object-cover"/>
          <div className="absolute inset-0" style={{background:'linear-gradient(to top,#050505 20%,rgba(5,5,5,0.5) 60%,transparent)'}}/>
          <div className="absolute inset-0" style={{background:'linear-gradient(to right,rgba(5,5,5,0.6) 40%,transparent)'}}/>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 h-full flex items-end pb-16">
          <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:0.8}}>
            <div className="section-label mb-4">The Lions</div>
            <h1 className="font-bebas text-7xl md:text-8xl text-white tracking-wide leading-none">
              OUR <span className="text-red-gradient">TEAM</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-20"/>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <AnimatedSection className="max-w-xl mb-14">
            <div className="section-label mb-4">Elite Professionals</div>
            <h2 className="font-bebas text-6xl md:text-7xl text-white tracking-wide leading-none mb-4">
              MEET YOUR <span className="text-red-gradient">COACHES</span>
            </h2>
            <p className="text-soft font-medium text-sm leading-relaxed">
              Sri Lanka's most qualified fitness professionals. Each brings unique expertise and a relentless passion for your success.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {TEAM.map((t,i)=>(
              <AnimatedSection key={i} delay={i*0.09} direction="up">
                <motion.div whileHover={{y:-8}} className="card-dark group overflow-hidden">
                  <div className="relative h-56 overflow-hidden">
                    <Image src={t.img} alt={t.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent"/>
                    <div className="absolute inset-0 bg-red-DEFAULT/0 group-hover:bg-red-DEFAULT/8 transition-colors duration-500"/>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-bebas text-2xl text-white tracking-wide leading-tight">{t.name}</h3>
                        <p className="text-[#C8102E] text-[9px] font-bold tracking-[0.2em] uppercase mt-0.5">{t.role}</p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <div className="font-bebas text-2xl text-white">{t.exp}</div>
                        <div className="text-ghost text-[9px] font-semibold uppercase tracking-widest">Exp</div>
                      </div>
                    </div>
                    <div className="text-soft text-[9px] font-bold tracking-[0.2em] uppercase mb-2">✦ {t.spec}</div>
                    <p className="text-soft text-xs font-medium leading-relaxed mb-4">{t.bio}</p>
                    <div className="space-y-1 mb-4">
                      {t.ach.map((a,j)=>(
                        <div key={j} className="flex items-center gap-2 text-[10px]">
                          <span className="text-[#C8102E]">→</span>
                          <span className="text-ghost font-semibold">{a}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-2 pt-4 border-t border-black-4">
                      {[FiInstagram,FiFacebook].map((Icon,j)=>(
                        <a key={j} href="#" className="w-8 h-8 rounded-lg border border-black-4 flex items-center justify-center text-ghost hover:text-white hover:border-red-DEFAULT/40 hover:bg-red-DEFAULT/10 transition-all duration-300">
                          <Icon size={13}/>
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="h-px bg-gradient-to-r from-red-DEFAULT to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"/>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden" style={{background:'var(--black-1)'}}>
        <div className="absolute inset-0 grid-lines opacity-20"/>
        <AnimatedSection direction="scale" className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <div className="section-label justify-center mb-5">We're Growing</div>
          <h2 className="font-bebas text-5xl md:text-6xl text-white tracking-wide mb-5">
            JOIN OUR <span className="text-red-gradient">COACHING TEAM</span>
          </h2>
          <p className="text-soft font-medium max-w-lg mx-auto mb-8 text-sm">Are you a certified professional passionate about transforming lives? King Lion is looking for elite coaches.</p>
          <Link href="/contact">
            <motion.button whileHover={{scale:1.03}} className="btn-primary px-10 py-4 text-xs tracking-widest flex items-center gap-2 mx-auto">
              Apply to Coach <FiArrowUpRight size={14}/>
            </motion.button>
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}

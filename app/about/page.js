'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import AnimatedSection from '../../components/AnimatedSection';

const milestones=[
  {year:'2019',title:'Founded',desc:"King Lion Gym opened its doors with one vision — create Sri Lanka's most premium fitness destination."},
  {year:'2020',title:'Expansion',desc:'Extended training floor and introduced premium Hammer Strength equipment throughout the facility.'},
  {year:'2022',title:'Elite Trainers',desc:'Onboarded nationally certified trainers and launched specialized performance training programs.'},
  {year:'2024',title:'500+ Members',desc:'Reached the milestone of 500+ active members. Our community of champions continues to grow daily.'},
];

export default function AboutPage(){
  return(
    <div style={{background:'#050505'}} className="pt-20">
      {/* Hero */}
      <section className="relative" style={{height:'60vh',minHeight:'400px'}}>
        <div className="absolute inset-0">
          <Image src="/images/gym4.jpg" alt="About" fill className="object-cover"/>
          <div className="absolute inset-0" style={{background:'linear-gradient(to top, #050505 20%, rgba(5,5,5,0.5) 60%, transparent)'}}/>
          <div className="absolute inset-0" style={{background:'linear-gradient(to right, rgba(5,5,5,0.7) 40%, transparent)'}}/>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 h-full flex items-end pb-16">
          <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:0.8}}>
            <div className="section-label mb-4">Our Story</div>
            <h1 className="font-bebas text-7xl md:text-8xl text-white tracking-wide leading-none">
              ABOUT<br/><span className="text-red-gradient">KING LION</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-20"/>
        <div className="absolute inset-0 radial-top-right pointer-events-none"/>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <AnimatedSection direction="left">
              <div className="section-label mb-5">Who We Are</div>
              <h2 className="font-bebas text-6xl md:text-7xl text-white tracking-wide leading-none mb-6">
                SRI LANKA'S<br/><span className="text-red-gradient">FINEST GYM</span>
              </h2>
              <p className="text-soft font-medium leading-relaxed mb-5 text-[15px]">
                Located in the heart of Akuressa, Western Province, King Lion Gym was founded on a powerful belief — every person deserves access to world-class fitness and expert guidance. We refuse to compromise on quality.
              </p>
              <p className="text-soft font-medium leading-relaxed mb-8 text-[15px]">
                Our facility features premium Hammer Strength equipment — the same machines used by professional athletes worldwide. From signature red machines to motivational murals of legendary champions, every element is designed to inspire peak performance.
              </p>
              <div className="flex gap-10 py-6 border-t border-b border-black-4">
                {[['500+','Members'],['15+','Trainers'],['5+','Years']].map(([n,l])=>(
                  <div key={l}><div className="font-bebas text-5xl text-[#C8102E] leading-none">{n}</div>
                  <div className="text-soft text-xs font-bold tracking-[0.2em] uppercase mt-1">{l}</div></div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.15}>
              <div className="relative">
                <div className="absolute -top-6 -left-4 font-bebas text-[8rem] text-[#C8102E]/[0.05] leading-none select-none">01</div>
                <div className="grid grid-cols-2 gap-3">
                  {['/images/gym5.jpg','/images/gym7.jpg','/images/gym9.jpg','/images/gym11.jpg'].map((src,i)=>(
                    <div key={i} className={`relative rounded-xl overflow-hidden ${i===0||i===3?'h-64':'h-44'} ${i===1?'mt-10':''} ${i===2?'-mt-10':''}`}>
                      <Image src={src} alt="" fill className="object-cover hover:scale-105 transition-transform duration-500"/>
                    </div>
                  ))}
                </div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-xl border border-black-4 -z-10"/>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 relative overflow-hidden" style={{background:'var(--black-1)'}}>
        <div className="absolute inset-0 grid-lines opacity-20"/>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <div className="section-label justify-center mb-5">What Drives Us</div>
            <h2 className="font-bebas text-6xl md:text-7xl text-white tracking-wide">
              OUR CORE <span className="text-red-gradient">VALUES</span>
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {n:'01',t:'Strength',d:"We build more than physical strength — we forge mental resilience, determination, and an unbreakable will."},
              {n:'02',t:'Excellence',d:"From our equipment to our training methods, we accept nothing less than the absolute best in everything."},
              {n:'03',t:'Community',d:"Every member is part of the King Lion family. We rise together, push each other, and celebrate every victory."},
            ].map((v,i)=>(
              <AnimatedSection key={i} delay={i*0.12} direction="up">
                <motion.div whileHover={{y:-8}} className="card-dark p-8 group relative overflow-hidden hover-lift">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-DEFAULT/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"/>
                  <div className="font-bebas text-6xl text-[#C8102E]/10 leading-none mb-4">{v.n}</div>
                  <h3 className="font-bebas text-3xl text-white tracking-wide mb-3">{v.t}</h3>
                  <p className="text-soft text-sm font-medium leading-relaxed">{v.d}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-20"/>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <AnimatedSection className="mb-16">
            <div className="section-label mb-5">Our Journey</div>
            <h2 className="font-bebas text-6xl md:text-7xl text-white tracking-wide">
              THE <span className="text-red-gradient">MILESTONES</span>
            </h2>
          </AnimatedSection>
          <div className="relative">
            <div className="absolute left-[5%] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#C8102E]/40 via-[#C8102E]/15 to-transparent"/>
            <div className="space-y-10">
              {milestones.map((m,i)=>(
                <AnimatedSection key={i} delay={i*0.1} direction={i%2===0?'left':'right'}>
                  <div className={`flex items-center gap-8 ${i%2===0?'md:flex-row':'md:flex-row-reverse'}`}>
                    <div className="flex-1">
                      <div className="card-dark p-7 group">
                        <div className="font-bebas text-5xl text-[#C8102E] leading-none mb-2">{m.year}</div>
                        <h3 className="font-bebas text-2xl text-white tracking-wide mb-2">{m.title}</h3>
                        <p className="text-soft text-sm font-medium leading-relaxed">{m.desc}</p>
                      </div>
                    </div>
                    <div className="hidden md:flex w-2.5 h-2.5 bg-[#C8102E] rounded-full flex-shrink-0 z-10" style={{boxShadow:'0 0 16px rgba(200,16,46,0.8)'}}/>
                    <div className="flex-1 hidden md:block"/>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden" style={{background:'var(--black-1)'}}>
        <div className="absolute inset-0">
          <Image src="/images/gym10.jpg" alt="" fill className="object-cover opacity-10"/>
          <div className="absolute inset-0" style={{background:'rgba(10,10,10,0.92)'}}/>
        </div>
        <AnimatedSection direction="scale" className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <div className="relative w-16 h-16 rounded-xl overflow-hidden mx-auto mb-7 border border-white/10">
            <Image src="/images/logo.jpg" alt="KLG" fill className="object-cover"/>
          </div>
          <h2 className="font-bebas text-5xl md:text-6xl text-white tracking-wide mb-6 leading-tight">
            "OUR MISSION IS TO BUILD <span className="text-red-gradient">CHAMPIONS</span> — IN THE GYM AND BEYOND"
          </h2>
          <p className="text-ghost font-semibold mb-10 text-sm tracking-wider uppercase">— King Lion Gym, Akuressa, Sri Lanka</p>
          <Link href="/register">
            <motion.button whileHover={{scale:1.03}} className="btn-primary px-10 py-4 text-xs tracking-widest flex items-center gap-2 mx-auto">
              Join Our Family <FiArrowUpRight size={14}/>
            </motion.button>
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}

'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheckCircle, FiArrowUpRight } from 'react-icons/fi';
import AnimatedSection from '../../components/AnimatedSection';

const PLANS=[
  {name:'Cub',price:'3,500',unit:'LKR/mo',icon:'🐾',desc:'Perfect entry into premium fitness.',
   feats:['Full Gym Access','Basic Equipment','Locker Access','1 Orientation Session','Standard Hours'],ex:['Personal Training','Nutrition Plan','Priority Booking'],hot:false},
  {name:'Lion',price:'6,500',unit:'LKR/mo',icon:'🦁',desc:'Our most popular all-round plan.',
   feats:['Full Gym Access','All Equipment','Locker Access','4 PT Sessions/Month','Extended Hours','Nutrition Consult','Progress Tracking'],ex:['Priority Booking'],hot:true,badge:'Most Popular'},
  {name:'King',price:'12,000',unit:'LKR/mo',icon:'👑',desc:'Elite access for the serious athlete.',
   feats:['24/7 Gym Access','All Equipment','Premium Locker','Unlimited PT Sessions','Custom Nutrition Plan','Priority Booking','Body Composition Analysis','Dedicated Coach'],ex:[],hot:false,badge:'Elite'},
];
const GOALS=['Lose Weight','Build Muscle','Improve Endurance','Get Stronger','Sports Performance','General Fitness'];
const LEVELS=['Complete Beginner','Some Experience','Intermediate','Advanced'];

export default function RegisterPage(){
  const [plan,setPlan]=useState('Lion');
  const [step,setStep]=useState(1);
  const [done,setDone]=useState(false);
  const [form,setForm]=useState({firstName:'',lastName:'',email:'',phone:'',dob:'',gender:'',goal:'',level:'',notes:''});
  const ch=e=>setForm(p=>({...p,[e.target.name]:e.target.value}));

  return(
    <div style={{background:'#050505'}} className="pt-20">
      <section className="relative" style={{height:'50vh',minHeight:'320px'}}>
        <div className="absolute inset-0">
          <Image src="/images/gym2.jpg" alt="Register" fill className="object-cover"/>
          <div className="absolute inset-0" style={{background:'linear-gradient(to top,#050505 20%,rgba(5,5,5,0.55) 60%,transparent)'}}/>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 h-full flex items-end pb-16">
          <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:0.8}}>
            <div className="section-label mb-4">Begin Your Journey</div>
            <h1 className="font-bebas text-7xl md:text-8xl text-white tracking-wide leading-none">
              JOIN <span className="text-red-gradient">THE PRIDE</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-20"/>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <AnimatedSection className="mb-14">
            <div className="section-label mb-4">Choose Your Path</div>
            <h2 className="font-bebas text-6xl md:text-7xl text-white tracking-wide leading-none">
              MEMBERSHIP <span className="text-red-gradient">PLANS</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-5 mb-16">
            {PLANS.map((p,i)=>(
              <AnimatedSection key={i} delay={i*0.1} direction="up">
                <motion.div whileHover={{y:-6}} onClick={()=>setPlan(p.name)}
                  className={`relative cursor-pointer card-dark p-7 transition-all duration-400 ${plan===p.name?'border-red-DEFAULT/50 bg-red-DEFAULT/[0.03]':''}`}>
                  {p.badge&&<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C8102E] rounded-md px-3 py-0.5 font-manrope font-800 text-[9px] text-white tracking-widest uppercase">{p.badge}</div>}
                  {plan===p.name&&<div className="absolute top-4 right-4"><FiCheckCircle className="text-[#C8102E]" size={15}/></div>}
                  <div className="text-3xl mb-4">{p.icon}</div>
                  <h3 className="font-bebas text-3xl text-white tracking-wide mb-1">{p.name}</h3>
                  <div className="flex items-end gap-2 mb-2">
                    <span className="font-bebas text-5xl text-white">{p.price}</span>
                    <span className="text-ghost text-xs font-semibold mb-1.5">{p.unit}</span>
                  </div>
                  <p className="text-soft text-xs font-medium mb-5">{p.desc}</p>
                  <div className="space-y-2 mb-6">
                    {p.feats.map((f,j)=>(
                      <div key={j} className="flex items-center gap-2">
                        <FiCheckCircle className="text-[#C8102E] flex-shrink-0" size={10}/>
                        <span className="text-soft text-xs font-semibold">{f}</span>
                      </div>
                    ))}
                    {p.ex.map((f,j)=>(
                      <div key={j} className="flex items-center gap-2 opacity-20">
                        <div className="w-2.5 h-2.5 rounded-sm border border-white/20 flex-shrink-0"/>
                        <span className="text-ghost text-xs font-semibold line-through">{f}</span>
                      </div>
                    ))}
                  </div>
                  <button className={`w-full py-2.5 text-[10px] font-manrope font-800 tracking-widest uppercase rounded-md transition-all duration-300 ${
                    plan===p.name?'bg-[#C8102E] text-white':'border border-black-5 text-soft hover:border-red-DEFAULT/30 hover:text-white'
                  }`}>{plan===p.name?'✓ Selected':'Select Plan'}</button>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection direction="up">
            <div className="max-w-3xl mx-auto card-dark p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 pointer-events-none" style={{background:'radial-gradient(circle at 100% 0%,rgba(200,16,46,0.05),transparent 60%)'}}/>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-2">
                  <div className="section-label">Step {step} of 2</div>
                  <span className="text-soft text-[10px] font-bold tracking-widest uppercase">Plan: <span className="text-[#C8102E]">{plan}</span></span>
                </div>
                <h3 className="font-bebas text-3xl text-white tracking-wide mb-5">{step===1?'Personal Information':'Fitness Profile'}</h3>
                <div className="h-0.5 bg-white/[0.04] rounded-full mb-7 overflow-hidden">
                  <motion.div className="h-full bg-[#C8102E] rounded-full" animate={{width:step===1?'50%':'100%'}} transition={{duration:0.5}}/>
                </div>
                <AnimatePresence mode="wait">
                  {!done?(
                    <motion.form key={step} initial={{opacity:0,x:16}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-16}}
                      onSubmit={step===2?(e)=>{e.preventDefault();setDone(true);}:(e)=>{e.preventDefault();setStep(2);}}>
                      {step===1?(
                        <div className="space-y-5">
                          <div className="grid grid-cols-2 gap-4">
                            <div><label className="block text-[10px] text-soft mb-1.5 font-bold tracking-[0.2em] uppercase">First Name *</label>
                              <input type="text" name="firstName" value={form.firstName} onChange={ch} required placeholder="First" className="input-dark w-full px-4 py-3 text-sm"/></div>
                            <div><label className="block text-[10px] text-soft mb-1.5 font-bold tracking-[0.2em] uppercase">Last Name *</label>
                              <input type="text" name="lastName" value={form.lastName} onChange={ch} required placeholder="Last" className="input-dark w-full px-4 py-3 text-sm"/></div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div><label className="block text-[10px] text-soft mb-1.5 font-bold tracking-[0.2em] uppercase">Email *</label>
                              <input type="email" name="email" value={form.email} onChange={ch} required placeholder="you@email.com" className="input-dark w-full px-4 py-3 text-sm"/></div>
                            <div><label className="block text-[10px] text-soft mb-1.5 font-bold tracking-[0.2em] uppercase">Phone *</label>
                              <input type="tel" name="phone" value={form.phone} onChange={ch} required placeholder="+94 XX XXX XXXX" className="input-dark w-full px-4 py-3 text-sm"/></div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div><label className="block text-[10px] text-soft mb-1.5 font-bold tracking-[0.2em] uppercase">Date of Birth</label>
                              <input type="date" name="dob" value={form.dob} onChange={ch} className="input-dark w-full px-4 py-3 text-sm"/></div>
                            <div><label className="block text-[10px] text-soft mb-1.5 font-bold tracking-[0.2em] uppercase">Gender</label>
                              <select name="gender" value={form.gender} onChange={ch} className="input-dark w-full px-4 py-3 text-sm">
                                <option value="">Select</option>
                                {['Male','Female','Other'].map(g=><option key={g}>{g}</option>)}
                              </select></div>
                          </div>
                          <motion.button type="submit" whileTap={{scale:0.97}} className="btn-primary w-full py-3.5 text-xs tracking-widest flex items-center justify-center gap-2">
                            Continue <FiArrowUpRight size={13}/>
                          </motion.button>
                        </div>
                      ):(
                        <div className="space-y-5">
                          <div>
                            <label className="block text-[10px] text-soft mb-3 font-bold tracking-[0.2em] uppercase">Primary Goal</label>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                              {GOALS.map(g=>(
                                <button key={g} type="button" onClick={()=>setForm(p=>({...p,goal:g}))}
                                  className={`py-2.5 px-3 text-[10px] font-manrope font-800 tracking-widest uppercase rounded-md transition-all duration-300 ${
                                    form.goal===g?'bg-[#C8102E] text-white':'border border-black-4 text-soft hover:border-red-DEFAULT/30 hover:text-white'
                                  }`}>{g}</button>
                              ))}
                            </div>
                          </div>
                          <div>
                            <label className="block text-[10px] text-soft mb-3 font-bold tracking-[0.2em] uppercase">Fitness Level</label>
                            <div className="grid grid-cols-2 gap-2">
                              {LEVELS.map(l=>(
                                <button key={l} type="button" onClick={()=>setForm(p=>({...p,level:l}))}
                                  className={`py-2.5 px-3 text-[10px] font-manrope font-800 tracking-widest uppercase rounded-md transition-all duration-300 ${
                                    form.level===l?'bg-[#C8102E] text-white':'border border-black-4 text-soft hover:border-red-DEFAULT/30 hover:text-white'
                                  }`}>{l}</button>
                              ))}
                            </div>
                          </div>
                          <div><label className="block text-[10px] text-soft mb-1.5 font-bold tracking-[0.2em] uppercase">Medical Notes (optional)</label>
                            <textarea name="notes" value={form.notes} onChange={ch} rows={3} placeholder="Any injuries or conditions..." className="input-dark w-full px-4 py-3 text-sm resize-none"/></div>
                          <div className="flex gap-3">
                            <button type="button" onClick={()=>setStep(1)} className="btn-ghost px-5 py-3 text-xs tracking-widest">Back</button>
                            <motion.button type="submit" whileTap={{scale:0.97}} className="btn-primary flex-1 py-3 text-xs tracking-widest">Submit Registration</motion.button>
                          </div>
                        </div>
                      )}
                    </motion.form>
                  ):(
                    <motion.div key="done" initial={{opacity:0,scale:0.9}} animate={{opacity:1,scale:1}} className="text-center py-12">
                      <div className="relative w-16 h-16 rounded-2xl overflow-hidden mx-auto mb-5 border border-white/10">
                        <Image src="/images/logo.jpg" alt="KLG" fill className="object-cover"/>
                      </div>
                      <h4 className="font-bebas text-4xl text-white tracking-wide mb-3">Welcome, Champion!</h4>
                      <p className="text-soft font-medium mb-2">Thank you, <span className="text-white font-bold">{form.firstName}</span>! Your <span className="text-[#C8102E] font-bold">{plan} Plan</span> is received.</p>
                      <p className="text-ghost text-xs font-semibold mb-8">We'll contact you at <span className="text-[#C8102E]">{form.email}</span> within 24 hours.</p>
                      <div className="w-12 h-px bg-[#C8102E] mx-auto"/>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

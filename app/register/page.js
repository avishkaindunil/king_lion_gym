'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheckCircle, FiStar, FiShield, FiArrowRight } from 'react-icons/fi';
import AnimatedSection from '../../components/AnimatedSection';

const plans = [
  { name:'Cub', price:'3,500', period:'LKR/month', desc:'Perfect entry into premium fitness.', icon:'🐾',
    features:['Full Gym Access','Basic Equipment','Locker Access','1 Orientation Session','Standard Hours'],
    ex:['Personal Training','Nutrition Plan','Priority Booking'], hot:false },
  { name:'Lion', price:'6,500', period:'LKR/month', desc:'Our most popular all-round plan.', icon:'🦁',
    features:['Full Gym Access','All Equipment','Locker Access','4 PT Sessions/Month','Extended Hours','Nutrition Consult','Progress Tracking'],
    ex:['Priority Booking'], hot:true, badge:'Most Popular' },
  { name:'King', price:'12,000', period:'LKR/month', desc:'Elite access for the serious athlete.', icon:'👑',
    features:['24/7 Gym Access','All Equipment','Premium Locker','Unlimited PT Sessions','Custom Nutrition','Priority Booking','Body Composition Analysis','Dedicated Coach'],
    ex:[], hot:false, badge:'Elite' },
];

const goals = ['Lose Weight','Build Muscle','Improve Endurance','Get Stronger','Sports Performance','General Fitness'];
const levels = ['Complete Beginner','Some Experience','Intermediate','Advanced'];

export default function RegisterPage() {
  const [plan, setPlan] = useState('Lion');
  const [step, setStep] = useState(1);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({firstName:'',lastName:'',email:'',phone:'',dob:'',gender:'',goal:'',level:'',notes:''});
  const ch = e => setForm(p=>({...p,[e.target.name]:e.target.value}));

  return (
    <div className="bg-[#080808] pt-20">
      <section className="relative h-[42vh] min-h-[280px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/gym2.jpg" alt="Register" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/70 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-14 w-full">
          <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:0.8}}>
            <div className="section-badge mb-4">Begin Your Journey</div>
            <h1 className="font-black text-6xl md:text-7xl text-white tracking-tight leading-none">
              JOIN <span className="gradient-text">THE PRIDE</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center mb-14">
            <div className="section-badge mx-auto mb-5">Choose Your Path</div>
            <h2 className="font-black text-5xl text-white tracking-tight mb-4">
              MEMBERSHIP <span className="gradient-text">PLANS</span>
            </h2>
            <p className="text-[#555] font-medium text-sm max-w-lg mx-auto">Flexible plans designed to fit your goals and budget.</p>
          </AnimatedSection>

          {/* Plans */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {plans.map((p,i) => (
              <AnimatedSection key={i} delay={i*0.12} direction="up">
                <motion.div whileHover={{y:-6}} onClick={()=>setPlan(p.name)}
                  className={`relative cursor-pointer rounded-xl border p-7 transition-all duration-500 ${
                    plan===p.name ? 'border-red-700 bg-red-900/5 shadow-red' :
                    p.hot ? 'border-red-800/30 bg-[#0F0F0F]' : 'border-white/5 bg-[#0F0F0F] hover:border-white/10'
                  }`}>
                  {p.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-700 rounded-md px-3 py-1 text-[9px] font-black text-white tracking-widest uppercase">
                      {p.badge}
                    </div>
                  )}
                  {plan===p.name && <div className="absolute top-4 right-4"><FiCheckCircle className="text-red-600" size={16}/></div>}

                  <div className="text-3xl mb-3">{p.icon}</div>
                  <h3 className="font-black text-2xl text-white tracking-tight mb-1">{p.name}</h3>
                  <div className="flex items-end gap-2 mb-2">
                    <span className="font-black text-4xl text-white">{p.price}</span>
                    <span className="text-[#444] text-xs font-bold mb-1.5">{p.period}</span>
                  </div>
                  <p className="text-[#555] text-xs font-semibold mb-5">{p.desc}</p>

                  <div className="space-y-2 mb-6">
                    {p.features.map((f,j) => (
                      <div key={j} className="flex items-center gap-2.5 text-xs">
                        <div className="w-4 h-4 rounded-md bg-red-900/30 border border-red-800/30 flex items-center justify-center flex-shrink-0">
                          <FiCheckCircle className="text-red-600" size={9}/>
                        </div>
                        <span className="text-[#777] font-semibold">{f}</span>
                      </div>
                    ))}
                    {p.ex.map((f,j) => (
                      <div key={j} className="flex items-center gap-2.5 text-xs opacity-25">
                        <div className="w-4 h-4 rounded-md border border-white/10 flex-shrink-0"/>
                        <span className="text-[#444] font-semibold line-through">{f}</span>
                      </div>
                    ))}
                  </div>

                  <button className={`w-full py-2.5 text-xs font-black tracking-widest uppercase rounded-lg transition-all duration-300 ${
                    plan===p.name ? 'bg-red-700 text-white' : 'border border-white/10 text-[#555] hover:border-red-700/40 hover:text-white'
                  }`}>
                    {plan===p.name ? '✓ Selected' : 'Select Plan'}
                  </button>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          {/* Registration Form */}
          <AnimatedSection direction="up">
            <div className="max-w-3xl mx-auto rounded-xl bg-[#0F0F0F] border border-white/5 p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-[0.04]"
                style={{background:'radial-gradient(circle,#CC0000,transparent)',transform:'translate(30%,-30%)'}}/>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-2">
                  <div className="section-badge">Step {step} of 2</div>
                  <span className="text-[#555] text-xs font-black">
                    Plan: <span className="text-red-600">{plan}</span>
                  </span>
                </div>
                <h3 className="font-black text-2xl text-white tracking-tight mb-5">
                  {step===1?'Personal Information':'Fitness Profile'}
                </h3>
                {/* Progress */}
                <div className="h-1 bg-white/5 rounded-full mb-7 overflow-hidden">
                  <motion.div className="h-full bg-red-700 rounded-full" animate={{width:step===1?'50%':'100%'}} transition={{duration:0.5}}/>
                </div>

                <AnimatePresence mode="wait">
                  {!done ? (
                    <motion.form key={step} initial={{opacity:0,x:20}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-20}}
                      onSubmit={step===2?(e)=>{e.preventDefault();setDone(true);}:(e)=>{e.preventDefault();setStep(2);}}>
                      {step===1 ? (
                        <div className="space-y-5">
                          <div className="grid grid-cols-2 gap-4">
                            <div><label className="block text-xs text-[#555] mb-1.5 font-black tracking-wider uppercase">First Name *</label>
                              <input type="text" name="firstName" value={form.firstName} onChange={ch} required placeholder="First name" className="premium-input w-full px-4 py-3 text-sm"/></div>
                            <div><label className="block text-xs text-[#555] mb-1.5 font-black tracking-wider uppercase">Last Name *</label>
                              <input type="text" name="lastName" value={form.lastName} onChange={ch} required placeholder="Last name" className="premium-input w-full px-4 py-3 text-sm"/></div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div><label className="block text-xs text-[#555] mb-1.5 font-black tracking-wider uppercase">Email *</label>
                              <input type="email" name="email" value={form.email} onChange={ch} required placeholder="your@email.com" className="premium-input w-full px-4 py-3 text-sm"/></div>
                            <div><label className="block text-xs text-[#555] mb-1.5 font-black tracking-wider uppercase">Phone *</label>
                              <input type="tel" name="phone" value={form.phone} onChange={ch} required placeholder="+94 XX XXX XXXX" className="premium-input w-full px-4 py-3 text-sm"/></div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div><label className="block text-xs text-[#555] mb-1.5 font-black tracking-wider uppercase">Date of Birth</label>
                              <input type="date" name="dob" value={form.dob} onChange={ch} className="premium-input w-full px-4 py-3 text-sm"/></div>
                            <div><label className="block text-xs text-[#555] mb-1.5 font-black tracking-wider uppercase">Gender</label>
                              <select name="gender" value={form.gender} onChange={ch} className="premium-input w-full px-4 py-3 text-sm">
                                <option value="">Select</option>
                                {['Male','Female','Other'].map(g=><option key={g} value={g}>{g}</option>)}
                              </select></div>
                          </div>
                          <motion.button type="submit" whileTap={{scale:0.97}} className="btn-primary w-full py-3.5 text-sm font-black tracking-widest flex items-center justify-center gap-3">
                            Continue <FiArrowRight />
                          </motion.button>
                        </div>
                      ) : (
                        <div className="space-y-5">
                          <div>
                            <label className="block text-xs text-[#555] mb-2 font-black tracking-wider uppercase">Primary Goal</label>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                              {goals.map(g=>(
                                <button key={g} type="button" onClick={()=>setForm(p=>({...p,goal:g}))}
                                  className={`py-2.5 px-3 text-xs font-black tracking-wider uppercase rounded-lg transition-all duration-300 ${
                                    form.goal===g?'bg-red-700 text-white shadow-red':'border border-white/8 text-[#555] hover:border-red-700/40 hover:text-white'
                                  }`}>{g}</button>
                              ))}
                            </div>
                          </div>
                          <div>
                            <label className="block text-xs text-[#555] mb-2 font-black tracking-wider uppercase">Fitness Level</label>
                            <div className="grid grid-cols-2 gap-2">
                              {levels.map(l=>(
                                <button key={l} type="button" onClick={()=>setForm(p=>({...p,level:l}))}
                                  className={`py-2.5 px-3 text-xs font-black tracking-wider uppercase rounded-lg transition-all duration-300 ${
                                    form.level===l?'bg-red-700 text-white shadow-red':'border border-white/8 text-[#555] hover:border-red-700/40 hover:text-white'
                                  }`}>{l}</button>
                              ))}
                            </div>
                          </div>
                          <div>
                            <label className="block text-xs text-[#555] mb-1.5 font-black tracking-wider uppercase">Medical Notes (optional)</label>
                            <textarea name="notes" value={form.notes} onChange={ch} rows={3}
                              placeholder="Any injuries or medical conditions..." className="premium-input w-full px-4 py-3 text-sm resize-none"/>
                          </div>
                          <div className="flex gap-4">
                            <button type="button" onClick={()=>setStep(1)} className="btn-outline px-6 py-3 text-xs font-black tracking-widest">Back</button>
                            <motion.button type="submit" whileTap={{scale:0.97}} className="btn-primary flex-1 py-3 text-sm font-black tracking-widest">Submit Registration</motion.button>
                          </div>
                        </div>
                      )}
                    </motion.form>
                  ) : (
                    <motion.div key="done" initial={{opacity:0,scale:0.9}} animate={{opacity:1,scale:1}} className="text-center py-10">
                      <div className="relative w-16 h-16 rounded-2xl overflow-hidden mx-auto mb-5 border border-red-800/40">
                        <Image src="/images/logo.jpg" alt="King Lion" fill className="object-cover"/>
                      </div>
                      <h4 className="font-black text-3xl text-white mb-3">Welcome, Champion!</h4>
                      <p className="text-[#555] font-medium mb-2">
                        Thank you, <span className="text-white font-black">{form.firstName}</span>! Your <span className="text-red-600 font-black">{plan} Plan</span> registration is received.
                      </p>
                      <p className="text-[#444] text-sm font-semibold mb-8">
                        We'll contact you at <span className="text-red-600">{form.email}</span> within 24 hours.
                      </p>
                      <div className="w-12 h-0.5 bg-red-700 mx-auto rounded-full"/>
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

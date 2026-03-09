'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSend, FiCheckCircle, FiArrowUpRight } from 'react-icons/fi';
import { HiOutlineLocationMarker,HiOutlinePhone,HiOutlineMail,HiOutlineClock } from 'react-icons/hi';
import { FiInstagram,FiFacebook,FiYoutube } from 'react-icons/fi';
import AnimatedSection from '../../components/AnimatedSection';

const EJS_SVC='YOUR_SERVICE_ID',EJS_TPL='YOUR_TEMPLATE_ID',EJS_KEY='YOUR_PUBLIC_KEY';
const INFO=[
  {Icon:HiOutlineLocationMarker,t:'Location',lines:['King Lion Gym','Negombo, Western Province, Sri Lanka']},
  {Icon:HiOutlinePhone,t:'Phone',lines:['+94 XX XXX XXXX']},
  {Icon:HiOutlineMail,t:'Email',lines:['info@kingliongym.lk']},
  {Icon:HiOutlineClock,t:'Hours',lines:['Mon–Fri: 5AM–11PM','Sat: 6AM–10PM','Sun: 7AM–9PM']},
];

export default function ContactPage(){
  const [form,setForm]=useState({name:'',email:'',phone:'',subject:'',message:''});
  const [status,setStatus]=useState(null);
  const ch=e=>setForm(p=>({...p,[e.target.name]:e.target.value}));
  const submit=async e=>{
    e.preventDefault(); if(!form.name||!form.email||!form.message) return;
    setStatus('sending');
    try{
      const ejs=(await import('@emailjs/browser')).default;
      await ejs.send(EJS_SVC,EJS_TPL,{from_name:form.name,from_email:form.email,phone:form.phone,subject:form.subject||'General',message:form.message},EJS_KEY);
      setStatus('success'); setForm({name:'',email:'',phone:'',subject:'',message:''});
    }catch(err){console.error(err);setStatus('error');}
  };
  return(
    <div style={{background:'#050505'}} className="pt-20">
      <section className="relative" style={{height:'50vh',minHeight:'320px'}}>
        <div className="absolute inset-0">
          <Image src="/images/gym6.jpg" alt="Contact" fill className="object-cover"/>
          <div className="absolute inset-0" style={{background:'linear-gradient(to top,#050505 20%,rgba(5,5,5,0.55) 60%,transparent)'}}/>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 h-full flex items-end pb-16">
          <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:0.8}}>
            <div className="section-label mb-4">Get In Touch</div>
            <h1 className="font-bebas text-7xl md:text-8xl text-white tracking-wide leading-none">
              CONTACT <span className="text-red-gradient">US</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-20"/>
        <div className="absolute inset-0 radial-top-right pointer-events-none"/>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="grid lg:grid-cols-5 gap-14">
            <div className="lg:col-span-2 space-y-4">
              <AnimatedSection direction="left">
                <div className="section-label mb-4">Reach Out</div>
                <h2 className="font-bebas text-5xl text-white tracking-wide mb-5 leading-none">
                  WE'D LOVE TO<br/><span className="text-red-gradient">HEAR FROM YOU</span>
                </h2>
                <p className="text-soft font-medium text-sm leading-relaxed mb-8">
                  Have questions about membership, training, or want to book a tour? Our team is ready.
                </p>
              </AnimatedSection>
              {INFO.map((item,i)=>(
                <AnimatedSection key={i} delay={i*0.08} direction="left">
                  <div className="card-dark p-4 flex items-start gap-4 group">
                    <div className="w-9 h-9 rounded-lg bg-red-DEFAULT/10 border border-red-DEFAULT/15 flex items-center justify-center flex-shrink-0">
                      <item.Icon className="text-[#C8102E]" size={15}/>
                    </div>
                    <div>
                      <p className="font-manrope font-800 text-white text-sm mb-1">{item.t}</p>
                      {item.lines.map((l,j)=><p key={j} className="text-soft text-xs font-medium">{l}</p>)}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
              <AnimatedSection direction="left" delay={0.4}>
                <div className="card-dark p-4">
                  <p className="font-manrope font-800 text-white text-sm mb-3">Follow Us</p>
                  <div className="flex gap-2">
                    {[{Icon:FiInstagram,l:'Instagram'},{Icon:FiFacebook,l:'Facebook'},{Icon:FiYoutube,l:'YouTube'}].map(({Icon,l})=>(
                      <a key={l} href="#" className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-black-4 text-ghost hover:text-white hover:border-red-DEFAULT/40 text-[10px] font-bold tracking-wider uppercase transition-all">
                        <Icon size={12}/>{l}
                      </a>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>

            <div className="lg:col-span-3">
              <AnimatedSection direction="right">
                <div className="card-dark p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 pointer-events-none" style={{background:'radial-gradient(circle at 100% 0%,rgba(200,16,46,0.05),transparent 60%)'}}/>
                  <div className="relative z-10">
                    <div className="section-label mb-3">Send a Message</div>
                    <h3 className="font-bebas text-3xl text-white tracking-wide mb-6">Contact Form</h3>
                    <AnimatePresence mode="wait">
                      {status==='success'?(
                        <motion.div key="ok" initial={{opacity:0,scale:0.9}} animate={{opacity:1,scale:1}} className="text-center py-12">
                          <div className="w-14 h-14 rounded-xl bg-green-900/20 border border-green-800/30 flex items-center justify-center mx-auto mb-4">
                            <FiCheckCircle className="text-green-400" size={26}/>
                          </div>
                          <h4 className="font-bebas text-3xl text-white mb-3 tracking-wide">Message Sent!</h4>
                          <p className="text-soft font-medium mb-6">We'll get back to you within 24 hours.</p>
                          <button onClick={()=>setStatus(null)} className="btn-red-outline px-6 py-2.5 text-xs tracking-widest">← Send Another</button>
                        </motion.div>
                      ):(
                        <motion.form key="form" onSubmit={submit} className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div><label className="block text-[10px] text-soft mb-1.5 font-bold tracking-[0.2em] uppercase">Full Name *</label>
                              <input type="text" name="name" value={form.name} onChange={ch} required placeholder="Your name" className="input-dark w-full px-4 py-3 text-sm"/></div>
                            <div><label className="block text-[10px] text-soft mb-1.5 font-bold tracking-[0.2em] uppercase">Email *</label>
                              <input type="email" name="email" value={form.email} onChange={ch} required placeholder="your@email.com" className="input-dark w-full px-4 py-3 text-sm"/></div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div><label className="block text-[10px] text-soft mb-1.5 font-bold tracking-[0.2em] uppercase">Phone</label>
                              <input type="tel" name="phone" value={form.phone} onChange={ch} placeholder="+94 XX XXX XXXX" className="input-dark w-full px-4 py-3 text-sm"/></div>
                            <div><label className="block text-[10px] text-soft mb-1.5 font-bold tracking-[0.2em] uppercase">Subject</label>
                              <select name="subject" value={form.subject} onChange={ch} className="input-dark w-full px-4 py-3 text-sm">
                                <option value="">Select</option>
                                {['Membership','Personal Training','Group Classes','Facility Tour','Other'].map(o=><option key={o}>{o}</option>)}
                              </select></div>
                          </div>
                          <div><label className="block text-[10px] text-soft mb-1.5 font-bold tracking-[0.2em] uppercase">Message *</label>
                            <textarea name="message" value={form.message} onChange={ch} required rows={5} placeholder="Tell us how we can help..." className="input-dark w-full px-4 py-3 text-sm resize-none"/></div>
                          {status==='error'&&<div className="text-[#C8102E] text-xs font-bold py-2 px-4 rounded-lg border border-red-DEFAULT/20 bg-red-DEFAULT/5">Configure EmailJS to activate sending.</div>}
                          <motion.button type="submit" disabled={status==='sending'} whileTap={{scale:0.97}}
                            className="btn-primary w-full py-4 text-xs font-manrope font-800 tracking-widest flex items-center justify-center gap-2 disabled:opacity-50">
                            {status==='sending'?<><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"/>Sending...</>:<>Send Message <FiSend size={14}/></>}
                          </motion.button>
                        </motion.form>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AnimatedSection>
            <div className="rounded-xl overflow-hidden border border-black-4" style={{height:'360px'}}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.97694440673!2d79.80815085!3d7.2083426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2ef2a6bc4af5b%3A0x2b62e50ce0dfab9e!2sNegombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2s!4v1700000000000"
                width="100%" height="100%" style={{border:0,filter:'grayscale(1) invert(0.9) hue-rotate(180deg)'}}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="King Lion Gym"/>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

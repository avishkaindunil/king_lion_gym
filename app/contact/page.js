'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import { FiInstagram, FiFacebook, FiYoutube } from 'react-icons/fi';
import AnimatedSection from '../../components/AnimatedSection';

// Configure EmailJS: https://www.emailjs.com
const EJS_SERVICE = 'YOUR_SERVICE_ID';
const EJS_TEMPLATE = 'YOUR_TEMPLATE_ID';
const EJS_KEY = 'YOUR_PUBLIC_KEY';

const info = [
  { icon: FiMapPin, title: 'Location', lines: ['King Lion Gym', 'Negombo, Western Province', 'Sri Lanka'] },
  { icon: FiPhone, title: 'Phone', lines: ['+94 XX XXX XXXX'] },
  { icon: FiMail, title: 'Email', lines: ['info@kingliongym.lk'] },
  { icon: FiClock, title: 'Hours', lines: ['Mon–Fri: 5AM–11PM','Sat: 6AM–10PM','Sun: 7AM–9PM'] },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name:'',email:'',phone:'',subject:'',message:'' });
  const [status, setStatus] = useState(null);

  const change = e => setForm(p=>({...p,[e.target.name]:e.target.value}));

  const submit = async e => {
    e.preventDefault();
    if(!form.name||!form.email||!form.message) return;
    setStatus('sending');
    try {
      const emailjs = (await import('@emailjs/browser')).default;
      await emailjs.send(EJS_SERVICE, EJS_TEMPLATE, {
        from_name: form.name, from_email: form.email,
        phone: form.phone, subject: form.subject||'General Inquiry', message: form.message,
      }, EJS_KEY);
      setStatus('success');
      setForm({name:'',email:'',phone:'',subject:'',message:''});
    } catch(err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <div className="bg-[#080808] pt-20">
      <section className="relative h-[42vh] min-h-[280px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/gym6.jpg" alt="Contact" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/70 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-14 w-full">
          <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:0.8}}>
            <div className="section-badge mb-4">Get In Touch</div>
            <h1 className="font-black text-6xl md:text-7xl text-white tracking-tight leading-none">
              CONTACT <span className="gradient-text">US</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Info */}
            <div className="lg:col-span-2 space-y-5">
              <AnimatedSection direction="left">
                <div className="section-badge mb-4">Reach Out</div>
                <h2 className="font-black text-3xl text-white tracking-tight mb-4 leading-tight">
                  WE'D LOVE TO<br /><span className="gradient-text">HEAR FROM YOU</span>
                </h2>
                <p className="text-[#555] font-medium text-sm leading-relaxed mb-7">
                  Have questions about membership, training, or want to visit? Our team is ready to help you start your journey.
                </p>
              </AnimatedSection>
              {info.map((item,i) => (
                <AnimatedSection key={i} delay={i*0.08} direction="left">
                  <div className="rounded-xl bg-[#0F0F0F] border border-white/5 hover:border-red-800/30 p-4 flex items-start gap-4 group transition-all duration-400">
                    <div className="w-9 h-9 rounded-lg bg-red-900/20 border border-red-800/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="text-red-600" size={15} />
                    </div>
                    <div>
                      <p className="font-black text-white text-sm mb-1">{item.title}</p>
                      {item.lines.map((l,j) => <p key={j} className="text-[#555] text-xs font-medium">{l}</p>)}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
              <AnimatedSection direction="left" delay={0.5}>
                <div className="rounded-xl bg-[#0F0F0F] border border-white/5 p-4">
                  <p className="font-black text-white text-sm mb-3">Follow Us</p>
                  <div className="flex gap-2">
                    {[{Icon:FiInstagram,l:'Instagram'},{Icon:FiFacebook,l:'Facebook'},{Icon:FiYoutube,l:'YouTube'}].map(({Icon,l})=>(
                      <a key={l} href="#" className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/8 text-[#555] hover:text-white hover:border-red-700/50 hover:bg-red-900/10 transition-all duration-300 text-xs font-bold">
                        <Icon size={13}/>{l}
                      </a>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <AnimatedSection direction="right">
                <div className="rounded-xl bg-[#0F0F0F] border border-white/5 p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-[0.05]"
                    style={{background:'radial-gradient(circle,#CC0000,transparent)',transform:'translate(30%,-30%)' }} />
                  <div className="relative z-10">
                    <div className="section-badge mb-4">Send a Message</div>
                    <h3 className="font-black text-2xl text-white tracking-tight mb-6">Contact Form</h3>

                    <AnimatePresence mode="wait">
                      {status==='success' ? (
                        <motion.div key="ok" initial={{opacity:0,scale:0.9}} animate={{opacity:1,scale:1}} className="text-center py-12">
                          <div className="w-14 h-14 rounded-xl bg-green-900/20 border border-green-800/30 flex items-center justify-center mx-auto mb-4">
                            <FiCheckCircle className="text-green-400" size={26} />
                          </div>
                          <h4 className="font-black text-2xl text-white mb-3">Message Sent!</h4>
                          <p className="text-[#555] font-medium mb-6">We'll get back to you within 24 hours.</p>
                          <button onClick={()=>setStatus(null)} className="btn-outline px-6 py-2.5 text-xs font-black tracking-widest">
                            Send Another
                          </button>
                        </motion.div>
                      ) : (
                        <motion.form key="form" onSubmit={submit} className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-xs text-[#555] mb-1.5 font-black tracking-wider uppercase">Full Name *</label>
                              <input type="text" name="name" value={form.name} onChange={change} required placeholder="Your name" className="premium-input w-full px-4 py-3 text-sm" />
                            </div>
                            <div>
                              <label className="block text-xs text-[#555] mb-1.5 font-black tracking-wider uppercase">Email *</label>
                              <input type="email" name="email" value={form.email} onChange={change} required placeholder="your@email.com" className="premium-input w-full px-4 py-3 text-sm" />
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-xs text-[#555] mb-1.5 font-black tracking-wider uppercase">Phone</label>
                              <input type="tel" name="phone" value={form.phone} onChange={change} placeholder="+94 XX XXX XXXX" className="premium-input w-full px-4 py-3 text-sm" />
                            </div>
                            <div>
                              <label className="block text-xs text-[#555] mb-1.5 font-black tracking-wider uppercase">Subject</label>
                              <select name="subject" value={form.subject} onChange={change} className="premium-input w-full px-4 py-3 text-sm">
                                <option value="">Select topic</option>
                                {['Membership Inquiry','Personal Training','Group Classes','Facility Tour','Other'].map(o=>(
                                  <option key={o} value={o}>{o}</option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div>
                            <label className="block text-xs text-[#555] mb-1.5 font-black tracking-wider uppercase">Message *</label>
                            <textarea name="message" value={form.message} onChange={change} required rows={5}
                              placeholder="Tell us how we can help..." className="premium-input w-full px-4 py-3 text-sm resize-none" />
                          </div>
                          {status==='error' && (
                            <div className="flex items-center gap-3 text-red-400 text-xs font-bold bg-red-900/10 border border-red-800/20 px-4 py-3 rounded-lg">
                              <FiAlertCircle size={15}/> Configure EmailJS credentials to activate email sending.
                            </div>
                          )}
                          <motion.button type="submit" disabled={status==='sending'} whileTap={{scale:0.97}}
                            className="btn-primary w-full py-4 text-sm font-black tracking-widest flex items-center justify-center gap-3 disabled:opacity-50">
                            {status==='sending'
                              ? <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"/>Sending...</>
                              : <>Send Message <FiSend size={15}/></>}
                          </motion.button>
                          <p className="text-xs text-[#333] font-semibold text-center">
                            Configure EmailJS in <code className="text-red-700">app/contact/page.js</code> to activate.
                          </p>
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

      {/* Map */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="rounded-xl overflow-hidden border border-white/5" style={{height:'360px'}}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.97694440673!2d79.80815085!3d7.2083426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2ef2a6bc4af5b%3A0x2b62e50ce0dfab9e!2sNegombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2s!4v1700000000000"
                width="100%" height="100%" style={{border:0,filter:'grayscale(1) invert(0.9) hue-rotate(180deg)'}}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="King Lion Gym" />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import { FiInstagram, FiFacebook, FiYoutube } from 'react-icons/fi';
import AnimatedSection from '../../components/AnimatedSection';

// ⚠️  Replace these with your actual EmailJS credentials:
// 1. Create a free account at https://www.emailjs.com
// 2. Create a service (e.g. Gmail), email template, and get your public key
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

const contactInfo = [
  {
    icon: FiMapPin,
    title: 'Location',
    lines: ['King Lion Gym', 'Negombo, Western Province', 'Sri Lanka'],
  },
  {
    icon: FiPhone,
    title: 'Phone',
    lines: ['+94 XX XXX XXXX', '+94 XX XXX XXXX'],
  },
  {
    icon: FiMail,
    title: 'Email',
    lines: ['info@kingliongym.lk', 'training@kingliongym.lk'],
  },
  {
    icon: FiClock,
    title: 'Hours',
    lines: ['Mon–Fri: 5AM – 11PM', 'Sat: 6AM – 10PM', 'Sun: 7AM – 9PM'],
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', subject: '', message: '',
  });
  const [status, setStatus] = useState(null); // null | 'sending' | 'success' | 'error'

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('sending');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          subject: form.subject || 'General Inquiry',
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setForm({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

  return (
    <div className="bg-[#0A0A0A] pt-20">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/gym6.jpg" alt="Contact" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="font-body text-[#CC0000] text-xs tracking-[0.4em] uppercase mb-3">Get In Touch</p>
            <h1 className="font-display font-bold text-6xl md:text-7xl text-white tracking-tight leading-none">
              CONTACT <span className="gradient-text">US</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left Info */}
            <div className="lg:col-span-2 space-y-6">
              <AnimatedSection direction="left">
                <p className="font-body text-[#CC0000] text-xs tracking-[0.4em] uppercase mb-2">Reach Out</p>
                <h2 className="font-display font-bold text-3xl text-white tracking-tight mb-5">
                  WE'D LOVE TO<br /><span className="gradient-text">HEAR FROM YOU</span>
                </h2>
                <p className="font-body text-[#666] text-sm leading-relaxed mb-8">
                  Have questions about membership, training programs, or just want to visit? Our team is here to help you start your fitness journey.
                </p>
              </AnimatedSection>

              <div className="grid grid-cols-1 gap-4">
                {contactInfo.map((item, i) => (
                  <AnimatedSection key={i} delay={i * 0.1} direction="left">
                    <div className="bg-[#111] border border-white/5 p-5 flex items-start gap-4 group hover:border-[#CC0000]/30 transition-all duration-400">
                      <div className="w-10 h-10 bg-[#CC0000]/10 border border-[#CC0000]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#CC0000]/20 transition-colors">
                        <item.icon className="text-[#CC0000]" size={18} />
                      </div>
                      <div>
                        <p className="font-display font-semibold text-white text-sm tracking-wide mb-1">{item.title}</p>
                        {item.lines.map((line, j) => (
                          <p key={j} className="font-body text-[#666] text-xs leading-relaxed">{line}</p>
                        ))}
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>

              {/* Social */}
              <AnimatedSection direction="left" delay={0.5}>
                <div className="bg-[#111] border border-white/5 p-5">
                  <p className="font-display font-semibold text-white text-sm tracking-wide mb-4">Follow Us</p>
                  <div className="flex gap-3">
                    {[
                      { Icon: FiInstagram, label: 'Instagram', href: '#' },
                      { Icon: FiFacebook, label: 'Facebook', href: '#' },
                      { Icon: FiYoutube, label: 'YouTube', href: '#' },
                    ].map(({ Icon, label, href }) => (
                      <a
                        key={label}
                        href={href}
                        className="flex items-center gap-2 px-3 py-2 border border-white/10 text-[#666] hover:text-white hover:border-[#CC0000] hover:bg-[#CC0000]/10 transition-all duration-300 text-xs font-body"
                      >
                        <Icon size={14} /> {label}
                      </a>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-3">
              <AnimatedSection direction="right">
                <div className="bg-[#111] border border-white/5 p-8 relative overflow-hidden">
                  {/* Corner accent */}
                  <div className="absolute top-0 left-0 w-12 h-12 bg-[#CC0000]/10" />
                  <div className="absolute bottom-0 right-0 w-20 h-20 bg-[#CC0000]/5" />

                  <div className="relative z-10">
                    <p className="font-body text-[#CC0000] text-xs tracking-[0.4em] uppercase mb-2">Send a Message</p>
                    <h3 className="font-display font-bold text-2xl text-white tracking-wide mb-6">
                      Contact Form
                    </h3>

                    <AnimatePresence mode="wait">
                      {status === 'success' ? (
                        <motion.div
                          key="success"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="text-center py-12"
                        >
                          <FiCheckCircle className="text-green-400 mx-auto mb-4" size={48} />
                          <h4 className="font-display font-bold text-2xl text-white mb-3">Message Sent!</h4>
                          <p className="font-body text-[#666] mb-6">We'll get back to you within 24 hours.</p>
                          <button
                            onClick={() => setStatus(null)}
                            className="btn-outline px-6 py-2.5 text-sm font-display tracking-widest"
                          >
                            Send Another
                          </button>
                        </motion.div>
                      ) : (
                        <motion.form
                          key="form"
                          onSubmit={handleSubmit}
                          className="space-y-5"
                        >
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-xs text-[#666] font-body mb-1.5 tracking-wider uppercase">
                                Full Name <span className="text-[#CC0000]">*</span>
                              </label>
                              <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                placeholder="Your name"
                                className="premium-input w-full px-4 py-3 text-sm font-body"
                              />
                            </div>
                            <div>
                              <label className="block text-xs text-[#666] font-body mb-1.5 tracking-wider uppercase">
                                Email Address <span className="text-[#CC0000]">*</span>
                              </label>
                              <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                placeholder="your@email.com"
                                className="premium-input w-full px-4 py-3 text-sm font-body"
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-xs text-[#666] font-body mb-1.5 tracking-wider uppercase">Phone</label>
                              <input
                                type="tel"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                placeholder="+94 XX XXX XXXX"
                                className="premium-input w-full px-4 py-3 text-sm font-body"
                              />
                            </div>
                            <div>
                              <label className="block text-xs text-[#666] font-body mb-1.5 tracking-wider uppercase">Subject</label>
                              <select
                                name="subject"
                                value={form.subject}
                                onChange={handleChange}
                                className="premium-input w-full px-4 py-3 text-sm font-body"
                              >
                                <option value="" className="bg-[#111]">Select a topic</option>
                                <option value="Membership Inquiry" className="bg-[#111]">Membership Inquiry</option>
                                <option value="Personal Training" className="bg-[#111]">Personal Training</option>
                                <option value="Group Classes" className="bg-[#111]">Group Classes</option>
                                <option value="Facility Tour" className="bg-[#111]">Facility Tour</option>
                                <option value="Other" className="bg-[#111]">Other</option>
                              </select>
                            </div>
                          </div>

                          <div>
                            <label className="block text-xs text-[#666] font-body mb-1.5 tracking-wider uppercase">
                              Message <span className="text-[#CC0000]">*</span>
                            </label>
                            <textarea
                              name="message"
                              value={form.message}
                              onChange={handleChange}
                              required
                              rows={5}
                              placeholder="Tell us how we can help..."
                              className="premium-input w-full px-4 py-3 text-sm font-body resize-none"
                            />
                          </div>

                          {status === 'error' && (
                            <div className="flex items-center gap-3 text-red-400 text-sm font-body bg-red-400/10 border border-red-400/20 px-4 py-3">
                              <FiAlertCircle size={16} />
                              <span>Failed to send. Please configure EmailJS credentials or try again.</span>
                            </div>
                          )}

                          <motion.button
                            type="submit"
                            disabled={status === 'sending'}
                            whileTap={{ scale: 0.97 }}
                            className="btn-primary w-full py-4 text-sm font-display tracking-widest flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed"
                          >
                            {status === 'sending' ? (
                              <>
                                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                Sending...
                              </>
                            ) : (
                              <>
                                Send Message <FiSend size={16} />
                              </>
                            )}
                          </motion.button>

                          <p className="text-xs text-[#444] font-body text-center">
                            ⚠️ Configure EmailJS in <code className="text-[#CC0000]">app/contact/page.js</code> to activate email sending.
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

      {/* Map Section */}
      <section className="py-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection direction="up">
            <div className="relative overflow-hidden border border-white/5" style={{ height: '380px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.97694440673!2d79.80815085!3d7.2083426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2ef2a6bc4af5b%3A0x2b62e50ce0dfab9e!2sNegombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(1) invert(0.9) hue-rotate(180deg)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="King Lion Gym Location"
              />
              <div className="absolute inset-0 pointer-events-none border border-[#CC0000]/20" />
              {/* Map label */}
              <div className="absolute top-4 left-4 bg-[#0A0A0A]/90 backdrop-blur-sm border border-white/10 px-4 py-2">
                <p className="font-display font-semibold text-white text-sm tracking-wide">King Lion Gym</p>
                <p className="font-body text-[#CC0000] text-xs">Negombo, Sri Lanka</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

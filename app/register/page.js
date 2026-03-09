'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheckCircle, FiStar, FiZap, FiShield, FiArrowRight } from 'react-icons/fi';
import { GiLion } from 'react-icons/gi';
import AnimatedSection from '../../components/AnimatedSection';

const plans = [
  {
    name: 'Cub',
    price: '3,500',
    period: 'LKR / month',
    desc: 'Perfect for beginners starting their fitness journey.',
    features: [
      'Full Gym Access',
      'Basic Equipment Usage',
      'Locker Access',
      '1 Free Orientation Session',
      'Standard Hours Access',
    ],
    excluded: ['Personal Training', 'Nutrition Plan', 'Priority Booking'],
    highlight: false,
    icon: FiShield,
  },
  {
    name: 'Lion',
    price: '6,500',
    period: 'LKR / month',
    desc: 'Our most popular plan for serious fitness enthusiasts.',
    features: [
      'Full Gym Access',
      'All Equipment Access',
      'Locker Access',
      '4 PT Sessions / Month',
      'Extended Hours Access',
      'Nutrition Consultation',
      'Progress Tracking',
    ],
    excluded: ['Priority Booking'],
    highlight: true,
    badge: 'Most Popular',
    icon: GiLion,
  },
  {
    name: 'King',
    price: '12,000',
    period: 'LKR / month',
    desc: 'Elite membership for those who demand the absolute best.',
    features: [
      'Full Gym Access 24/7',
      'All Equipment Access',
      'Premium Locker',
      'Unlimited PT Sessions',
      'Custom Nutrition Plan',
      'Priority Booking',
      'Body Composition Analysis',
      'Dedicated Coach',
    ],
    excluded: [],
    highlight: false,
    badge: 'Elite',
    icon: FiStar,
  },
];

const goals = ['Lose Weight', 'Build Muscle', 'Improve Endurance', 'Get Stronger', 'Sports Performance', 'General Fitness'];
const levels = ['Complete Beginner', 'Some Experience', 'Intermediate', 'Advanced'];

export default function RegisterPage() {
  const [selectedPlan, setSelectedPlan] = useState('Lion');
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    dob: '', gender: '', goal: '', level: '', medicalNotes: '',
  });

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#0A0A0A] pt-20">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/gym2.jpg" alt="Register" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="font-body text-[#CC0000] text-xs tracking-[0.4em] uppercase mb-3">Begin Your Journey</p>
            <h1 className="font-display font-bold text-6xl md:text-7xl text-white tracking-tight leading-none">
              JOIN <span className="gradient-text">THE PRIDE</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center mb-14">
            <p className="font-body text-[#CC0000] text-xs tracking-[0.4em] uppercase mb-3">Choose Your Path</p>
            <h2 className="font-display font-bold text-5xl text-white tracking-tight mb-4">
              MEMBERSHIP <span className="gradient-text">PLANS</span>
            </h2>
            <p className="font-body text-[#666] max-w-lg mx-auto">
              Flexible plans designed to fit your goals and budget. All plans include full access to our premium facilities.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {plans.map((plan, i) => (
              <AnimatedSection key={i} delay={i * 0.15} direction="up">
                <motion.div
                  whileHover={{ y: -6 }}
                  onClick={() => setSelectedPlan(plan.name)}
                  className={`relative cursor-pointer border p-7 transition-all duration-500 ${
                    selectedPlan === plan.name
                      ? 'border-[#CC0000] bg-[#CC0000]/5'
                      : plan.highlight
                        ? 'border-[#CC0000]/40 bg-[#111]'
                        : 'border-white/5 bg-[#111] hover:border-white/15'
                  }`}
                >
                  {plan.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#CC0000] px-4 py-1 text-xs font-display text-white tracking-widest uppercase">
                      {plan.badge}
                    </div>
                  )}

                  {/* Selected indicator */}
                  {selectedPlan === plan.name && (
                    <div className="absolute top-4 right-4">
                      <FiCheckCircle className="text-[#CC0000]" size={18} />
                    </div>
                  )}

                  <plan.icon className={`mb-4 ${plan.highlight ? 'text-[#CC0000]' : 'text-[#555]'}`} size={32} />
                  <h3 className="font-display font-bold text-2xl text-white tracking-wider mb-1">{plan.name}</h3>
                  <div className="flex items-end gap-2 mb-2">
                    <span className="font-display font-bold text-4xl text-white">{plan.price}</span>
                    <span className="font-body text-[#555] text-xs mb-1.5">{plan.period}</span>
                  </div>
                  <p className="font-body text-[#666] text-xs mb-6">{plan.desc}</p>

                  <div className="space-y-2 mb-6">
                    {plan.features.map((f, j) => (
                      <div key={j} className="flex items-center gap-2.5 text-xs">
                        <FiCheckCircle className="text-[#CC0000] flex-shrink-0" size={12} />
                        <span className="font-body text-[#888]">{f}</span>
                      </div>
                    ))}
                    {plan.excluded.map((f, j) => (
                      <div key={j} className="flex items-center gap-2.5 text-xs opacity-30">
                        <div className="w-3 h-3 border border-[#444] rounded-full flex-shrink-0" />
                        <span className="font-body text-[#555] line-through">{f}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    className={`w-full py-2.5 text-xs font-display tracking-widest uppercase transition-all duration-300 ${
                      selectedPlan === plan.name
                        ? 'bg-[#CC0000] text-white'
                        : 'border border-white/10 text-[#666] hover:border-[#CC0000] hover:text-white'
                    }`}
                  >
                    {selectedPlan === plan.name ? '✓ Selected' : 'Select Plan'}
                  </button>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          {/* Registration Form */}
          <AnimatedSection direction="up">
            <div className="max-w-3xl mx-auto">
              <div className="bg-[#111] border border-white/5 p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#CC0000]/10" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-6 h-px bg-[#CC0000]" />
                    <p className="font-body text-[#CC0000] text-xs tracking-[0.4em] uppercase">
                      Step {step} of 2
                    </p>
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white tracking-wide mb-1">
                    {step === 1 ? 'Personal Information' : 'Fitness Profile'}
                  </h3>
                  <p className="font-body text-[#555] text-xs mb-6">
                    Selected Plan: <span className="text-[#CC0000] font-semibold">{selectedPlan}</span>
                  </p>

                  {/* Progress bar */}
                  <div className="h-px bg-white/5 mb-7 relative">
                    <motion.div
                      className="absolute top-0 left-0 h-full bg-[#CC0000]"
                      animate={{ width: step === 1 ? '50%' : '100%' }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>

                  <AnimatePresence mode="wait">
                    {!submitted ? (
                      <motion.form
                        key={step}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        onSubmit={step === 2 ? handleSubmit : (e) => { e.preventDefault(); setStep(2); }}
                      >
                        {step === 1 ? (
                          <div className="space-y-5">
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <label className="block text-xs text-[#666] font-body mb-1.5 tracking-wider uppercase">First Name *</label>
                                <input type="text" name="firstName" value={form.firstName} onChange={handleChange} required placeholder="First name" className="premium-input w-full px-4 py-3 text-sm font-body" />
                              </div>
                              <div>
                                <label className="block text-xs text-[#666] font-body mb-1.5 tracking-wider uppercase">Last Name *</label>
                                <input type="text" name="lastName" value={form.lastName} onChange={handleChange} required placeholder="Last name" className="premium-input w-full px-4 py-3 text-sm font-body" />
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <label className="block text-xs text-[#666] font-body mb-1.5 tracking-wider uppercase">Email *</label>
                                <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" className="premium-input w-full px-4 py-3 text-sm font-body" />
                              </div>
                              <div>
                                <label className="block text-xs text-[#666] font-body mb-1.5 tracking-wider uppercase">Phone *</label>
                                <input type="tel" name="phone" value={form.phone} onChange={handleChange} required placeholder="+94 XX XXX XXXX" className="premium-input w-full px-4 py-3 text-sm font-body" />
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <label className="block text-xs text-[#666] font-body mb-1.5 tracking-wider uppercase">Date of Birth</label>
                                <input type="date" name="dob" value={form.dob} onChange={handleChange} className="premium-input w-full px-4 py-3 text-sm font-body" />
                              </div>
                              <div>
                                <label className="block text-xs text-[#666] font-body mb-1.5 tracking-wider uppercase">Gender</label>
                                <select name="gender" value={form.gender} onChange={handleChange} className="premium-input w-full px-4 py-3 text-sm font-body">
                                  <option value="" className="bg-[#111]">Select</option>
                                  <option value="Male" className="bg-[#111]">Male</option>
                                  <option value="Female" className="bg-[#111]">Female</option>
                                  <option value="Other" className="bg-[#111]">Prefer not to say</option>
                                </select>
                              </div>
                            </div>
                            <motion.button type="submit" whileTap={{ scale: 0.97 }} className="btn-primary w-full py-3.5 text-sm font-display tracking-widest flex items-center justify-center gap-3">
                              Continue <FiArrowRight />
                            </motion.button>
                          </div>
                        ) : (
                          <div className="space-y-5">
                            <div>
                              <label className="block text-xs text-[#666] font-body mb-2 tracking-wider uppercase">Primary Fitness Goal</label>
                              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                                {goals.map(g => (
                                  <button
                                    key={g}
                                    type="button"
                                    onClick={() => setForm(prev => ({ ...prev, goal: g }))}
                                    className={`py-2 px-3 text-xs font-display tracking-wider uppercase transition-all duration-300 ${
                                      form.goal === g
                                        ? 'bg-[#CC0000] text-white'
                                        : 'border border-white/10 text-[#666] hover:border-[#CC0000]/50 hover:text-white'
                                    }`}
                                  >
                                    {g}
                                  </button>
                                ))}
                              </div>
                            </div>
                            <div>
                              <label className="block text-xs text-[#666] font-body mb-2 tracking-wider uppercase">Fitness Level</label>
                              <div className="grid grid-cols-2 gap-2">
                                {levels.map(l => (
                                  <button
                                    key={l}
                                    type="button"
                                    onClick={() => setForm(prev => ({ ...prev, level: l }))}
                                    className={`py-2 px-3 text-xs font-display tracking-wider uppercase transition-all duration-300 ${
                                      form.level === l
                                        ? 'bg-[#CC0000] text-white'
                                        : 'border border-white/10 text-[#666] hover:border-[#CC0000]/50 hover:text-white'
                                    }`}
                                  >
                                    {l}
                                  </button>
                                ))}
                              </div>
                            </div>
                            <div>
                              <label className="block text-xs text-[#666] font-body mb-1.5 tracking-wider uppercase">Medical Notes (optional)</label>
                              <textarea
                                name="medicalNotes"
                                value={form.medicalNotes}
                                onChange={handleChange}
                                rows={3}
                                placeholder="Any injuries or medical conditions we should know about..."
                                className="premium-input w-full px-4 py-3 text-sm font-body resize-none"
                              />
                            </div>
                            <div className="flex gap-4">
                              <button type="button" onClick={() => setStep(1)} className="btn-outline px-6 py-3 text-sm font-display tracking-widest">
                                Back
                              </button>
                              <motion.button type="submit" whileTap={{ scale: 0.97 }} className="btn-primary flex-1 py-3 text-sm font-display tracking-widest">
                                Submit Registration
                              </motion.button>
                            </div>
                          </div>
                        )}
                      </motion.form>
                    ) : (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-12"
                      >
                        <GiLion className="text-[#CC0000] mx-auto mb-4" size={56} />
                        <h4 className="font-display font-bold text-3xl text-white mb-3">Welcome, Champion!</h4>
                        <p className="font-body text-[#666] mb-2">
                          Thank you, <span className="text-white">{form.firstName}</span>! Your registration for the <span className="text-[#CC0000] font-semibold">{selectedPlan} Plan</span> is received.
                        </p>
                        <p className="font-body text-[#555] text-sm mb-8">
                          Our team will contact you at <span className="text-[#CC0000]">{form.email}</span> within 24 hours to finalize your membership.
                        </p>
                        <div className="w-16 h-0.5 bg-[#CC0000] mx-auto" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BMICalculator() {
  const [unit, setUnit] = useState('metric');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [hFt, setHFt] = useState('');
  const [hIn, setHIn] = useState('');
  const [bmi, setBmi] = useState(null);
  const [cat, setCat] = useState(null);

  const getCategory = (v) => {
    if (v < 18.5) return { label: 'Underweight', color: '#3B82F6', desc: 'You need to gain healthy muscle mass. Our trainers can help.' };
    if (v < 25) return { label: 'Normal Weight', color: '#22C55E', desc: 'Great shape! Keep maintaining your fitness.' };
    if (v < 30) return { label: 'Overweight', color: '#F59E0B', desc: 'Time to step up training intensity. We\'re here to help.' };
    return { label: 'Obese', color: '#CC0000', desc: 'Your transformation journey starts here at King Lion.' };
  };

  const calculate = () => {
    let h, w;
    if (unit === 'metric') {
      h = parseFloat(height) / 100;
      w = parseFloat(weight);
    } else {
      h = (parseFloat(hFt) * 12 + parseFloat(hIn || 0)) * 0.0254;
      w = parseFloat(weight) * 0.453592;
    }
    if (!h || !w || h <= 0) return;
    const v = w / (h * h);
    setBmi(v.toFixed(1));
    setCat(getCategory(v));
  };

  const reset = () => { setBmi(null); setCat(null); setHeight(''); setWeight(''); setHFt(''); setHIn(''); };
  const pct = (v) => Math.min(Math.max(((v - 10) / 35) * 100, 0), 100);

  return (
    <div className="rounded-xl bg-[#0F0F0F] border border-white/5 p-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-[0.04]"
        style={{ background: 'radial-gradient(circle, #CC0000, transparent)', transform: 'translate(30%, -30%)' }} />
      <div className="relative z-10">
        {/* Header */}
        <div className="mb-6">
          <div className="section-badge mb-3">Health Tool</div>
          <h3 className="font-black text-3xl text-white tracking-tight">BMI Calculator</h3>
          <div className="w-10 h-0.5 bg-red-700 mt-3 rounded-full" />
        </div>

        {/* Unit toggle */}
        <div className="flex mb-6 bg-[#0A0A0A] p-1 rounded-lg w-fit gap-1">
          {['metric', 'imperial'].map((u) => (
            <button key={u} onClick={() => { setUnit(u); reset(); }}
              className={`px-4 py-1.5 text-xs font-black tracking-widest uppercase rounded-md transition-all duration-300 ${
                unit === u ? 'bg-red-700 text-white' : 'text-[#555] hover:text-white'
              }`}>
              {u}
            </button>
          ))}
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-2 gap-4 mb-5">
          {unit === 'metric' ? (
            <div>
              <label className="block text-xs text-[#555] mb-1.5 font-bold tracking-wider uppercase">Height (cm)</label>
              <input type="number" value={height} onChange={e => setHeight(e.target.value)}
                placeholder="175" className="premium-input w-full px-4 py-3 text-sm" />
            </div>
          ) : (
            <div>
              <label className="block text-xs text-[#555] mb-1.5 font-bold tracking-wider uppercase">Height</label>
              <div className="flex gap-2">
                <input type="number" value={hFt} onChange={e => setHFt(e.target.value)}
                  placeholder="ft" className="premium-input w-1/2 px-3 py-3 text-sm" />
                <input type="number" value={hIn} onChange={e => setHIn(e.target.value)}
                  placeholder="in" className="premium-input w-1/2 px-3 py-3 text-sm" />
              </div>
            </div>
          )}
          <div>
            <label className="block text-xs text-[#555] mb-1.5 font-bold tracking-wider uppercase">
              Weight ({unit === 'metric' ? 'kg' : 'lbs'})
            </label>
            <input type="number" value={weight} onChange={e => setWeight(e.target.value)}
              placeholder={unit === 'metric' ? '70' : '155'} className="premium-input w-full px-4 py-3 text-sm" />
          </div>
        </div>

        <motion.button whileTap={{ scale: 0.97 }} onClick={calculate}
          className="btn-primary w-full py-3.5 text-sm font-black tracking-widest mb-6">
          Calculate BMI
        </motion.button>

        <AnimatePresence>
          {bmi && cat && (
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.4 }}
              className="rounded-lg bg-[#0A0A0A] border border-white/5 p-5">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-xs text-[#444] font-bold uppercase tracking-wider mb-1">Your BMI Score</p>
                  <motion.p initial={{ scale: 0.5 }} animate={{ scale: 1 }}
                    className="font-black text-5xl number-glow" style={{ color: cat.color }}>
                    {bmi}
                  </motion.p>
                </div>
                <div className="text-right">
                  <p className="font-black text-base" style={{ color: cat.color }}>{cat.label}</p>
                  <p className="text-xs text-[#444] font-medium mt-1 max-w-[150px] leading-relaxed">{cat.desc}</p>
                </div>
              </div>
              {/* Scale */}
              <div className="mb-4">
                <div className="relative h-2 rounded-full overflow-hidden"
                  style={{ background: 'linear-gradient(90deg,#3B82F6 0%,#22C55E 28%,#F59E0B 56%,#CC0000 100%)' }}>
                  <motion.div
                    initial={{ left: '0%' }} animate={{ left: `${pct(parseFloat(bmi))}%` }}
                    transition={{ duration: 0.9, ease: 'easeOut' }}
                    className="absolute -top-1 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2"
                    style={{ borderColor: cat.color }} />
                </div>
                <div className="flex justify-between text-[#333] text-xs font-bold mt-1.5">
                  <span>Lean</span><span>Normal</span><span>Over</span><span>Obese</span>
                </div>
              </div>
              <button onClick={reset} className="text-xs text-[#444] hover:text-red-600 transition-colors font-bold tracking-wider uppercase">
                ← Recalculate
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

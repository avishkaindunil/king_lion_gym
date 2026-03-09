'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BMICalculator() {
  const [unit, setUnit] = useState('metric');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [heightFt, setHeightFt] = useState('');
  const [heightIn, setHeightIn] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

  const getCategory = (bmiVal) => {
    if (bmiVal < 18.5) return { label: 'Underweight', color: '#3B82F6', desc: 'You need to gain some healthy muscle mass.' };
    if (bmiVal < 25) return { label: 'Normal Weight', color: '#22C55E', desc: 'Great shape! Keep maintaining your fitness.' };
    if (bmiVal < 30) return { label: 'Overweight', color: '#F59E0B', desc: 'Time to step up the training intensity.' };
    return { label: 'Obese', color: '#CC0000', desc: 'Your fitness journey starts here at King Lion.' };
  };

  const calculate = () => {
    let h, w;
    if (unit === 'metric') {
      h = parseFloat(height) / 100;
      w = parseFloat(weight);
    } else {
      const totalInches = parseFloat(heightFt) * 12 + parseFloat(heightIn || 0);
      h = totalInches * 0.0254;
      w = parseFloat(weight) * 0.453592;
    }
    if (!h || !w || h <= 0 || w <= 0) return;
    const bmiVal = w / (h * h);
    setBmi(bmiVal.toFixed(1));
    setCategory(getCategory(bmiVal));
  };

  const reset = () => {
    setBmi(null);
    setCategory('');
    setHeight('');
    setWeight('');
    setHeightFt('');
    setHeightIn('');
  };

  const getBMIPercent = (bmiVal) => {
    const min = 10, max = 45;
    return Math.min(Math.max(((bmiVal - min) / (max - min)) * 100, 0), 100);
  };

  return (
    <div className="bg-[#111] border border-white/5 p-8 relative overflow-hidden">
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-[#CC0000]/10" />
      <div className="absolute top-0 right-0 w-8 h-8 bg-[#CC0000]/20" />

      <div className="relative z-10">
        {/* Header */}
        <div className="mb-7">
          <p className="font-body text-[#CC0000] text-xs tracking-[0.3em] uppercase mb-1">Know Your</p>
          <h3 className="font-display text-3xl font-bold text-white tracking-wide">BMI Calculator</h3>
          <div className="w-12 h-0.5 bg-[#CC0000] mt-3" />
        </div>

        {/* Unit Toggle */}
        <div className="flex mb-6 bg-[#0A0A0A] p-1 w-fit">
          {['metric', 'imperial'].map((u) => (
            <button
              key={u}
              onClick={() => { setUnit(u); reset(); }}
              className={`px-4 py-1.5 text-xs font-display tracking-widest uppercase transition-all duration-300 ${
                unit === u ? 'bg-[#CC0000] text-white' : 'text-[#666] hover:text-white'
              }`}
            >
              {u}
            </button>
          ))}
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-2 gap-4 mb-5">
          {unit === 'metric' ? (
            <div>
              <label className="block text-xs text-[#666] font-body mb-1.5 tracking-wider uppercase">Height (cm)</label>
              <input
                type="number"
                value={height}
                onChange={e => setHeight(e.target.value)}
                placeholder="e.g. 175"
                className="premium-input w-full px-4 py-3 text-sm font-body rounded-none"
              />
            </div>
          ) : (
            <div>
              <label className="block text-xs text-[#666] font-body mb-1.5 tracking-wider uppercase">Height</label>
              <div className="flex gap-2">
                <input
                  type="number"
                  value={heightFt}
                  onChange={e => setHeightFt(e.target.value)}
                  placeholder="ft"
                  className="premium-input w-1/2 px-3 py-3 text-sm font-body rounded-none"
                />
                <input
                  type="number"
                  value={heightIn}
                  onChange={e => setHeightIn(e.target.value)}
                  placeholder="in"
                  className="premium-input w-1/2 px-3 py-3 text-sm font-body rounded-none"
                />
              </div>
            </div>
          )}
          <div>
            <label className="block text-xs text-[#666] font-body mb-1.5 tracking-wider uppercase">
              Weight ({unit === 'metric' ? 'kg' : 'lbs'})
            </label>
            <input
              type="number"
              value={weight}
              onChange={e => setWeight(e.target.value)}
              placeholder={unit === 'metric' ? 'e.g. 70' : 'e.g. 155'}
              className="premium-input w-full px-4 py-3 text-sm font-body rounded-none"
            />
          </div>
        </div>

        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={calculate}
          className="btn-primary w-full py-3.5 text-sm font-display tracking-widest mb-6"
        >
          Calculate BMI
        </motion.button>

        {/* Result */}
        <AnimatePresence>
          {bmi && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="border border-white/5 bg-[#0A0A0A] p-5"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-xs text-[#666] font-body uppercase tracking-wider mb-0.5">Your BMI</p>
                  <motion.p
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    className="font-display text-5xl font-bold"
                    style={{ color: category.color }}
                  >
                    {bmi}
                  </motion.p>
                </div>
                <div className="text-right">
                  <p className="font-display font-semibold text-lg tracking-wide" style={{ color: category.color }}>
                    {category.label}
                  </p>
                  <p className="text-xs text-[#666] font-body mt-1 max-w-[160px] leading-relaxed">
                    {category.desc}
                  </p>
                </div>
              </div>

              {/* BMI Scale Bar */}
              <div className="mb-3">
                <div className="relative h-2 rounded-full overflow-hidden"
                  style={{ background: 'linear-gradient(90deg, #3B82F6 0%, #22C55E 30%, #F59E0B 60%, #CC0000 100%)' }}>
                  <motion.div
                    initial={{ left: '0%' }}
                    animate={{ left: `${getBMIPercent(parseFloat(bmi))}%` }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="absolute -top-1 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2"
                    style={{ borderColor: category.color }}
                  />
                </div>
                <div className="flex justify-between text-xs text-[#444] font-body mt-1">
                  <span>10</span>
                  <span>18.5</span>
                  <span>25</span>
                  <span>30</span>
                  <span>45+</span>
                </div>
              </div>

              <button onClick={reset} className="text-xs text-[#666] hover:text-[#CC0000] transition-colors font-body mt-1 tracking-wider uppercase">
                ← Recalculate
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

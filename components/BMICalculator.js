'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BMICalculator() {
  const [unit, setUnit] = useState('metric');
  const [h, setH] = useState(''); const [w, setW] = useState('');
  const [hFt, setHFt] = useState(''); const [hIn, setHIn] = useState('');
  const [bmi, setBmi] = useState(null); const [cat, setCat] = useState(null);

  const getcat = v => {
    if(v<18.5) return {label:'Underweight',color:'#3B82F6',pct:20,desc:"Build healthy muscle mass. Our trainers can design the perfect program for you."};
    if(v<25)   return {label:'Normal',color:'#22C55E',pct:40,desc:"Great shape! Keep maintaining your fitness with our programs."};
    if(v<30)   return {label:'Overweight',color:'#F59E0B',pct:62,desc:"Time to step up intensity. We have the perfect fat-loss program."};
    return       {label:'Obese',color:'#C8102E',pct:85,desc:"Your transformation starts here. King Lion will get you there."};
  };
  const calc = () => {
    let hm,wk;
    if(unit==='metric'){hm=parseFloat(h)/100;wk=parseFloat(w);}
    else{hm=(parseFloat(hFt)*12+parseFloat(hIn||0))*0.0254;wk=parseFloat(w)*0.453592;}
    if(!hm||!wk||hm<=0) return;
    const v=wk/(hm*hm); setBmi(v.toFixed(1)); setCat(getcat(v));
  };
  const reset = () => {setBmi(null);setCat(null);setH('');setW('');setHFt('');setHIn('');};

  return (
    <div className="card-dark p-8 relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute top-0 right-0 w-40 h-40 pointer-events-none" style={{background:'radial-gradient(circle at 100% 0%,rgba(200,16,46,0.06),transparent 60%)'}}/>

      <div className="relative z-10">
        <div className="section-label mb-4">Health Tool</div>
        <h3 className="font-bebas text-4xl text-white tracking-wide mb-1">BMI Calculator</h3>
        <div className="w-8 h-0.5 bg-[#C8102E] mb-6 rounded-full" />

        {/* Unit toggle */}
        <div className="flex mb-6 bg-black-1 p-1 rounded-lg w-fit">
          {['metric','imperial'].map(u => (
            <button key={u} onClick={()=>{setUnit(u);reset();}}
              className={`px-4 py-1.5 text-[10px] font-manrope font-800 tracking-[0.18em] uppercase rounded-md transition-all duration-300 ${
                unit===u ? 'bg-[#C8102E] text-white':'text-soft hover:text-white'
              }`}>{u}</button>
          ))}
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-2 gap-4 mb-5">
          {unit==='metric' ? (
            <div>
              <label className="block text-[10px] text-soft mb-1.5 font-bold tracking-[0.2em] uppercase">Height (cm)</label>
              <input type="number" value={h} onChange={e=>setH(e.target.value)} placeholder="175" className="input-dark w-full px-4 py-3 text-sm"/>
            </div>
          ) : (
            <div>
              <label className="block text-[10px] text-soft mb-1.5 font-bold tracking-[0.2em] uppercase">Height</label>
              <div className="flex gap-2">
                <input type="number" value={hFt} onChange={e=>setHFt(e.target.value)} placeholder="ft" className="input-dark w-1/2 px-3 py-3 text-sm"/>
                <input type="number" value={hIn} onChange={e=>setHIn(e.target.value)} placeholder="in" className="input-dark w-1/2 px-3 py-3 text-sm"/>
              </div>
            </div>
          )}
          <div>
            <label className="block text-[10px] text-soft mb-1.5 font-bold tracking-[0.2em] uppercase">Weight ({unit==='metric'?'kg':'lbs'})</label>
            <input type="number" value={w} onChange={e=>setW(e.target.value)} placeholder={unit==='metric'?'70':'155'} className="input-dark w-full px-4 py-3 text-sm"/>
          </div>
        </div>

        <motion.button whileTap={{scale:0.97}} onClick={calc}
          className="btn-primary w-full py-3.5 text-xs font-manrope font-800 tracking-widest mb-6">
          Calculate BMI
        </motion.button>

        <AnimatePresence>
          {bmi && cat && (
            <motion.div initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-12}}
              className="rounded-lg border border-black-4 bg-black-1 p-5">
              <div className="flex items-start justify-between mb-5">
                <div>
                  <div className="text-ghost text-[10px] font-bold tracking-[0.2em] uppercase mb-1">Your BMI Score</div>
                  <motion.div initial={{scale:0.5}} animate={{scale:1}}
                    className="font-bebas text-6xl leading-none" style={{color:cat.color}}>
                    {bmi}
                  </motion.div>
                </div>
                <div className="text-right">
                  <div className="font-manrope font-800 text-base mb-1" style={{color:cat.color}}>{cat.label}</div>
                  <p className="text-ghost text-xs leading-relaxed max-w-[150px] font-medium">{cat.desc}</p>
                </div>
              </div>
              {/* Scale */}
              <div className="relative h-1.5 rounded-full overflow-hidden mb-1" style={{background:'linear-gradient(90deg,#3B82F6 0%,#22C55E 28%,#F59E0B 58%,#C8102E 100%)'}}>
                <motion.div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white border-2 -translate-x-1/2"
                  initial={{left:'0%'}} animate={{left:`${cat.pct}%`}}
                  transition={{duration:0.9,ease:'easeOut'}} style={{borderColor:cat.color}}/>
              </div>
              <div className="flex justify-between text-ghost text-[9px] font-bold mb-4">
                <span>Lean</span><span>Normal</span><span>Over</span><span>Obese</span>
              </div>
              <button onClick={reset} className="text-[10px] text-ghost hover:text-[#C8102E] transition-colors font-bold tracking-[0.2em] uppercase">
                ← Recalculate
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

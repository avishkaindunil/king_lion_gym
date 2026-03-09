'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight, FiMaximize2 } from 'react-icons/fi';
import AnimatedSection from '../../components/AnimatedSection';

const IMGS=[
  {src:'/images/gym1.jpg',title:'Equipment Floor',cat:'Equipment'},
  {src:'/images/gym2.jpg',title:'Training Zone',cat:'Training'},
  {src:'/images/gym3.jpg',title:'Free Weights',cat:'Equipment'},
  {src:'/images/gym4.jpg',title:'Main Floor',cat:'Facility'},
  {src:'/images/gym5.jpg',title:'Bench Press Zone',cat:'Equipment'},
  {src:'/images/gym6.jpg',title:'Cable Station',cat:'Equipment'},
  {src:'/images/gym7.jpg',title:'Dumbbell Rack',cat:'Equipment'},
  {src:'/images/gym8.jpg',title:'Strength Training',cat:'Training'},
  {src:'/images/gym9.jpg',title:'Cardio Section',cat:'Cardio'},
  {src:'/images/gym10.jpg',title:'Sprint Track',cat:'Cardio'},
  {src:'/images/gym11.jpg',title:'Functional Training',cat:'Training'},
  {src:'/images/gym12.jpg',title:'Facility Overview',cat:'Facility'},
];
const CATS=['All','Equipment','Training','Cardio','Facility'];

export default function GalleryPage(){
  const [filter,setFilter]=useState('All');
  const [lb,setLb]=useState(null);
  const filtered=filter==='All'?IMGS:IMGS.filter(i=>i.cat===filter);

  return(
    <div style={{background:'#050505'}} className="pt-20">
      <section className="relative" style={{height:'50vh',minHeight:'320px'}}>
        <div className="absolute inset-0">
          <Image src="/images/gym1.jpg" alt="Gallery" fill className="object-cover"/>
          <div className="absolute inset-0" style={{background:'linear-gradient(to top,#050505 20%,rgba(5,5,5,0.6) 60%,transparent)'}}/>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 h-full flex items-end pb-16">
          <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:0.8}}>
            <div className="section-label mb-4">Visual Tour</div>
            <h1 className="font-bebas text-7xl md:text-8xl text-white tracking-wide leading-none">
              OUR <span className="text-red-gradient">GALLERY</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-14 relative">
        <div className="absolute inset-0 grid-lines opacity-20"/>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <AnimatedSection className="flex flex-wrap gap-3 mb-12 justify-center">
            {CATS.map(c=>(
              <motion.button key={c} whileTap={{scale:0.95}} onClick={()=>setFilter(c)}
                className={`px-5 py-2.5 font-manrope font-800 text-[10px] tracking-[0.2em] uppercase rounded-md transition-all duration-300 ${
                  filter===c?'bg-[#C8102E] text-white':'border border-black-5 text-soft hover:text-white hover:border-white/15'
                }`}>{c}
              </motion.button>
            ))}
          </AnimatedSection>

          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            <AnimatePresence>
              {filtered.map((img,i)=>(
                <motion.div key={img.src} layout
                  initial={{opacity:0,scale:0.92}} animate={{opacity:1,scale:1}}
                  exit={{opacity:0,scale:0.9}} transition={{duration:0.4,delay:i*0.04}}
                  className={`relative overflow-hidden rounded-xl cursor-pointer group ${i===0||i===5?'col-span-2 row-span-2':''}`}
                  style={{aspectRatio:i===0||i===5?'1':'3/4'}} onClick={()=>setLb(i)}>
                  <Image src={img.src} alt={img.title} fill className="object-cover transition-transform duration-700 group-hover:scale-108"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"/>
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
                    <p className="font-bebas text-white text-xl tracking-wide">{img.title}</p>
                    <span className="text-[#C8102E] text-[9px] font-bold tracking-[0.25em] uppercase">{img.cat}</span>
                  </div>
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <FiMaximize2 className="text-white" size={13}/>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {lb!==null&&(
          <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            style={{background:'rgba(4,4,4,0.97)',backdropFilter:'blur(24px)'}}
            onClick={()=>setLb(null)}>
            <motion.div initial={{scale:0.88}} animate={{scale:1}} exit={{scale:0.88}}
              className="relative max-w-5xl w-full" style={{aspectRatio:'4/3'}} onClick={e=>e.stopPropagation()}>
              <Image src={filtered[lb].src} alt={filtered[lb].title} fill className="object-contain rounded-xl"/>
              <button onClick={()=>setLb(null)} className="absolute top-4 right-4 w-10 h-10 rounded-lg bg-[#C8102E] flex items-center justify-center hover:bg-red-light z-10">
                <FiX className="text-white" size={16}/>
              </button>
              <button onClick={()=>setLb((lb-1+filtered.length)%filtered.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-lg bg-black/70 border border-white/10 flex items-center justify-center hover:bg-[#C8102E] hover:border-[#C8102E] transition-all">
                <FiChevronLeft className="text-white" size={20}/>
              </button>
              <button onClick={()=>setLb((lb+1)%filtered.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-lg bg-black/70 border border-white/10 flex items-center justify-center hover:bg-[#C8102E] hover:border-[#C8102E] transition-all">
                <FiChevronRight className="text-white" size={20}/>
              </button>
              <div className="absolute bottom-0 left-0 right-0 p-5 rounded-b-xl" style={{background:'linear-gradient(to top,rgba(0,0,0,0.85),transparent)'}}>
                <p className="font-bebas text-white text-2xl tracking-wide">{filtered[lb].title}</p>
                <p className="text-[#C8102E] text-[9px] font-bold tracking-[0.25em] uppercase">{filtered[lb].cat}</p>
              </div>
              <div className="absolute top-4 left-4 rounded-lg bg-black/70 border border-white/10 px-3 py-1.5">
                <span className="font-bebas text-white text-lg">{lb+1}</span>
                <span className="text-ghost text-sm"> / {filtered.length}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

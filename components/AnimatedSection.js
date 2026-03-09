'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
export default function AnimatedSection({children,className='',delay=0,direction='up'}){
  const [ref,inView]=useInView({triggerOnce:true,threshold:0.07});
  const v={
    up:{hidden:{opacity:0,y:64},visible:{opacity:1,y:0}},
    down:{hidden:{opacity:0,y:-64},visible:{opacity:1,y:0}},
    left:{hidden:{opacity:0,x:-80},visible:{opacity:1,x:0}},
    right:{hidden:{opacity:0,x:80},visible:{opacity:1,x:0}},
    fade:{hidden:{opacity:0},visible:{opacity:1}},
    scale:{hidden:{opacity:0,scale:0.87},visible:{opacity:1,scale:1}},
  };
  return(
    <motion.div ref={ref} className={className} initial="hidden"
      animate={inView?'visible':'hidden'} variants={v[direction]}
      transition={{duration:0.8,delay,ease:[0.16,1,0.3,1]}}>
      {children}
    </motion.div>
  );
}

import React, { useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const LiquidGlassCard = ({ 
  children, 
  className, 
  glassColor = 'rgba(255, 255, 255, 0.25)', 
  darkGlassColor = 'rgba(0, 0, 0, 0.25)',
  glassBgClass,
  enable3DEffect = true,
  clipContent = true
}) => {
  const cardRef = useRef(null);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const mouseX_abs = useMotionValue(0);
  const mouseY_abs = useMotionValue(0);

  useEffect(() => {
    const cardElement = cardRef.current;
    if (cardElement) {
      const { width, height } = cardElement.getBoundingClientRect();
      mouseX_abs.set(width / 2);
      mouseY_abs.set(height / 2);
    }
  }, []);

  const rotateX = enable3DEffect ? useTransform(mouseY, [0, 1], [15, -15]) : 0;
  const rotateY = enable3DEffect ? useTransform(mouseX, [0, 1], [-15, 15]) : 0;
  
  const displacementScale = useTransform([mouseX, mouseY], ([x, y]) => {
    if (!enable3DEffect) return 10;
    const dx = x - 0.5;
    const dy = y - 0.5;
    const distance = Math.sqrt(dx * dx + dy * dy);
    return 10 + distance * 60;
  });

  const handleMouseMove = (event) => {
    if (!enable3DEffect) return;
    const { clientX, clientY, currentTarget } = event;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    
    mouseX_abs.set(clientX - left);
    mouseY_abs.set(clientY - top);
    mouseX.set((clientX - left) / width);
    mouseY.set((clientY - top) / height);
  };

  const handleMouseLeave = (event) => {
    if (!enable3DEffect) return;
    const { width, height } = event.currentTarget.getBoundingClientRect();
    mouseX.set(0.5);
    mouseY.set(0.5);
    mouseX_abs.set(width / 2);
    mouseY_abs.set(height / 2);
  };

  const backgroundClasses = glassBgClass 
   ? glassBgClass 
    : 'bg-[--glass-color] dark:bg-[--dark-glass-color]';

  return (
    <>
      <svg style={{ display: 'none' }}>
        <filter id="glass-distortion">
          <feTurbulence type="turbulence" baseFrequency="0.008" numOctaves="2" result="noise" />
          <motion.feDisplacementMap 
            in="SourceGraphic" 
            in2="noise" 
            scale={displacementScale} 
          />
        </filter>
      </svg>

      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          '--glass-color': glassColor,
          '--dark-glass-color': darkGlassColor,
        }}
        className={`relative ${clipContent ? 'overflow-hidden' : ''} bg-transparent ${className || ''}`}
      >
        <div className="absolute inset-0 z-10 rounded-lg backdrop-blur-[4px] filter-[url(#glass-distortion)] saturate-120 brightness-115"></div>
        
        <div className={`absolute inset-0 z-20 rounded-lg ${backgroundClasses}`}></div>

        <motion.div
          className="absolute inset-0 z-30 rounded-lg shadow-[inset_1px_1px_1px_rgba(255,255,255,0.75)] dark:shadow-[inset_1px_1px_1px_rgba(255,255,255,0.15)]"
          style={{
            background: useTransform(
              [mouseX_abs, mouseY_abs],
              ([x, y]) => `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 30%, rgba(255,255,255,0) 60%)`
            ),
          }}
        ></motion.div>

        <div className="relative z-40 h-full">
          {children}
        </div>
      </motion.div>
    </>
  );
};

export default LiquidGlassCard;
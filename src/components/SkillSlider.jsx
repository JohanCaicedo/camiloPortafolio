import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { SkillCard } from "./SkillCard.jsx";

export default function SkillSlider({ skills }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  
  const trackRef = useRef(null);
  const containerRef = useRef(null);

  const x = useMotionValue(0);

  const doubledSkills = [...skills, ...skills];

  const animationDuration = skills.length * 2.5;

  useEffect(() => {
    const controls = animate(x, -trackRef.current.scrollWidth / 2, {
      ease: "linear",
      duration: animationDuration < 30 ? 30 : animationDuration,
      repeat: Infinity,
      repeatType: "loop",
    });

    if (isHovered || isDragging) {
      controls.stop();
    }

    return () => controls.stop();
  }, [x, skills.length, animationDuration, isHovered, isDragging]);
  
  const progress = useTransform(x, (v) => {
    const totalWidth = trackRef.current ? trackRef.current.scrollWidth / 2 : 0;
    if (totalWidth === 0) return 0;
    return ( (v / totalWidth) % 1) * -100;
  });

  const [indicatorWidth, setIndicatorWidth] = useState(0);

  useEffect(() => {
    const calculateIndicatorWidth = () => {
      const containerWidth = containerRef.current?.offsetWidth || 0;
      const trackWidth = trackRef.current?.scrollWidth / 2 || 0;
      if (trackWidth > 0) {
        setIndicatorWidth((containerWidth / trackWidth) * 100);
      }
    };
    calculateIndicatorWidth();
    window.addEventListener('resize', calculateIndicatorWidth);
    return () => window.removeEventListener('resize', calculateIndicatorWidth);
  }, [skills]);

  const scrollbarX = useTransform(progress, (v) => {
    const scrollbarWidth = containerRef.current?.offsetWidth || 0;
    const handleWidth = (indicatorWidth / 100) * scrollbarWidth;
    return (v / 100) * (scrollbarWidth - handleWidth);
  });
  
  return (
    <motion.div
      ref={containerRef}
      className="relative"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="overflow-hidden cursor-grab"
      >
        <motion.div
          ref={trackRef}
          className="flex gap-4"
          style={{ x }}
          drag="x"
          dragConstraints={{
            left: -trackRef.current?.scrollWidth / 2 || 0,
            right: 0,
          }}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
        >
          {doubledSkills.map((skill, index) => (
            <SkillCard
              key={`${skill.title}-${index}`}
              {...skill}
            />
          ))}
        </motion.div>
      </motion.div>
      
      <motion.div
        className="absolute bottom-2 left-0 w-full h-1.5 px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className="bg-black/20 dark:bg-white/20 rounded-full h-full w-full relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 h-full bg-[#1d1735] dark:bg-[#fafaf6] rounded-full"
            style={{
              width: `${indicatorWidth}%`,
              x: scrollbarX,
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
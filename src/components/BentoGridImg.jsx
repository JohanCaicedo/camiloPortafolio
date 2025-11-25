import React from "react";
import { motion } from "framer-motion";
import LiquidGlassCard from "./LiquidGlass.jsx"; 

function BentoGrid({ areas }) {
  return (
    <div className="grid md:grid-cols-6 md:grid-rows-2 grid-cols-1 gap-4">
      {areas.map((area) => (
        <motion.a
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          key={area.id}
          href={area.link}
          className={`
            ${area.colItem}
            rounded-lg
            overflow-hidden
            relative
            block
          `}
        >
          <LiquidGlassCard
            className="h-full w-full"
            glassBgClass={area.bgColor} 
          >
            <div className="relative h-full p-4">
              <h3 className={`text-left font-bold text-2xl mb-4 z-10 relative ${area.textColor}`}>
                {area.title}
              </h3>
              <div className="rounded-lg overflow-hidden" style={{ borderRadius: '8px' }}>
                {area.video ? (
                  <video
                    className={`w-full h-full object-cover ${area.classImg || ''}`}
                    src={area.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    Tu navegador no soporta el elemento de video.
                  </video>
                ) : area.img ? (
                  <img
                    className={`w-full h-full object-cover ${area.classImg || ''}`}
                    src={area.img}
                    alt={area.title}
                  />
                ) : null}
              </div>
            </div>
          </LiquidGlassCard>
        </motion.a>
      ))}
    </div>
  );
}

export default BentoGrid;
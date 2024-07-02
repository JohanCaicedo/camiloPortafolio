import React from "react";
import { motion } from "framer-motion";

function BentoGrid({ areas }) {
  return (
    <div className="grid md:grid-cols-6 md:grid-rows-2 sm:grid-cols-1 sm:grid-rows-5 gap-4">
      {areas.map((area) => (
        <motion.a
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          key={area.id}
          href={area.link}
          className={`
            ${area.bgColor}
            ${area.textColor}
            ${area.colItem}
            rounded-lg
            overflow-hidden
            relative
          `}
        >
          <div className="relative h-full p-4">
            <h3 className="text-left font-bold text-2xl mb-4 z-10 relative">
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
        </motion.a>
      ))}
    </div>
  );
}

export default BentoGrid;
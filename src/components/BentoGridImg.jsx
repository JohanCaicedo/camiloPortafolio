import React from "react";
import {motion} from "framer-motion"

function BentoGrid({ areas }) {
  return (
    <div className="grid md:grid-cols-6 md:grid-rows-2 sm:grid-cols-1 sm:grid-rows-5 gap-4">
      {areas.map((area) => (
       
       <motion.a
          whileHover={{ scale:1.02 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          key={area.id}
          href={area.link}
          className={`
            ${area.bgColor}
            ${area.textColor}
            ${area.colItem}
            rounded-lg
            


            
          `}
        >
          <div>
            <h3
            className="text-left font-bold text-2xl pl-4 pt-4"
            >
              {area.title}
            </h3>
            {area.img && (
              
              <img
                className="p-4 w-full max-h-full object-contain rounded-lg"        
                src={area.img} 
                alt={area.title}
                width={area.width}
                height={area.height}
              />
            )}
          </div>
        </motion.a>

        
      ))}
    </div>
  );
}

export default BentoGrid;


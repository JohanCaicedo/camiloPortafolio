import React from "react";

function BentoGrid({ areas }) {
  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 ">
      {areas.map((area) => (
       
       <a
          key={area.id}
          href={area.link}
          className={`
            ${area.bgColor}
            ${area.textColor}
            ${area.colItem}
            rounded-lg
            hover:scale-105 
            duration-300 
            transition-transform 
            ease-in-out  

            
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
                className= "m-auto rounded-lg p-2"           
                src={area.img}
                alt={area.title}
              />
            )}
          </div>
        </a>

        
      ))}
    </div>
  );
}

export default BentoGrid;


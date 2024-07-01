import React, { useState } from 'react';

const ExperienceItem = ({ title, company, description, date }) => (
  <div className="mb-10 ms-4">
    <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border bg-white border-[#7d7385] dark:border-[#fafaf6] dark:bg-[#a3cd9c]" />
    <p className="mb-1 text-sm font-light leading-none text-[1d1735] dark:text-[#fafaf6]">{date}</p>
    
    <h3 className="text-lg font-semibold text-[#1d1735] dark:text-[#fafaf6] text-warp-base">{title}</h3>
    <p className="text-md font-medium text-[#1d1735] dark:text-[#fafaf6] opacity-80">{company}</p>
    <p className="mb-4 opacity-80 text-base font-normal text-[##fafaf6] dark:text-[#fafaf6] text-pretty">{description}</p>
  </div>
);

const ExperienceList = ({ experience }) => {
  const [showAll, setShowAll] = useState(false);

  const toggleItems = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="relative">
      <ol className="relative border-s border-[1d1735] dark:border-[1d1735]">
        {experience.slice(0, showAll ? experience.length : 2).map((exp, index) => (
          <ExperienceItem key={index} {...exp} />
        ))}
      </ol>
      <button
        onClick={toggleItems}
        className="mt-2 text-[#232930] dark:text-blue-100 font-semibold underline"
      >
        {showAll ? 'Show Less 👆' : 'Show More 👇'}
      </button>
    </div>
  );
};

export default ExperienceList;
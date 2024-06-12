import React, { useState } from 'react';

const ExperienceItem = ({ title, description, link, date }) => (
  <li className="mb-10 ms-4">
    <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border bg-white border-[#7d7385] dark:border-[#fafaf6] dark:bg-[#97acc6]" />
    <time className="mb-1 text-sm font-light leading-none text-[1d1735] dark:text-[#fafaf6]">{date}</time>
    <h3 className="text-lg font-semibold text-[#1d1735] dark:text-[#fafaf6] text-warp-base">{title}</h3>
    <p className="mb-4 opacity-80 text-base font-normal text-[##fafaf6] dark:text-[#fafaf6] text-pretty">{description}</p>
    {link && (
      <a
        href={link}
        className="inline-flex items-center px-4 py-2 text-sm font-medium text-[1d1735] bg-[685af0] border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-7
                00 dark:bg-[685af0] dark:text-[#fafaf6] dark:border-[#fafaf6] dark:hover:text-[#546bf2] dark:hover:bg-[#fafaf6] dark:focus:ring-[#546bf2]"
      >
        Learn more{' '}
        <svg
          className="w-3 h-3 ms-2 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a>
    )}
  </li>
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
        className="mt-2 text-blue-600 dark:text-blue-100 font-semibold underline"
      >
        {showAll ? 'Show Less' : 'Show More'}
      </button>
    </div>
  );
};

export default ExperienceList;


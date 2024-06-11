import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import '../styles/global.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex justify-between items-center py-5 mb-8 w-full max-w-[1120px] mx-auto px-4 md:px-0">
      <div className="group relative overflow-hidden w-16 h-16">
        <a href="../camiloPortfolio" className="block w-full h-full">
          <img
            width="200"
            height="200"
            className="rounded-full w-full h-full object-cover opacity-100 transition-all duration-300 group-hover:opacity-0 group-hover:scale-110"
            src="https://media.licdn.com/dms/image/D4E03AQFmXTu7s8BSog/profile-displayphoto-shrink_200_200/0/1715217947266?e=1721865600&v=beta&t=ecBallBXH7v9OHUYNq_2Ds0jdHGtvhPvZSIhftsE3ps"
            alt="Logo de Camilo Caicedo"
          />
          <img
            width="200"
            height="200"
            className="rounded-full w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110"
            src="https://firebasestorage.googleapis.com/v0/b/camilo-portfolio-77b8a.appspot.com/o/Foxy-Blink-NBG.gif?alt=media&token=49a368b2-c0d9-424e-9d45-955a8e905b5e"
            alt="Logo alternativo de Camilo Caicedo"
          />
        </a>
      </div>
      <button id="menu-button" className="block md:hidden" onClick={toggleMenu}>
        <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
      
      <nav id="menu" className={`md:flex flex-col md:flex-row gap-y-2 md:gap-x-10 mt-4 md:mt-0 text-[#1d1735] dark:text-[#fafaf6]  ${isMenuOpen ? 'block' : 'hidden'}`}>
        
        <a href="../camiloPortfolio/#about" className="text-center md:text-left block p-4 mb:bg-white hover:text-[#e36f53] hover:font-semibold">About</a>
        <a href="../camiloPortfolio/#projects" className="text-center md:text-left block p-4 mb:bg-white hover:text-[#e36f53] hover:font-semibold">Projects</a>
        <a href="../camiloPortfolio/#experience" className="text-center md:text-left block p-4 mb:bg-white hover:text-[#e36f53] hover:font-semibold">Experience</a>
        <a href="../camiloPortfolio/#education" className="text-center md:text-left block p-4 mb:bg-white hover:text-[#e36f53] hover:font-semibold">Education</a>
      </nav>
      <ThemeToggle />
    </header>
  );
};

export default Header;

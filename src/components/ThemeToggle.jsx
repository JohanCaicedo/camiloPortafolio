import { useState, useEffect } from 'react';

const ThemeToggle = () => {

  const [isDark, setIsDark] = useState(true);


  useEffect(() => {

    if (typeof window !== 'undefined' && window.localStorage) {
      const savedTheme = localStorage.getItem('theme');

      setIsDark(savedTheme ? savedTheme === 'dark' : true);   
      const htmlElement = document.documentElement;
      if (savedTheme === 'dark') {
          htmlElement.classList.add('dark');
      } else {
          htmlElement.classList.remove('dark');
      }
    }
  }, []); 
  useEffect(() => {

    if (typeof document !== 'undefined') {
      const htmlElement = document.documentElement;
      
      if (isDark) {
        htmlElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        document.documentElement.setAttribute('data-theme', 'dark');
      } else {
        htmlElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        document.documentElement.setAttribute('data-theme', 'light');
      }
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prevIsDark => !prevIsDark);
  };

  return (
    <button type="button" onClick={toggleTheme}>
      {isDark ? '☀️' : '🌙'}
    </button>
  );
};

export default ThemeToggle;
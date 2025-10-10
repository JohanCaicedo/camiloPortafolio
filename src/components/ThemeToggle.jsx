import { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Initialize darkMode state based on localStorage
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' ? true : false;
  });

  useEffect(() => {
    // Update the document's class list based on darkMode
    if (document.readyState === 'complete') {
      updateTheme();
    } else {
      // Add a MutationObserver to handle DOMContentLoaded
      const observer = new MutationObserver(updateTheme);
      observer.observe(document.documentElement, {
        childList: true,
        subtree: true,
      });
    }
  }, [darkMode]);

  const updateTheme = () => {
    if (document.documentElement.classList.contains('dark')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
    document.documentElement.classList.toggle('dark', darkMode);
  };

  return (
    <button type="button" onClick={() => updateTheme()}>
      {darkMode ? '☀️' : '🌙'}
    </button>
  );
};

export default ThemeToggle;
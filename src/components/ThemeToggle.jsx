import { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Verificar si estamos en el navegador (window está definido)
    if (typeof window !== 'undefined') { 
      const savedTheme = localStorage.getItem("theme");
      const initialDarkMode = savedTheme === "dark";
      setDarkMode(initialDarkMode);

      if (initialDarkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, []); // El useEffect se ejecuta solo una vez al montar el componente en el cliente

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (darkMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    }
  }, [darkMode]); // Este useEffect se ejecuta cuando darkMode cambia

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button type="button" onClick={toggleTheme}>
      {darkMode ? "☀️" : "🌙"}
    </button>
  );
};

export default ThemeToggle;

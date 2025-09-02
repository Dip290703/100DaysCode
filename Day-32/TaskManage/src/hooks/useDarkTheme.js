import { useState, useEffect } from "react";

const useDarkMode = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
  const root = window.document.documentElement;

  root.classList.remove('dark', 'light');

  if (theme === 'dark') {
    root.classList.add('dark');
  } else {
    root.classList.add('light');  // Optional, for your own CSS
  }

  localStorage.setItem('theme', theme);

}, [theme]);


  return [theme, setTheme];
};

export default useDarkMode;

import React from 'react'
import logo from "../assets/logo-mobile.svg"
import useDarkMode from '../hooks/useDarkTheme';
const Header = () => {
      const [theme, setTheme] = useDarkMode();
  return (
    <div className='p-4 fixed left-0 bg-white dark:bg-[#2b2c37] z-50 right-0'>
        <header className='flex justify-between dark:text-white items-center'>
                 <img src={logo} alt="logo" />
                 <h1>Tgj</h1>
        </header>
         
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="p-2 rounded button-theme mt-5"
      >
        {theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}
      </button>
    </div>
  )
}

export default Header
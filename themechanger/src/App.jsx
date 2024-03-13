import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const bgClass = theme === 'light' ? 'bg-white' : 'bg-gray-800';
  const btnbgClass = theme === 'light' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800';

  
  return (
    <div className={`h-screen flex justify-center items-center ${bgClass}`}>
      <button
        className={`font-bold py-2 px-4 rounded-md shadow-sm ${btnbgClass}`}
        onClick={toggleTheme}
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default App;

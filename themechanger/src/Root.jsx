import React from 'react';
import { ThemeProvider, ThemeContext } from './ThemeContext';
import App from './App';


function Root() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

export default Root;
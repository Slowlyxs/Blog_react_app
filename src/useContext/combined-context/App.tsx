import React, { useState } from 'react';
import { ThemeContext } from './ThemeContext';
import { LanguageContext } from './LanguageContext';
import Settings from './Settings';

export default function App() {
  const [theme, setTheme] = useState('light');
  const [lang, setLang] = useState('es');

  return (
    <ThemeContext.Provider value={theme}>
      <LanguageContext.Provider value={lang}>
        <Settings />
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
}
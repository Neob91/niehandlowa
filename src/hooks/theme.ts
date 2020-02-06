import React, { useEffect, useRef, useState } from 'react';

const localStorageKey = 'theme';
const localTheme = window.localStorage.getItem(localStorageKey) || null;

export const useThemeToggle = <T extends string>(themes: T[]): [T, () => void] => {
  const [theme, setTheme] = useState(themes.indexOf(localTheme as T) !== -1 ? localTheme as T : themes[0]);

  const toggleTheme = (): void => {
    const newTheme = themes[(themes.indexOf(theme) + 1) % themes.length];

    setTheme(newTheme);
    window.localStorage.setItem(localStorageKey, newTheme);
  };

  return [theme as T, toggleTheme];
};

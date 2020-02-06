import React from 'react';

import { themeSwitchStyle } from './style';

interface Props {
  onThemeToggle(): void;
  theme: any;
}

export const ThemeSwitch: React.FC<Props> = ({ onThemeToggle, theme }) => {
  return (
    <div className={themeSwitchStyle(theme)} onClick={onThemeToggle}>
      <span>
        {theme.name === 'dark' ? 'włącz' : 'wyłącz' } światło
      </span>
    </div>
  );
};

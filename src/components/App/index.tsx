import React from 'react';
import { cx } from 'emotion';
import { getNextSunday, isCommerceAllowed, isDateSunday } from 'niedziele';

import { FutureSundays, Logo, ThemeSwitch, Heading, Signature } from '@/components';
import { useThemeToggle } from '@/hooks';
import { Theme, getTheme } from '@/themes';
import { appStyle } from './style';

const themes = [Theme.Light, Theme.Dark];

export const App = () => {
  const [themeName, toggleTheme] = useThemeToggle(themes);
  const theme = getTheme(themeName);

  const today = new Date();
  const sundayToday = isDateSunday(today);

  const sunday = sundayToday ? today : getNextSunday(today);
  const commerceAllowed = isCommerceAllowed(sunday);

  return (
    <div className={appStyle(theme)}>
      <div>
        <Logo theme={theme} />
        <ThemeSwitch theme={theme} onThemeToggle={toggleTheme} />
      </div>
      <div />
      <div>
        <Heading commerceAllowed={commerceAllowed} isSunday={sundayToday} />
      </div>
      <div />
      <div>
        <FutureSundays />
      </div>
      <div>
        <Signature theme={theme} />
      </div>
      <div />
    </div>
  );
};

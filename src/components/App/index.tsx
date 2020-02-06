import React from 'react';
import { cx } from 'emotion';
import { getNextSunday, isCommerceAllowed, isTodaySunday } from 'niedziele';

import { FutureSundays, Logo, ThemeSwitch, Heading, Signature } from '@/components';
import { useThemeToggle } from '@/hooks';
import { Theme, getTheme } from '@/themes';
import { appStyle } from './style';

const themes = [Theme.Light, Theme.Dark];

export const App = () => {
  const [themeName, toggleTheme] = useThemeToggle(themes);
  const sundayToday = isTodaySunday();
  const sunday = sundayToday ? new Date() : getNextSunday(new Date());
  const commerceAllowed = isCommerceAllowed(sunday);
  const theme = getTheme(themeName);

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

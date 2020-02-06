import { darkTheme } from './dark';
import { lightTheme } from './light';

export enum Theme {
  Light = 'light',
  Dark = 'dark'
}

const themes = {
  [Theme.Light]: { ...lightTheme, name: Theme.Light },
  [Theme.Dark]: { ...darkTheme, name: Theme.Dark },
};

export const getTheme = (theme: Theme) => themes[theme];

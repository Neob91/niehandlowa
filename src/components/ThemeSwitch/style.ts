import { css } from 'emotion';
import { Theme } from '@/themes';

export const themeSwitchStyle = theme => css`
  height: 18px;
  line-height: ${theme.name === Theme.Dark ? '16px' : '15px'};
  padding: 0 0 0 ${theme.name === Theme.Dark ? '24px' : '18px'};

  cursor: pointer;
  color: ${theme.colors.themeSwitch};
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.04em;
  opacity: 0.5;

  background-image: url(${theme.assets.themeSwitch});
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: left center;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }

  @media (max-width: 900px) {
    height: 20px;
    width: 20px;
    margin: 0 0 5px;
    padding: 0;
    opacity: 1;

    background-position: right center;

    & > span {
      display: none;
    }
  }
`;

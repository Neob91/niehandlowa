import { css } from 'emotion';

export const topStyle = theme => css`
  margin: 0 0 0 1px;

  height: 20px;
  width: 204px;

  background-image: url(${theme.assets.logo});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: left;
`;

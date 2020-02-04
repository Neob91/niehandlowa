import { css } from 'emotion';

export const logoStyle = css`
  position: absolute;
  left: 24px;
  top: 24px;

  color: #ddd;
  font-size: 32px;
  font-variant: small-caps;
  letter-spacing: 6px;

  @media screen and (max-width: 800px) {
    left: 8px;
    top: 8px;
    font-size: 12px;
    letter-spacing: 1px;
  }
`;

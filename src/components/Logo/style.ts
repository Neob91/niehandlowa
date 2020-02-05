import { css } from 'emotion';

export const logoStyle = css`
  position: absolute;
  left: 24px;
  top: 14px;

  color: #ddd;
  font-size: 32px;
  font-variant: small-caps;
  letter-spacing: 6px;

  @media screen and (max-width: 800px) {
    left: 16px;
    top: 10px;
    font-size: 16px;
    letter-spacing: 1px;
  }
`;

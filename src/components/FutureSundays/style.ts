import { css } from 'emotion';

export const futureStyle = css`
  & > div:first-child {
    font-size: 26px;
    font-weight: bold;
    margin: 0 0 36px;
  }

  @media (max-width: 900px) {
    & > div:first-child {
      font-size: 14px;
      margin-bottom: 16px;
    }
  }
`;

import { css } from 'emotion';

export const headingStyle = ({ commerceAllowed }) => css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 140px;
  padding: 0 0 0 47px;

  border-width: 0 0 0 25px;
  border-style: solid;
  border-color: ${commerceAllowed ? '#00a66a' : '#c10348'};

  & > div:first-child {
    font-size: 26px;
    font-weight: bold;
  }

  & > div:last-child {
    font-family: 'Playfair Display', serif;
    font-size: 100px;
    font-weight: 900;
    line-height: 85px;
    text-transform: uppercase;
  }

  @media (max-width: 900px) {
    height: 61px;
    padding-left: 24px;
    border-left-width: 20px;

    & > div:first-child {
      font-size: 14px;
    }

    & > div:last-child {
      font-size: 36px;
      line-height: 54px;
    }
  }
`;

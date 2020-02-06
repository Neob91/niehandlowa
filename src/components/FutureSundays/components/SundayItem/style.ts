import { css } from 'emotion';

export const sundayItemStyle = ({ isPast }) => css`
  display: flex;
  justify-content: space-between;
  opacity: ${isPast ? '0.25' : '1'};

  &:not(:first-child) {
    margin: 21px 0 0;
  }

  & > div:first-child {
    font-family: 'Playfair Display', serif;
    font-weight: 900;
    font-size: 36px;
    line-height: 48px;
  }

  & > div:last-child {
    font-size: 26px;
    line-height: 33px;
    opacity: ${isPast ? '1' : '0.5'};
  }

  @media (max-width: 900px) {
    &:not(:first-child) {
      margin: 12px 0 0;
    }

    & > div:first-child {
      font-size: 24px;
      line-height: 32px;
    }

    & > div:last-child {
      font-size: 16px;
      line-height: 20px;
    }
  }
`;

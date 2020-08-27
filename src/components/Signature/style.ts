import { css } from 'emotion';

export const signatureStyle = theme => css`
  position: relative;

  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
  opacity: 0.5;

  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      color: ${theme.colors.linkHover};
      text-decoration: underline;
    }
  }

  @media (max-width: 900px) {
    font-size: 12px;
    line-height: 20px;
    text-align: center;

    & > div:nth-child(3) {
      margin: 14px 0 0;
    }
  }

  @media (min-width: 901px) {
    & > div:nth-child(3) {
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }
`;

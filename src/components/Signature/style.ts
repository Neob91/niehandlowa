import { css } from 'emotion';

export const signatureStyle = theme => css`
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
  }
`;

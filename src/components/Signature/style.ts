import { css } from 'emotion';

export const signatureStyle = css`
  position: absolute;
  left: 80px;
  bottom: 16px;

  color: #666;
  font-size: 10px;
  text-align: center;

  & > a {
    text-decoration: none;
    color: #999;

    &:hover {
      color: #1177bb;
    }
  }

  @media screen and (max-width: 800px) {
    left: 20px;
  }
`;

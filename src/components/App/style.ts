import { css } from 'emotion';

export const appStyle = css`
  box-sizing: border-box;
  padding: 100px 0 0;
  height: 100%;

  color: #eee;
  background-color: #663a3a;

  font-size: 17px;
  font-family: 'Open Sans', Arial, Tahoma, sans-serif;
  font-variant: small-caps;
  letter-spacing: 2px;

  & > div {
    position: relative;

    box-sizing: border-box;
    padding: 120px 80px 40px;
    margin: auto;
    width: 800px;

    background-color: #0a0a0a;
    border: 1px solid #ff0000;
  }

  @media screen and (max-width: 800px) {
    padding: 0;
    font-size: 12px;

    & > div {
      padding: 50px 20px 20px;
      width: 100%;
      border-width: 2px;
    }
  }
`;

export const appGreenStyle = css`
  background-color: #3a663a;

  & > div {
    border: 1px solid #00ff00;
  }
`;

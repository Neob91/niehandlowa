import { css } from 'emotion';

export const appStyle = theme => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
  padding: 0 44px;

  color: ${theme.colors.text};
  background-color: ${theme.colors.background};
  font-family: 'Source Sans Pro', sans-serif;
  transition: background-color 0.2s ease-in-out, 0.75s color ease-in-out;

  & > div {
    width: 100%;
    max-width: 1016px;
  }

  & > div:first-child {
    box-sizing: border-box;

    display: flex;
    justify-content: space-between;
    align-items: center;

    flex: 4 0 89px;
    max-height: 166px;
  }

  & > div:nth-child(2) {
    flex: 4 0 11px;
    max-height: 21px;
  }

  & > div:nth-child(4) {
    flex: 4 0 60px;
    max-height: 147px;
  }

  & > div:nth-child(6) {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    flex: 4 0 100px;
  }

  & > div:last-child {
    flex: 3 0 30px;
    max-height: 102px;
  }

  @media (max-width: 900px) {
    padding: 0;

    & > div {
      width: 100%;
      flex-grow: 0;
    }

    & > div:first-child, & > div:nth-child(5) {
      width: calc(100% - 88px);
    }

    & > div:nth-child(3) {
      max-height: 140px;
    }

    & > div:last-child {
      flex-basis: 120px;
    }
  }
`;

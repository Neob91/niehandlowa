import { css } from 'emotion';

export const futureStyle = css``;
export const futureItemsStyle = css`
  margin: 16px 0 0;
  font-size: 14px;

  & > div {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #333;
    padding: 4px;
    margin: 8px 0 0;
  }

  @media screen and (max-width: 800px) {
    font-size: 12px;
  }
`;

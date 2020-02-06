import React from 'react';
import { cx } from 'emotion';

import { headingStyle } from './style';

interface Props {
  commerceAllowed: boolean;
  isSunday: boolean;
}

export const Heading: React.FC<Props> = ({ commerceAllowed, isSunday }) => {
  let className = headingStyle;

  return (
    <div className={headingStyle({ commerceAllowed })}>
      <div>
        {isSunday ? 'Dzisiaj' : 'W tym tygodniu'} jest niedziela
      </div>
      <div>
        {commerceAllowed ? 'handlowa' : 'niehandlowa'}
      </div>
    </div>
  );
};

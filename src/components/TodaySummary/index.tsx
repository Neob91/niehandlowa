import React from 'react';
import { cx } from 'emotion';

import { summaryStyle, summaryGreenStyle } from './style';

interface Props {
  commerceAllowed: boolean;
}

export const TodaySummary: React.FC<Props> = ({ commerceAllowed }) => {
  let className = summaryStyle;

  if (commerceAllowed) {
    className = cx(className, summaryGreenStyle);
  }

  return (
    <div className={className}>
      Dzisiaj jest niedziela{' '}
      {commerceAllowed ? <strong>handlowa</strong> : <strong>niehandlowa</strong>}
    </div>
  );
};

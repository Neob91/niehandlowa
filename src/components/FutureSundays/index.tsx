import React from 'react';
import { getCommerceSundays } from 'niedziele';

import { futureStyle } from './style';
import { SundayItem } from './components';

export const FutureSundays = () => {
  const year = new Date().getFullYear();
  return (
    <div className={futureStyle}>
      <div>
        Wszystkie niedziele handlowe w {year}
      </div>
      <div>
        {getCommerceSundays(year).map(d => <SundayItem key={d.getTime()} date={d} />)}
      </div>
    </div>
  );
};

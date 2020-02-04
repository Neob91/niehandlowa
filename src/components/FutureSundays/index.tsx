import React from 'react';
import { getCommerceSundays } from 'niedziele';

import { getDateDisplay, getTimeUntilDateDisplay } from '@/utils';
import { futureStyle, futureItemsStyle } from './style';

export const FutureSundays = () => {
  const year = new Date().getFullYear();
  return (
    <div className={futureStyle}>
      <div>
        Wszystkie niedziele handlowe w {year}
      </div>
      <div className={futureItemsStyle}>
        {getCommerceSundays(year).map(d => (
          <div key={d}>
            <div>{getDateDisplay(d)}</div>
            <div>{getTimeUntilDateDisplay(d)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

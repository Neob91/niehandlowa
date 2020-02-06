import React from 'react';

import { getDateDisplay, getDaysOffset, getDaysOffsetDisplay } from '@/utils';
import { sundayItemStyle } from './style';


interface Props {
  date: Date;
}

export const SundayItem: React.FC<Props> = ({ date }) => {
  const days = getDaysOffset(date);

  return (
    <div className={sundayItemStyle({ isPast: days < 0 })}>
      <div>{getDateDisplay(date)}</div>
      <div>{getDaysOffsetDisplay(days)}</div>
    </div>
  );
};

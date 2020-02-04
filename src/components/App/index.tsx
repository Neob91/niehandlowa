import React from 'react';
import { cx } from 'emotion';
import { getNextSunday, isCommerceAllowed, isTodaySunday } from 'niedziele';

import { FutureSundays, Logo, Section, ThisWeekSummary, TodaySummary } from '@/components';
import { appStyle, appGreenStyle } from './style';

export const App = () => {
  const sundayToday = isTodaySunday();
  const sunday = sundayToday ? new Date() : getNextSunday(new Date());
  const commerceAllowed = isCommerceAllowed(sunday);
  let className = appStyle;

  if (commerceAllowed) {
    className = cx(className, appGreenStyle);
  }

  return (
    <div className={className}>
      <div>
        <Logo />
        <Section>
          {sundayToday ?
            <TodaySummary commerceAllowed={commerceAllowed} /> :
            <ThisWeekSummary commerceAllowed={commerceAllowed} />}
        </Section>
        <Section>
          <FutureSundays />
        </Section>
      </div>
    </div>
  );
};

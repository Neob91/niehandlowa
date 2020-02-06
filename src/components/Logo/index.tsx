import React from 'react';

import { topStyle } from './style';

interface Props {
  theme: any;
}

export const Logo: React.FC<Props> = ({ theme }) => <div className={topStyle(theme)} />;

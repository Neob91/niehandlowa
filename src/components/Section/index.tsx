import React from 'react';
import { sectionStyle } from './style';

export const Section: React.FC = ({ children }) => (
  <div className={sectionStyle}>
    {children}
  </div>
);

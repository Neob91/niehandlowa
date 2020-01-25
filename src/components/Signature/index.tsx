import React from 'react';
import { signatureStyle } from './style';

export const Signature: React.FC = ({ children }) => (
  <div className={signatureStyle}>
    Made by <a href="https://github.com/neob91">Andrzej Bartosiński</a>
  </div>
);

import React from 'react';
import { signatureStyle } from './style';

interface Props {
  theme: any;
}

export const Signature: React.FC<Props> = ({ children, theme }) => (
  <div className={signatureStyle(theme)}>
    <div>
      Coded by <a href="https://github.com/neob91">Andrzej Bartosiński</a>
    </div>
    <div>
      Designed by <a href="https://dribbble.com/konradkolasa">Konrad Kolasa</a>
    </div>
  </div>
);

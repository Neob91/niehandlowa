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
    <div>
      <iframe
        src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Fniehandlowa&width=114&layout=button&action=like&size=small&share=true&height=20&appId"
        width="114" height="20" style={{border: "none", overflow: "hidden"}} scrolling="no" frameBorder="0" allowTransparency={true} allow="encrypted-media"
      />
    </div>
  </div>
);

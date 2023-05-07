import { css } from 'styled-components';
import { FontStyle } from './types';

export const fontStyleCss = css<{ fontStyle: FontStyle }>`
  font-style: ${p => p.fontStyle};
`;

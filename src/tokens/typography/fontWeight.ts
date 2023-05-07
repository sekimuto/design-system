import { css } from 'styled-components';

import { FontWeight, FontWeightSchema } from './types';

const FontWeightToken: FontWeightSchema = {
  light: 300,
  normal: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  heavy: 900
};

export const fontWeightCss = css<{ fontWeight: FontWeight }>`
  font-weight: ${p => FontWeightToken[p.fontWeight]}
`;

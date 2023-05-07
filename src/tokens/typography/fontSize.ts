import { css } from 'styled-components';
import { FontSize, FontSizeSchema } from './types';

/**
 * フォントサイズ(rem)の定数オブジェクト
 */
const FontSizeToken: FontSizeSchema = {
  xs: 0.667,
  s: 0.75,
  m: 1,
  l: 1.2,
  xl: 1.5
}

export const fontSizeCss = css<{ fontSize: FontSize }>`
  font-size: ${p => FontSizeToken[p.fontSize]}rem;
  font-size-adjust: 0.6;
`;

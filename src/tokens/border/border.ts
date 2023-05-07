import { css } from 'styled-components';

import { HEX } from '../color/types';
import { BorderWidth } from './types';

export const borderCss = css<{ borderWidth: BorderWidth, borderColor: HEX }>`
  border: ${p => p.borderWidth}px solid ${p => p.borderColor};
`;

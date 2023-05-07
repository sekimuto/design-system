import { css } from 'styled-components';
import { RadiusLevel, RadiusSchema } from './types';

export const RadiusToken: RadiusSchema = {
  r0: 0,
  r2: 4,
  r4: 8,
  r8: 16,
  r16: 32,
  r99: 10000
};

export const radiusCss = css<{ radius: RadiusLevel }>`
  border-radius: ${p => RadiusToken[p.radius]}px;
`;

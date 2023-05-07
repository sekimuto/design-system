import { css } from 'styled-components';
import { Space, SpaceSchema } from './types';

/**
 * space sizeからrem値を計算する
 * @param space 
 * @returns 対応するrem値
 */
const getSpaceRem = (space?: Space) => space ? `${space / 4}rem` : 'auto';

export const marginCss = css<{ margin: SpaceSchema }>`
  margin-top: ${p => getSpaceRem(p.margin.t)};
  margin-right: ${p => getSpaceRem(p.margin.r)};
  margin-bottom: ${p => getSpaceRem(p.margin.b)};
  margin-left: ${p => getSpaceRem(p.margin.l)};
`;

export const paddingCss = css<{ padding: SpaceSchema }>`
  padding-top: ${p => getSpaceRem(p.padding.t)};
  padding-right: ${p => getSpaceRem(p.padding.r)};
  padding-bottom: ${p => getSpaceRem(p.padding.b)};
  padding-left: ${p => getSpaceRem(p.padding.l)};
`;

import { css } from 'styled-components';
import { HeadingLevel, HeadingBaseProps } from './types';
import { fontSizeCss } from '../../tokens/typography/fontSize';
import { FontSize } from '../../tokens/typography/types';

/**
 * Heading Levelとfont sizeのMap
 */
const HeadingFontSizeMap: { [key in HeadingLevel]: FontSize } = {
  1: 'xl',
  2: 'l',
  3: 'm',
  4: 's',
  5: 'xs',
  6: 'xs'
};

// export const headingBaseCss = css<HeadingBaseProps>`
//   font-size: ${fontSizeCss}
// `;

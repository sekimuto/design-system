import { ReactNode } from 'react';
import { FontSize } from '../../tokens/typography/types';

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export type HeadingProps = {
  /**
   * Headingのレベル
   */
  level: HeadingLevel,
  children?: ReactNode
};

export type HeadingBaseProps = {
  fontSize: FontSize;
};

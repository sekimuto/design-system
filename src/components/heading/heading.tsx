import { FC, memo } from 'react';
import styled, { StyledComponent } from 'styled-components';

import { HeadingLevel, HeadingProps } from './types';

const StyledH1 = styled.h1`

`;

const StyledH2 = styled.h2`

`;

const StyledH3 = styled.h3`

`;

const StyledH4 = styled.h4`

`;

const StyledH5 = styled.h5`

`;

const StyledH6 = styled.h6`

`;

/**
 * Heading LevelとStyled ComponentのMapping
 */
const LevelMap: { [key in HeadingLevel]: StyledComponent<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span', any> } = {
  1: StyledH1,
  2: StyledH2,
  3: StyledH3,
  4: StyledH4,
  5: StyledH5,
  6: StyledH6
} as const;

export const Heading: FC<HeadingProps> = memo(
  (props) => {
    const H = LevelMap[props.level]
    return (
      <H>{ props.children }</H>
    )
  }
);

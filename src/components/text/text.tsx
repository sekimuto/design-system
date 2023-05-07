import { memo, useMemo } from 'react';
import styled from 'styled-components';

import { StyledTextProps, TextProps } from './types';
import { getStyledTextProps } from './style';
import { fontSizeCss } from '../../tokens/typography/fontSize';
import { fontWeightCss } from '../../tokens/typography/fontWeight';

const StyledText = styled.span<StyledTextProps>`
  color: ${p => p.fontColor};
  ${fontSizeCss}
  ${fontWeightCss}
`;

export const Text = memo(
  (props: TextProps) => {
    // StyledTextに渡すPropsを作成してメモする
    const styledTextProps = useMemo(() => getStyledTextProps(
      {
        size: props.size,
        color: props.color,
        weight: props.weight
      }
    ), [
      props.size,
      props.color,
      props.weight
    ])
    return (
      <StyledText {...styledTextProps}>
        { props.text }
      </StyledText>
    )
  }
);

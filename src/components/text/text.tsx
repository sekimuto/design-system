import styled from 'styled-components';
import { TextProps } from './types';

const StyledText = styled.span`

`;

export const Text = (props: TextProps) => {
  props.size ??= 'm'
  return (
    <StyledText>

    </StyledText>
  )
};

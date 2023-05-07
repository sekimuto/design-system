import React, { useMemo } from 'react';
import styled from 'styled-components';

import { ButtonProps, StyledButtonProps } from './types';
import { getStyledButtonCss } from './styles';

import { radiusCss } from '../../tokens/radius/radius';
import { paddingCss } from '../../tokens/space/space';

const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${p => p.backgroundColor};
  color: ${p => p.textColor};
  border: 1px solid ${p => p.borderColor};
  ${radiusCss}
  ${paddingCss}
  cursor: ${p => p.disabled ? 'normal' : 'pointer'};
  &:hover {
    background-color: ${p => p.hovered.backgroundColor};
    color: ${p => p.hovered.textColor};
    border: 1px solid ${p => p.hovered.borderColor};
    opacity: ${p => p.hovered.opacity}%;
  }
`;

/**
 * __Button__
 */
export const Button = React.memo(
  React.forwardRef<HTMLButtonElement, ButtonProps>(
    (props, ref) => {
      // StyledButtonに渡すpropsを作ってメモしておく
      const styledButtonProps = useMemo(() => getStyledButtonCss(
        props.shape,
        props.semantics,
        props.isDisabled
      ), [
        props.shape,
        props.semantics,
        props.isDisabled
      ])
      return (
        <StyledButton {...styledButtonProps} ref={ref}>
          { props.children }
        </StyledButton>
      )
    }
  )  
)

import { memo, forwardRef } from 'react';
import { TextLinkProps } from './types';

import styled from 'styled-components';

const TextLinkContainer = styled.span`
  
`;

/**
 * __TextLink__
 */
export const TextLink = memo(
  forwardRef<HTMLAnchorElement, TextLinkProps>((
    props,
    ref
    ) => {
      return (
      <TextLinkContainer { ...props }>
        <a ref={ref}>
          { props.text }
        </a>
      </TextLinkContainer>
      )
    }
  )
);

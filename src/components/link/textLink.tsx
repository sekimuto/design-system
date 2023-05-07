import React, { useMemo } from 'react';
import { TextLinkProps } from './types';

import styled from 'styled-components';

const TextLinkContainer = styled.span`
  
`;

/**
 * __TextLink__
 */
export const TextLink = React.memo(
  React.forwardRef((
    props: TextLinkProps,
    ref: React.Ref<HTMLAnchorElement>
    ) => {
      return (
      <TextLinkContainer { ...props }>
        <a ref={ref} />
      </TextLinkContainer>
      )
    }
  )
);

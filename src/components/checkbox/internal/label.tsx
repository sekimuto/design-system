import styled from 'styled-components';
import { memo, forwardRef } from 'react';

import { LabelProps } from '../types'; 

export const Label = memo(
  forwardRef<HTMLLabelElement, LabelProps>((props, ref) => {
    return (
      <>
        <label ref={ref} />
      </>
    )
  })
);

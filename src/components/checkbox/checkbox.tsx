import { memo, forwardRef } from 'react';
import { CheckboxProps } from './types';

// import { Label } from './internal/label';

export const Checkbox = memo(
  forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
    return (
      <>
        <input ref={ref} />
      </>
    )
  })
);

import { StoryTitle } from './title';
import { StoryDescription } from './description';
import { StoryDisplayProps } from './types';

import { memo } from 'react';

export const StoryDisplay = memo(
  (props: StoryDisplayProps) => {
    return (
      <>
        <StoryTitle>{ props.title }</StoryTitle>
        <StoryDescription>{ props.description }</StoryDescription>
        { props.children }
      </>
    )
  }
);

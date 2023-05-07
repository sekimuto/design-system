import { StoryTitle } from './title';
import { StoryDescription } from './description';
import { StoryHeaderProps } from './types';

import { FC } from 'react';

export const StoryHeader: FC<StoryHeaderProps> = (props) => {
  return (
    <>
      <StoryTitle>{ props.title }</StoryTitle>
      <StoryDescription>{ props.description }</StoryDescription>
    </>
  )
};

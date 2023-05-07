import { Meta, StoryObj } from '@storybook/react';
import { FC } from 'react';

import { StoryHeader } from '../../stories/header';
import { StoryHeaderProps } from '../../stories/types';

import { Button } from './button';
import { ButtonProps } from './types';

const ButtonDisplay: FC<ButtonProps> = (props) => {
  const title = 'Button';
  const description = "ボタンコンポーネント";

  const headerCss: StoryHeaderProps = {
    title,
    description
  };

  return (
    <>
      <StoryHeader {...headerCss}/>
      <Button {...props}/>
    </>
  )
};

export default {
  title: 'COMPONENTS/button',
  component: ButtonDisplay
} as Meta<typeof ButtonDisplay>;

export const TextButton = {
  args: {
    shape: 'rounded',
    semantics: 'primary',
    isDisabled: false,
    children: '送信'
  }
} as StoryObj<typeof ButtonDisplay>;

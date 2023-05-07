import { Meta, StoryObj } from '@storybook/react';
import { FC } from 'react';
import { StoryDisplay } from '../../stories/display';

import { Text } from './text';
import { TextProps } from './types';

const TextDisplay: FC<TextProps> = (props) => {
  const title = 'Text';
  const description = 'テキスト一般に使用されるコンポーネント'

  const displayProps = {
    title,
    description
  };

  return (
    <StoryDisplay {...displayProps}>
      <Text {...props} />
    </StoryDisplay>
  )
};

export default {
  title: 'COMPONENTS/text',
  component: TextDisplay
} as Meta<typeof TextDisplay>;

export const Index = {
  args: {
    text: 'あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。',
    weight: 'bold',
    color: '#481274'
  }
} as StoryObj<typeof TextDisplay>;

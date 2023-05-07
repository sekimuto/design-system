import { FC } from 'react';
import styled from 'styled-components';

import { StoryObj, Meta } from '@storybook/react';
import { fontSizeCss } from './fontSize';
import { FontSize } from './types';
import { fontFamilyCss } from './fontFamily';

const TypographyDisplayContainer = styled.div`
  display: flex;
  flex-flow: column;
  row-gap: 24px;
  ${fontFamilyCss}
`;

const TypographyLineContainer = styled.div`
  display: flex;
  flex-flow: row
  width: 100%;
  align-items: center;
`;

const SizeIndexWrapper = styled.div`
  width 50px;
`

const SampleTextWrapper = styled.div<{ fontSize: FontSize }>`
  ${fontSizeCss}
  flex: 1;
`

const SampleText: FC<{ fontSize: FontSize }> = (props) => (
  <SampleTextWrapper {...props}>
    {'あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。'}
  </SampleTextWrapper>
)

const TypographyDisplay: FC = () => {
  const fontSizes: FontSize[] = ['xs', 's', 'm', 'l', 'xl'];
  return (
    <TypographyDisplayContainer>
      {fontSizes.map((s) => (
        <TypographyLineContainer>
          <SizeIndexWrapper>{ s }</SizeIndexWrapper>
          <SampleText fontSize={s} />
        </TypographyLineContainer>
      ))}
    </TypographyDisplayContainer>
  )
};

export default {
  title: 'TOKENS/Typography',
  component: TypographyDisplay
} as Meta<typeof TypographyDisplay>;

export const Index: StoryObj<typeof TypographyDisplay> = {
  args: {}
};

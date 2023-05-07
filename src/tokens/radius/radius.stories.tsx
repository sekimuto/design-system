import { FC } from 'react';

import styled from 'styled-components';

import { Meta, StoryObj } from '@storybook/react'
import { LightPalette } from '../color/light';
import { RadiusLevel } from './types';
import { radiusCss } from './radius';

type CardProps = {
  radius: RadiusLevel;
};

const Card = styled.div<CardProps>`
  background-color: ${ LightPalette.neutral[300] };
  width: 100px;
  height: 150px;
  ${radiusCss}
`;

const CardContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  column-gap: 32px;
  row-gap: 16px;
`;

const CardTitleContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  column-gap: 4px;
`;

const RadiusDisplay: FC = () => {
  const radius: RadiusLevel[] = ['r0', 'r2', 'r4', 'r8', 'r16', 'r99'];
  return (
    <CardContainer>
      { radius.map((r) => (
      <CardTitleContainer>
        <p>{`level: ${r}`}</p>
        <Card radius={r} />
      </CardTitleContainer>
      ))}
    </CardContainer>
  )
};

export default {
  title: 'TOKENS/Radius',
  component: RadiusDisplay
} as Meta<typeof RadiusDisplay>;

export const Index: StoryObj<typeof RadiusDisplay> = {
  args: {}
};

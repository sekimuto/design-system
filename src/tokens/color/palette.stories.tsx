import { FC } from 'react';

import styled, { useTheme } from 'styled-components';
import { ColorSemantics, HEX, PaletteSchema } from './types';

import { Meta, StoryObj } from '@storybook/react';
import { LightPalette } from './light';

const ColorChip = styled.div<{ color: HEX }>`
  background-color: ${p => p.color};
  height: 32px;
  width: 32px;
  border-radius: 10000px;
`;

const ColorGradientContainer = styled.div`
  display: flex;
  gap: 16px;
`;

const ColorGradient: FC<{semantics: ColorSemantics, palette: PaletteSchema}> = ({semantics, palette}) => {
  const tone = palette[semantics];
  return (
    <ColorGradientContainer>
      { Object.entries(tone).map(([, color]) => <ColorChip color={ color }/>) }
    </ColorGradientContainer>
  )
};

const PaletteContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Palette: FC = () => {
  const semantics: ColorSemantics[] = [
    'primary',
    'secondary',
    'tertiary',
    'neutral',
    'aux',
    'error',
    'warning',
    'info',
    'success'
  ];
  const theme = useTheme();
  return (
    <PaletteContainer>
      { semantics.map(
        (s) => (
          <>
            <p>{ s }</p>
            <ColorGradient semantics={s} palette={LightPalette} />
          </>
        )
      ) }
    </PaletteContainer>
  )
}

export default {
  title: 'TOKENS/Palette',
  component: Palette
} as Meta<typeof Palette>;

export const Index: StoryObj<typeof Palette> = {
  args: {}
};

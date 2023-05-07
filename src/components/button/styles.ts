import { ButtonColor, Semantics, Shape, StyledButtonProps } from './types';
import { RadiusLevel } from '../../tokens/radius/types';
import { HEX } from '../../tokens/color/types';
import { LightPalette } from '../../tokens/color/light';
import { SpaceSchema } from '../../tokens/space/types';

const ButtonShapeMap: { [key in Shape]: RadiusLevel } = {
  rounded: 'r99',
  square: 'r2'
};

const ButtonColorMap: { [key in Semantics]: ButtonColor } = {
  primary: {
    background: LightPalette.primary[500],
    text: LightPalette.neutral[50],
    border: LightPalette.primary[500],
    hovered: {
      background: LightPalette.primary[500],
      text: LightPalette.neutral[50],
      border: LightPalette.primary[500],
      opacity: 80
    }
  },
  secondary: {
    background: LightPalette.secondary[500],
    text: LightPalette.neutral[50],
    border: LightPalette.secondary[500],
    hovered: {
      background: LightPalette.secondary[500],
      text: LightPalette.neutral[50],
      border: LightPalette.secondary[500],
      opacity: 80
    }
  },
}

/**
 * StyledButtonにあてるpropsを取得する
 * 
 * @param shape 
 * @param isDisabled 
 * @returns StyledButton用のProps
 */
export const getStyledButtonCss = (
  shape: Shape,
  semantics: Semantics,
  isDisabled: boolean
): StyledButtonProps => {
  const radius = ButtonShapeMap[shape];
  const { background, text, border, hovered } = ButtonColorMap[semantics];
  const padding: SpaceSchema = {
    t: 2,
    r: 4,
    b: 2,
    l: 4
  }
  return {
    radius,
    disabled: isDisabled,
    backgroundColor: background,
    textColor: text,
    borderColor: border,
    hovered: {
      backgroundColor: hovered.background,
      textColor: hovered.text,
      borderColor: hovered.border,
      opacity: hovered.opacity
    },
    padding
  }
};

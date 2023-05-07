import { LightPalette } from '../../tokens/color/light';
import { DarkPalette } from '../../tokens/color/dark';
import { GetStyledTextPropsArgs, StyledTextProps } from './types';

export const getStyledTextProps = ({
  size,
  color,
  weight
}: GetStyledTextPropsArgs): StyledTextProps => {
  size ??= 'm';
  color ??= LightPalette.neutral[950];
  weight ??= 'normal';

  return {
    fontSize: size,
    fontColor: color,
    fontWeight: weight
  }
};

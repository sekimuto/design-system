import { LightPalette } from '../../tokens/color/light';
import { DarkPalette } from '../../tokens/color/dark';
import { FontSize, FontWeight } from '../../tokens/typography/types';
import { HEX } from '../../tokens/color/types';

export type TextProps = {
  text: string;
  size?: FontSize;
  color?: HEX;
  weight?: FontWeight;
};

export type GetStyledTextPropsArgs = {
  size?: FontSize;
  color?: HEX;
  weight?: FontWeight;
};

export type StyledTextProps = {
  fontSize: FontSize;
  fontColor: HEX;
  fontWeight: FontWeight;
};

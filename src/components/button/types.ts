import { ReactNode } from "react";
import { RadiusLevel } from "../../tokens/radius/types";
import { HEX } from "../../tokens/color/types";
import { SpaceSchema } from "../../tokens/space/types";

export type Shape = 'rounded' | 'square';
export type Semantics = 'primary' | 'secondary';

export type ButtonProps = {
  /**
   * ボタンの形
   */
  shape: Shape;
  /**
   * primary / secondary
   */
  semantics: Semantics;
  isDisabled: boolean;
  children?: ReactNode;
};

export type StyledButtonProps = {
  radius: RadiusLevel;
  backgroundColor: HEX;
  textColor: HEX;
  borderColor: HEX;
  hovered: {
    backgroundColor: HEX;
    textColor: HEX;
    borderColor: HEX;
    opacity: number;
  }
  disabled: boolean;
  padding: SpaceSchema;
};

export type ButtonColor = {
  background: HEX;
  text: HEX;
  border: HEX;
  hovered: {
    background: HEX;
    text: HEX;
    border: HEX;
    opacity: number;
  }
};

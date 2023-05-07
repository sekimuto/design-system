import { DarkPalette } from './dark';
import { LightPalette } from './light';
import { ColorLevel, ColorSemantics, ThemeMode } from './types';

/**
 * デザインシステムで指定されたカラーコードをHEXコードに変換する
 * 
 * @param semantic semantic区分（primary, secondary, ...）
 * @param level level区分（100, 200, ...）
 * @param mode テーマモード（light | dark）
 * @returns HEXカラーコード
 */
export const getColor = (
  semantic: ColorSemantics,
  level: ColorLevel,
  mode: ThemeMode
) => {
  const palette = mode === 'dark' ? DarkPalette : LightPalette;
  return palette[semantic][level];
};

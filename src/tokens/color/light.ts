import { PaletteSchema } from './types';

/**
 * __LightPalette__
 * 
 * Light Modeのカラーパレット
 * 
 * `LightPalette.{semantics}[level]`でアクセスする。
 * 
 * ex) `LightPalette.primary[300]`
 */
export const LightPalette: PaletteSchema = {
  primary: {
    50: '#659EBB',
    100: '#5292B3',
    200: '#3078A1',
    300: '#135E8F',
    400: '#00457D',
    500: '#00356B',
    600: '#002759',
    700: '#001C47',
    800: '#001336',
    900: '#000c24',
    950: '#00091b'
  },
  secondary: {
    50: '#D9F1F3',
    100: '#C7E4E8',
    200: '#A4CAD1',
    300: '#84B0B9',
    400: '#6797A2',
    500: '#4F7E8B',
    600: '#396774',
    700: '#27505D',
    800: '#183A45',
    900: '#0D262e',
    950: '#081C23'
  },
  tertiary: {
    50: '#F7E5E2',
    100: '#F0D6D1',
    200: '#E0BBB2',
    300: '#D1A196',
    400: '#C28B7C',
    500: '#B37564',
    600: '#A3624F',
    700: '#94513C',
    800: '#85412B',
    900: '#75331D',
    950: '#6E2C17'
  },
  neutral: {
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#E5E5E5',
    300: '#D4D4D4',
    400: '#A3A3A3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
    950: '#0A0A0A'
  },
  aux: {
    50: '#E8EAF3',
    100: '#DBDDE7',
    200: '#C1C4CE',
    300: '#A8ABB6',
    400: '#90939D',
    500: '#787b85',
    600: '#61646C',
    700: '#4a4d54',
    800: '#34363B',
    900: '#1E1F23',
    950: '#131416'
  },
  success: {
    50: '#dcf3db',
    100: '#bbe7b9',
    200: '#81d07d',
    300: '#50b84f',
    400: '#2da031',
    500: '#178820',
    600: '#097116',
    700: '#015910',
    800: '#00410d',
    900: '#002a09',
    950: '#001e06'
  },
  info: {
    50: '#D7E7F4',
    100: '#BBD4EA',
    200: '#87B2D5',
    300: '#5B94C0',
    400: '#357CAA',
    500: '#166795',
    600: '#005680',
    700: '#004B6B',
    800: '#003d56',
    900: '#002F41',
    950: '#002736'
  },
  warning: {
    50: '#F8DEAB',
    100: '#F1D091',
    200: '#E2B860',
    300: '#D4A234',
    400: '#C68E0D',
    500: '#b88100',
    600: '#A97800',
    700: '#9B6E00',
    800: '#8D6400',
    900: '#7E5B00',
    950: '#775500'
  },
  error: {
    50: '#EBBEBE',
    100: '#E3A3A3',
    200: '#D47272',
    300: '#C44747',
    400: '#B52121',
    500: '#A60000',
    600: '#960000',
    700: '#870000',
    800: '#780000',
    900: '#690000',
    950: '#610000'
  },
};

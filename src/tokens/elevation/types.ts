/**
 * ElevationのSemantic区分
 */
export type ElevationSemantic =
  | 'default'
  | 'raised'
  | 'sunken'
  | 'overlay';

export type ElevationAction =
  | 'default';

export type ElevationCssSettings = {
  boxShadow: {
    xOffset: number;
    yOffset: number;
    blurRadius: number;
    spreadRadius: number;
    opacity: number;
  };
  zIndex: number;
};

export type ElevationSchema = Readonly<{ [key in ElevationSemantic]: { [key in ElevationAction]: ElevationCssSettings } }>;
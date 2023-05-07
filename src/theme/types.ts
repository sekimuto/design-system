import { PaletteSchema } from '../tokens/color/types';
import { ElevationSchema } from '../tokens/elevation/types';
import { FontSizeSchema, FontWeightSchema } from '../tokens/typography/types';
import { RadiusSchema } from '../tokens/radius/types';

export type ThemeSchema = Readonly<{
  palette: PaletteSchema;
  elevation: ElevationSchema;
  typography: {
    fontSize: FontSizeSchema;
    fontWeight: FontWeightSchema;
  };
  radius: RadiusSchema;
}>;

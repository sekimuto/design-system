export type FontSize = 'xs' | 's' | 'm' | 'l' | 'xl';

export type FontStyle = 'normal' | 'italic' | 'oblicque';

export type FontWeight =
  | 'light'
  | 'normal'
  | 'medium'
  | 'semiBold'
  | 'bold'
  | 'extraBold'
  | 'heavy';

export type FontSizeSchema = Readonly<{ [key in FontSize]: number }>

export type FontWeightSchema = Readonly<{ [key in FontWeight]: number }>;

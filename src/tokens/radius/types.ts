export type RadiusLevel =
  | 'r0'
  | 'r2'
  | 'r4'
  | 'r8'
  | 'r16'
  | 'r99';

export type RadiusSchema = Readonly<{ [key in RadiusLevel]: number }>;

export type Space = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16;

export type Position = 't' | 'b' | 'l' | 'r';

export type SpaceSchema = Readonly<Partial<{ [key in Position]: Space }>>;

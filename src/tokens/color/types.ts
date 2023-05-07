/**
 * デザインシステムで使用する色をSemanticsの観点で分類した一覧
 */
export type ColorSemantics =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'neutral'
  | 'aux'
  | 'error'
  | 'warning'
  | 'info'
  | 'success';

/**
 * デザインシステムで使用する色の、Semantics以下のグラデーション項目
 */
export type ColorLevel =
  | 50
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | 950;

/**
 * カラーパレットのSchema
 * SemanticsとLevelの組み合わせに対してHEXカラーコードが設定される
 */
export type PaletteSchema = Readonly<{ [key in ColorSemantics]: { [key in ColorLevel]: HEX } }>

/**
 * HEXカラーコード
 * 
 * ex) `#FFFFFF`
 */
export type HEX = `#${string}`

/**
 * カラーパレットのテーマ種類。
 * LightとDarkの２種類。
 */
export type ThemeMode = 'light' | 'dark';

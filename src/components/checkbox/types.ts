import { ChangeEvent, HTMLProps, MouseEventHandler } from 'react';

export type Size = 'sm' | 'md' | 'lg';

export type CheckboxProps = {
  /**
   * Checkboxのサイズ
   */
  size: Size;
  /**
   * チェックがされているかのflag
   */
  isChecked: boolean;
  /**
   * チェックボックスが利用不可能かのflag
   */
  isDisabled: boolean;
  /**
   * チェックが必須かどうかのflag
   */
  isRequired: boolean;
  /**
   * チェックボックスのラベル
   * 
   * ラベルもクリックポイントの範囲になる
   */
  label: string;
  /**
   * チェックされたり外されたりしたときに呼び出すアクション
   * 
   * @param e イベント
   * @returns void
   */
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export type LabelProps = {
  isDisabled: boolean;
  onClick: MouseEventHandler;
} & HTMLProps<HTMLInputElement>;

import { memo } from 'react';
import cls from './Text.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';

type TextFontFamily = 'work' | 'space';
type TextSize = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'base' | 'caption';
type TextColor = 'white' | 'gray';

interface TextProps {
  className?: string;
  family?: TextFontFamily;
  size?: TextSize;
  color?: TextColor;
  children: string;
}

export const Text = memo(function Text(props: TextProps) {
  const { className, family = 'work', size = 'base', color = 'white', children } = props;
  const additionals = [className, cls[family], cls[size], cls[color]];
  return <p className={classNames(cls.Text, {}, additionals)}>{children}</p>;
});

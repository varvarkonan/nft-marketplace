import { memo, type ReactNode } from 'react';
import cls from './Stack.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';

type StackDirection = 'row' | 'column';
type StackGap = '0' | '5' | '10' | '12' | '15' | '20' | '25' | '30' | '40' | '50';
type StackAlignItems = 'start' | 'center' | 'end' | 'stretch' | 'baseline';
type StackJustifyContent = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';

interface StackProps {
  className?: string;
  gap?: StackGap;
  direction?: StackDirection;
  align?: StackAlignItems;
  justify?: StackJustifyContent;
  maxWidth?: boolean;
  children: ReactNode;
}

const gapMapper: Record<StackGap, string> = {
  '0': cls.gap0,
  '5': cls.gap5,
  '10': cls.gap10,
  '12': cls.gap12,
  '15': cls.gap15,
  '20': cls.gap20,
  '25': cls.gap25,
  '30': cls.gap30,
  '40': cls.gap40,
  '50': cls.gap50,
};

const alignMapper: Record<StackAlignItems, string> = {
  start: cls.alignStart,
  baseline: cls.alignBaseline,
  center: cls.alignCenter,
  end: cls.alignEnd,
  stretch: cls.alignStretch,
};

const justifyMapper: Record<StackJustifyContent, string> = {
  start: cls.justifyStart,
  between: cls.justifyBetween,
  center: cls.justifyCenter,
  end: cls.justifyEnd,
  around: cls.justifyAround,
  evenly: cls.justifyEvenly,
};

export const Stack = memo(function Stack(props: StackProps) {
  const {
    className,
    gap = '0',
    direction = 'row',
    align = 'start',
    justify = 'start',
    maxWidth = false,
    children,
  } = props;
  const additionals = [gapMapper[gap], cls[direction], alignMapper[align], justifyMapper[justify], className];
  return <div className={classNames(cls.Stack, { [cls.maxWidth]: maxWidth }, additionals)}>{children}</div>;
});

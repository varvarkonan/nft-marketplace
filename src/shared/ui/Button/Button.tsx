import { type ButtonHTMLAttributes, memo } from 'react';
import cls from './Button.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';

export type ButtonSize = 'primary' | 'secondary' | 'tertiary';
export type ButtonVariant = 'filled' | 'outlined';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  size: ButtonSize;
  variant: ButtonVariant;
  Icon?: React.VFC<React.SVGProps<SVGSVGElement>>;
  children: string;
}

export const Button = memo(function Button(props: ButtonProps) {
  const { className, size, variant, children, Icon = undefined } = props;
  const additionals = [className, cls[size], cls[variant]];
  if (Icon !== undefined) {
    return (
      <button className={classNames(cls.Button, {}, additionals)}>
        {<Icon className={classNames(cls.icon, {}, [])} />}
        {children}
      </button>
    );
  }
  return <button className={classNames(cls.Button, {}, [className])}>{children}</button>;
});

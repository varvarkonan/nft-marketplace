import { type ButtonHTMLAttributes, memo } from 'react';
import cls from './Button.module.scss';
import { classNames } from 'src/shared/lib/helpers/classNames/classNames';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: string;
}

export const Button = memo(function Button(props: ButtonProps) {
  const { className, children } = props;
  return <div className={classNames(cls.Button, {}, [className])}>{children}</div>;
});

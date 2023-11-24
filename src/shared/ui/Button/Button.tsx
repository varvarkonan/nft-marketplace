import { type ButtonHTMLAttributes, memo } from 'react';
import cls from './Button.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import Eye from '@/shared/assets/icons/Eye.svg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: string;
}

export const Button = memo(function Button(props: ButtonProps) {
  const { className, children } = props;
  return (
    <button className={classNames(cls.Button, {}, [className])}>
      <Eye />
      {children}
    </button>
  );
});

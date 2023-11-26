import { type ReactNode, memo } from 'react';
import cls from './Input.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Stack } from '../Stack';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  LeftIcon?: ReactNode;
  RightIcon?: ReactNode;
}

export const Input = memo(function Input(props: InputProps) {
  const { className, placeholder, LeftIcon = undefined, RightIcon = undefined } = props;
  return (
    <Stack
      direction="row"
      gap="12"
      align="center"
      justify="center"
      className={classNames(cls.InputWrapper, {}, [className])}
    >
      {LeftIcon != null && (
        <Stack align="center" className={cls.leftIcon}>
          {LeftIcon}
        </Stack>
      )}
      <input placeholder={placeholder} className={cls.input} />
      {RightIcon != null && (
        <Stack align="center" className={cls.rightIcon}>
          {RightIcon}
        </Stack>
      )}
    </Stack>
  );
});

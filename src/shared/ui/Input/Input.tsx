import { type ReactNode, type InputHTMLAttributes, memo } from 'react';
import cls from './Input.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Stack } from '../Stack';

type OmittedInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>;

interface InputProps extends OmittedInputProps {
  className?: string;
  LeftIcon?: ReactNode;
  RightIcon?: ReactNode;
  // value: string | number;
  // onChange: (value: string) => void;
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

import { type CSSProperties, memo, useMemo } from 'react';
import cls from './Avatar.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import DefaultAvatar from '@/shared/assets/avatars/avatar-14.png';
import { AppImage } from '../Image';
import { Text } from '../Text';

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
}

export const Avatar = memo(function Avatar(props: AvatarProps) {
  const { className, src, size = 100, alt } = props;
  const style = useMemo<CSSProperties>(
    () => ({
      width: size,
      height: size,
    }),
    [size]
  );
  const errorFallback = <AppImage src={DefaultAvatar} />;
  return (
    <AppImage
      style={style}
      src={src}
      alt={alt}
      errorFallback={errorFallback}
      fallback={<Text text="..." />}
      className={classNames(cls.Avatar, {}, [className])}
    />
  );
});

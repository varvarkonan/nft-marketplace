import { type ReactElement, memo, type ImgHTMLAttributes, useLayoutEffect, useState } from 'react';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  fallback?: ReactElement;
  errorFallback?: ReactElement;
}

export const AppImage = memo(function AppImage(props: AppImageProps) {
  const { className, src, alt, errorFallback = undefined, fallback = undefined, ...otherProps } = props;
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useLayoutEffect(() => {
    const img = new Image();
    img.src = src ?? '';
    img.onload = () => {
      setIsLoading(false);
    };
    img.onerror = () => {
      setIsError(true);
      setIsLoading(false);
    };
  }, [src]);

  if (isLoading && fallback !== undefined) {
    return fallback;
  }
  if (isError && errorFallback !== undefined) {
    return errorFallback;
  }
  return <img className={className} src={src} alt={alt} {...otherProps} />;
});

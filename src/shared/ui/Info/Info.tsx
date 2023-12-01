import { memo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Stack } from '../Stack';
import { Text } from '../Text';

interface InfoProps {
  className?: string;
  header: string;
  desc: string;
}

export const Info = memo(function Info(props: InfoProps) {
  const { className, header, desc } = props;
  return (
    <Stack className={classNames('', {}, [className])} direction="column">
      <Text text={header} family="space" size="h4" />
      <Text text={desc} />
    </Stack>
  );
});

import { memo } from 'react';
import cls from './Timer.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Stack } from '../Stack';
import { Text } from '../Text';

interface TimerProps {
  className?: string;
}

export const Timer = memo(function Timer(props: TimerProps) {
  const { className } = props;
  return (
    <Stack gap="10" direction="column" className={classNames(cls.Timer, {}, [className])}>
      <Text text="Auction ends in:" family="space" size="caption" />
      <Stack gap="10">
        <Stack direction="column" gap="5">
          <Text text="59" size="h3" family="space" />
          <Text text="Hours" size="caption" family="space" />
        </Stack>
        <Text text=":" size="h4" family="space" />
        <Stack direction="column" gap="5">
          <Text text="59" size="h3" family="space" />
          <Text text="Minutes" size="caption" family="space" />
        </Stack>
        <Text text=":" size="h4" family="space" />
        <Stack direction="column" gap="5">
          <Text text="59" size="h3" family="space" />
          <Text text="Seconds" size="caption" family="space" />
        </Stack>
      </Stack>
    </Stack>
  );
});

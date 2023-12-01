import { memo } from 'react';
import cls from './TrendingCollection.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Stack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { AppImage } from '@/shared/ui/AppImage';
import { Avatar } from '@/shared/ui/Avatar';

interface TrendingCollectionProps {
  className?: string;
}

export const TrendingCollection = memo(function TrendingCollection(props: TrendingCollectionProps) {
  const { className } = props;
  return (
    <Stack direction="column" className={classNames(cls.TrendingCollection, {}, [className])}>
      <Stack direction="column" gap="10">
        <Text size="h3" text="Trending Collection" />
        <Text text="Checkout our weekly updated trending collection." />
      </Stack>
      <Stack gap="30" justify="between">
        <Stack>
          <Stack>
            <AppImage />
            <Stack>
              <AppImage />
              <AppImage />
              <div>
                <Text text="asd" />
              </div>
            </Stack>
          </Stack>
          <Stack>
            <Text text="asd" />
            <Stack>
              <Avatar size={24} />
              <Text text="asd" />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
});

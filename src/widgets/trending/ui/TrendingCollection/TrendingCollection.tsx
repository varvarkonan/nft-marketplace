import { memo, useEffect } from 'react';
import cls from './TrendingCollection.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Stack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { useUnit } from 'effector-react';
import { $collections, getCollectionsFx, loadCollectionsTriggered } from '../../model/store';
import { CollectionCard } from '@/entities/Collection';

interface TrendingCollectionProps {
  className?: string;
}

export const TrendingCollection = memo(function TrendingCollection(props: TrendingCollectionProps) {
  const { className } = props;
  const [collections, isLoading] = useUnit([$collections, getCollectionsFx.pending]);

  useEffect(() => {
    loadCollectionsTriggered();
  }, []);

  if (isLoading) {
    return 'loading...';
  }

  return (
    <Stack direction="column" className={classNames(cls.TrendingCollection, {}, [className])}>
      <Stack direction="column" gap="10">
        <Text size="h3" text="Trending Collection" />
        <Text text="Checkout our weekly updated trending collection." />
      </Stack>
      <Stack gap="30" justify="between">
        {collections
          .map((item) => item.id)
          .map((id) => (
            <CollectionCard id={id} key={id} />
          ))}
      </Stack>
    </Stack>
  );
});

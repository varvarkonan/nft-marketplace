import { memo, useEffect } from 'react';
import cls from './TrendingCollection.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Stack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { useUnit } from 'effector-react';
import { CollectionCard } from '@/entities/Collection';
import { $collections, getCollectionsFx, loadCollectionsTriggered } from '@/entities/Collection/model/store';

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
    <Stack direction="column" justify="center" className={classNames(cls.TrendingCollection, {}, [className])}>
      <Stack direction="column" gap="10">
        <Text size="h3" text="Trending Collection" />
        <Text text="Checkout our weekly updated trending collection." />
      </Stack>
      <Stack gap="30" justify="center">
        {collections.map((collection) => (
          <CollectionCard collection={collection} key={collection.id} />
        ))}
      </Stack>
    </Stack>
  );
});

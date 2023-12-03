import { memo } from 'react';
import cls from './CollectionCard.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { AppImage } from '@/shared/ui/AppImage';
import { Avatar } from '@/shared/ui/Avatar';
import { Stack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { type Collection } from '../../model/types';

interface CollectionCardProps {
  className?: string;
  collection: Collection;
}

export const CollectionCard = memo(function CollectionCard(props: CollectionCardProps) {
  const { className, collection } = props;
  console.log(collection);
  return (
    <div className={classNames(cls.CollectionCard, {}, [className])}>
      <Stack direction="column" gap="10">
        <Stack direction="column" gap="15">
          <AppImage src={collection.images[0]} className={cls.imgBig} />
          <Stack gap="15">
            <AppImage src={collection.images[1]} className={cls.img} />
            <AppImage src={collection.images[2]} className={cls.img} />
            <Stack justify="center" align="center" maxWidth className={cls.number}>
              <Text text={`${collection.nftsTotal}+`} size="h5" family="space" />
            </Stack>
          </Stack>
        </Stack>
        <Stack direction="column" gap="10">
          <Text text={collection.name} size="h5" />
          <Stack gap="10">
            <Avatar size={24} src={collection.artist !== undefined ? collection.artist.avatar : ''} />
            <Text text={collection.artist !== undefined ? collection.artist.name : 'name'} />
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
});

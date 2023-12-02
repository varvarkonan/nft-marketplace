import { memo } from 'react';
import cls from './CollectionCard.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { AppImage } from '@/shared/ui/AppImage';
import { Avatar } from '@/shared/ui/Avatar';
import { Stack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

interface CollectionCardProps {
  className?: string;
  id: string;
}

export const CollectionCard = memo(function CollectionCard(props: CollectionCardProps) {
  const { className, id } = props;
  return (
    <div className={classNames(cls.CollectionCard, {}, [className])}>
      CollectionCard {id}
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
    </div>
  );
});

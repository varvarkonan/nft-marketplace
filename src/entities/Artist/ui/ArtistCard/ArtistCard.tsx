import { memo } from 'react';
import cls from './ArtistCard.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { type Artist } from '../../model/types';
import { Stack } from '@/shared/ui/Stack';
import { Avatar } from '@/shared/ui/Avatar';
import { Text } from '@/shared/ui/Text';

interface ArtistCardProps {
  className?: string;
  artist: Artist;
}

export const ArtistCard = memo(function ArtistCard(props: ArtistCardProps) {
  const { className, artist } = props;
  return (
    <Stack className={classNames(cls.ArtistCard, {}, [className])}>
      <Avatar src={artist.avatar} />
      <Stack>
        <Text text={artist.name} />
        <Text text={`Total Sales: ${artist.totalSales} ETH`} />
      </Stack>
    </Stack>
  );
});

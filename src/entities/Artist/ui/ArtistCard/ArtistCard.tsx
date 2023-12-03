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
    <Stack
      direction="column"
      justify="center"
      align="center"
      gap="20"
      className={classNames(cls.ArtistCard, {}, [className])}
    >
      <Avatar src={artist.avatar} size={120} />
      <Stack direction="column" gap="5" align="center" justify="center" className={cls.artistInfo}>
        <Text text={artist.name} align="center" size="h5" className={cls.artistName} />
        <Stack gap="10">
          <Text text={'Total Sales: '} color="gray" align="right" />
          <Text text={`${artist.totalSales} ETH`} family="space" />
        </Stack>
      </Stack>
    </Stack>
  );
});

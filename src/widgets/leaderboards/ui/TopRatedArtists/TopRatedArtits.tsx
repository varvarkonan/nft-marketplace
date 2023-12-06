import { memo, useEffect } from 'react';
import cls from './TopRatedArtits.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { Stack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { Button } from '@/shared/ui/Button';
import RocketLaunchIcon from '@/shared/assets/icons/RocketLaunch.svg';
import { ArtistCard } from '@/entities/Artist/ui/ArtistCard/ArtistCard';
import { useUnit } from 'effector-react';
import { $topArtists, getTopArtistsFx, loadTopArtistsTriggered } from '@/entities/Artist/model/store';

interface TopRatedArtitsProps {
  className?: string;
}

export const TopRatedArtits = memo(function TopRatedArtits(props: TopRatedArtitsProps) {
  const { className } = props;
  const [artists, isLoading] = useUnit([$topArtists, getTopArtistsFx.pending]);
  useEffect(() => {
    loadTopArtistsTriggered();
  }, []);

  if (isLoading) {
    return 'loading...';
  }

  return (
    <Stack direction="column" gap="50" maxWidth className={classNames(cls.TopRatedArtits, {}, [className])}>
      <Stack maxWidth justify="between">
        <Stack direction="column" gap="10">
          <Text text="Top creators" size="h3" />
          <Text text="Checkout Top Rated Creators on the NFT Marketplace" />
        </Stack>
        <Button Icon={RocketLaunchIcon} size="secondary" variant="outlined">
          View Rankings
        </Button>
      </Stack>
      <Stack className={cls.artistsList}>
        {artists.map((artist, index) => (
          <ArtistCard artist={artist} rank={index + 1} key={artist.id} />
        ))}
      </Stack>
    </Stack>
  );
});

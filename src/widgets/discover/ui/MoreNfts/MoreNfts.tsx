import { memo } from 'react';
import cls from './MoreNfts.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { NFTList } from '@/entities/NFT';
import { Text } from '@/shared/ui/Text';
import { Stack } from '@/shared/ui/Stack';
import { Button } from '@/shared/ui/Button';
import EyeIcon from '@/shared/assets/icons/Eye.svg';

interface MoreNftsProps {
  className?: string;
}

export const MoreNfts = memo(function MoreNfts(props: MoreNftsProps) {
  const { className } = props;
  return (
    <Stack direction="column" gap="50" maxWidth className={classNames(cls.MoreNfts, {}, [className])}>
      <Stack align="end" justify="between" maxWidth>
        <Stack direction="column" gap="10">
          <Text text="Discover More NFTs" size="h3" />
          <Text text="Explore new trending NFTs" />
        </Stack>
        <Button size="secondary" variant="outlined" Icon={EyeIcon}>
          See All
        </Button>
      </Stack>

      <NFTList limit={3} />
    </Stack>
  );
});

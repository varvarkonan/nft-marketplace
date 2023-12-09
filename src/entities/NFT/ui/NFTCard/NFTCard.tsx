import { memo } from 'react';
import cls from './NFTCard.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { AppImage } from '@/shared/ui/AppImage';
import { Stack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { Avatar } from '@/shared/ui/Avatar';
import { type NFT } from '../../model/types';

interface NFTCardProps {
  className?: string;
  nft: NFT;
}

export const NFTCard = memo(function NFTCard(props: NFTCardProps) {
  const { className, nft } = props;

  return (
    <Stack direction="column" className={classNames(cls.NFTCard, {}, [className])}>
      <AppImage src={nft.img} width={330} height={296} />
      <Stack direction="column" gap="25" maxWidth className={cls.nftInfo}>
        <Stack direction="column" gap="5" maxWidth>
          <Text text={nft.name} size="h5" />
          <Stack gap="12">
            <Avatar src={nft.artist.avatar} size={24} />
            <Text text={nft.artist.name} family="space" />
          </Stack>
        </Stack>
        <Stack direction="row" justify="between" maxWidth>
          <Stack direction="column" gap="8">
            <Text text="Price" family="space" size="caption" color="gray" />
            <Text text={`${nft.price} ETH`} family="space" />
          </Stack>
          <Stack direction="column" gap="8">
            <Text text="Highest Bid" family="space" size="caption" color="gray" align="right" />
            <Text text={`${nft.highestBid} wETH`} family="space" align="right" />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
});

import { memo } from 'react';
import cls from './NFTCard.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { AppImage } from '@/shared/ui/AppImage';
import { Stack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { Avatar } from '@/shared/ui/Avatar';
import { type NFTSchema } from '../../model/types';

interface NFTCardProps {
  className?: string;
  nft: NFTSchema;
}

export const NFTCard = memo(function NFTCard(props: NFTCardProps) {
  const { className, nft } = props;
  return (
    <div className={classNames(cls.NFTCard, {}, [className])}>
      <AppImage src={nft.img} width={330} height={296} />
      <Stack>
        <Stack>
          <Text text={nft.name} />
          <Stack>
            <Avatar src={nft.artist.avatar} />
            <Text text={nft.artist.name} />
          </Stack>
        </Stack>
        <Stack>
          <Stack>
            <Text text="Price" family="space" size="caption" color="gray" />
            <Text text={`${nft.price} ETH`} family="space" />
          </Stack>
          <Stack>
            <Text text="Highest Bid" family="space" size="caption" color="gray" />
            <Text text={`${nft.highestBid} wETH`} family="space" />
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
});

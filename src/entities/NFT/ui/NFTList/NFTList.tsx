import { type ReactNode, memo, useEffect } from 'react';
import cls from './NFTList.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { $someNfts, getSomeNftsFx, loadSomeNftsTriggered } from '../../model/store';
import { useUnit } from 'effector-react';
import { NFTCard } from '../NFTCard/NFTCard';
import { type NFT } from '../../model/types';
import { Stack } from '@/shared/ui/Stack';

interface NFTListProps {
  className?: string;
  limit: number;
}

export const NFTList = memo(function NFTList(props: NFTListProps) {
  const { className, limit = 3 } = props;
  const [nfts, isLoading] = useUnit([$someNfts, getSomeNftsFx.pending]);

  useEffect(() => {
    loadSomeNftsTriggered(limit);
  }, [limit]);

  const renderCard = (nft: NFT): ReactNode => <NFTCard nft={nft} />;

  if (isLoading) {
    return 'loading...';
  }

  return (
    <Stack gap="30" className={classNames(cls.NFTList, {}, [className])}>
      {nfts.map((nft) => renderCard(nft))}
    </Stack>
  );
});

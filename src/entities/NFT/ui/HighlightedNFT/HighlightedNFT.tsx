import { memo, useEffect } from 'react';
import cls from './HighlightedNFT.module.scss';
import { classNames } from '@/shared/lib/helpers/classNames/classNames';
import { useUnit } from 'effector-react';
import { $nft, getNftByIdFx, loadTriggered } from '../../model/store';
import { Stack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

interface HighlightedNFTProps {
  className?: string;
}

export const HighlightedNFT = memo(function HighlightedNFT(props: HighlightedNFTProps) {
  const { className } = props;
  const [nft, isLoading] = useUnit([$nft, getNftByIdFx.pending]);

  useEffect(() => {
    loadTriggered();
  }, []);

  if (isLoading) {
    return null;
  }

  if (nft.name.length === 0) {
    return null;
  }

  return (
    <Stack direction="column" className={classNames(cls.HighlightedNFT, {}, [className])}>
      <img src={nft.img} alt="" className={cls.img} />
      <Stack gap="10" direction="column" className={cls.info}>
        <Text size="h5" text={nft.name ?? 'Loading...'} />
        <Stack gap="12">
          <img src={nft.artist.avatar.length > 0 ? nft.artist.avatar : 'cringe'} />
          <Text text={nft.artist.name ?? 'Loading...'} />
        </Stack>
      </Stack>
    </Stack>
  );
});

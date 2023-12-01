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

  return (
    <Stack direction="column" className={classNames(cls.HighlightedNFT, {}, [className])}>
      <img src="" alt="" />
      <Stack direction="column">
        <Text text={nft.name ?? 'Loading...'} />
        <Stack>
          <img />
          <Text text={nft.artistId ?? 'Loading...'} />
        </Stack>
      </Stack>
    </Stack>
  );
});

import { createEffect, createEvent, createStore, sample } from 'effector';
import { getNftById } from './services';
import { type NFTSchema } from './types';

const defaultState: NFTSchema = {
  artistId: '',
  artist: { avatar: '', createdNfts: [], id: '', name: '' },
  description: '',
  details: [],
  highestBid: 0,
  id: '',
  img: '',
  mintedOn: '',
  name: '',
  price: 0,
  tags: [],
};

export const loadTriggered = createEvent<number>();

export const getNftByIdFx = createEffect(async (nftId: number) => {
  const res = await getNftById({ nftId, _expand: 'artist' });
  return res.data;
});

sample({
  clock: loadTriggered,
  fn: (id: number): number => id,
  target: getNftByIdFx,
});

export const $nft = createStore<NFTSchema>(defaultState).on(getNftByIdFx.doneData, (_, nft) => nft);

import { createEffect, createEvent, createStore, sample } from 'effector';
import { getNftById } from './service';
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

const id = 1;

export const loadTriggered = createEvent();

export const getNftByIdFx = createEffect(async (nftId: number) => {
  const res = await getNftById({ nftId, _expand: 'artist' });
  console.log(res);
  return res.data;
});

sample({
  clock: loadTriggered,
  fn: () => id,
  target: getNftByIdFx,
});

export const $nft = createStore<NFTSchema>(defaultState).on(getNftByIdFx.doneData, (_, nft) => nft);

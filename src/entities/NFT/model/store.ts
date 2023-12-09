import { createEffect, createEvent, createStore, sample } from 'effector';
import { getNftById } from './services';
import { type NFT } from './types';

const defaultState: NFT = {
  artist: {
    avatar: '',
    createdNfts: [],
    id: '',
    name: '',
    totalSales: 0,
  },
  artistId: '',
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

export const loadNftByIdTriggered = createEvent<number>();
export const loadAmountOfNftsTriggered = createEvent<number>();

export const getNftByIdFx = createEffect(async (nftId: number) => {
  const res = await getNftById({ nftId, _expand: 'artist' });
  return res.data;
});

export const getSomeNftsFx = createEffect(async (amount: number) => {
  const res: NFT[] = [];
  for (let i = 1; i <= amount; i++) {
    res.push((await getNftById({ nftId: i, _expand: 'artist' })).data);
  }
  return res;
});

sample({
  clock: loadNftByIdTriggered,
  fn: (id: number): number => id,
  target: getNftByIdFx,
});

sample({
  clock: loadAmountOfNftsTriggered,
  fn: (amount: number) => amount,
  target: getSomeNftsFx,
});

export const $nft = createStore<NFT>(defaultState).on(getNftByIdFx.doneData, (_, payload) => payload);

export const $someNfts = createStore<NFT[]>([]).on(getSomeNftsFx.doneData, (state, params) => state.concat(params));

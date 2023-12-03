import { createEffect, createEvent, createStore, sample } from 'effector';
import { getAllArtists, getArtistById } from './services';
import { type Artist } from './types';

const defaultState: Artist = {
  avatar: '',
  createdNfts: [],
  id: '',
  name: '',
  totalSales: 0,
};

export const loadArtistTriggered = createEvent<number>();
export const loadAllArtistsTriggered = createEvent();
export const loadSomeArtistsTriggered = createEvent<number>();

export const getArtistDataByIdFx = createEffect(async (collectionId: number) => {
  const res = await getArtistById({ collectionId, _expand: 'artist' });
  return res.data;
});

export const getAllArtistsFx = createEffect(async () => {
  const res = await getAllArtists({});
  return res.data;
});

export const getSomeArtistsFx = createEffect(async (amount: number) => {
  const res: Artist[] = [];
  for (let i = 1; i <= amount; i++) {
    res.push((await getArtistById({ collectionId: i, _expand: 'artist' })).data);
  }
  return res;
});

sample({
  clock: loadArtistTriggered,
  fn: (id: number): number => id,
  target: getArtistDataByIdFx,
});

sample({
  clock: loadAllArtistsTriggered,
  target: getAllArtistsFx,
});

sample({
  clock: loadSomeArtistsTriggered,
  fn: (amount: number) => amount,
  target: getSomeArtistsFx,
});

export const $artist = createStore<Artist>(defaultState).on(getArtistDataByIdFx.doneData, (_, payload) => payload);

export const $allArtists = createStore<Artist[]>([]).on(getAllArtistsFx.doneData, (_, params) => params);

export const $someArtists = createStore<Artist[]>([]).on(getSomeArtistsFx.doneData, (_, params) => params);

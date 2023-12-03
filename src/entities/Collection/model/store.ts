import { createEffect, createEvent, createStore, sample } from 'effector';
import { getCollectionDataById, getCollections } from './services';
import { type Collection } from './types';

const defaultState: Collection = {
  artistId: '',
  artist: { avatar: '', createdNfts: [], id: '', name: '', totalSales: 0 },
  id: '',
  name: '',
  nftIds: [],
  images: [],
  nftsTotal: 0,
};

export const loadCollectionTriggered = createEvent<number>();
export const loadAllCollectionsTriggered = createEvent();
export const loadAmountOfCollectionsTriggered = createEvent<number>();

export const getCollectionDataByIdFx = createEffect(async (collectionId: number) => {
  const res = await getCollectionDataById({ collectionId, _expand: 'artist' });
  return res.data;
});

export const getAllCollectionsFx = createEffect(async () => {
  const res = await getCollections({});
  return res.data;
});

export const getSomeCollectionsFx = createEffect(async (amount: number) => {
  const res: Collection[] = [];
  for (let i = 1; i <= amount; i++) {
    res.push((await getCollectionDataById({ collectionId: i, _expand: 'artist' })).data);
  }
  return res;
});

sample({
  clock: loadCollectionTriggered,
  fn: (id: number): number => id,
  target: getCollectionDataByIdFx,
});

sample({
  clock: loadAllCollectionsTriggered,
  target: getAllCollectionsFx,
});

sample({
  clock: loadAmountOfCollectionsTriggered,
  fn: (amount: number) => amount,
  target: getSomeCollectionsFx,
});

export const $collection = createStore<Collection>(defaultState).on(
  getCollectionDataByIdFx.doneData,
  (_, payload) => payload
);

export const $collections = createStore<Collection[]>([]).on(getAllCollectionsFx.doneData, (_, params) => params);

export const $someCollections = createStore<Collection[]>([]).on(getSomeCollectionsFx.doneData, (_, params) => params);

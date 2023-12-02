import { createEffect, createEvent, createStore, sample } from 'effector';
import { getCollectionDataById, getCollections } from './services';
import { type Collection } from './types';

const defaultState: Collection = {
  artistId: '',
  artist: { avatar: '', createdNfts: [], id: '', name: '' },
  id: '',
  name: '',
  nftIds: [],
  images: [],
  nftsTotal: 0,
};

export const loadCollectionTriggered = createEvent<number>();

export const getCollectionDataByIdFx = createEffect(async (collectionId: number) => {
  const res = await getCollectionDataById({ collectionId, _expand: 'artist' });
  return res.data;
});

sample({
  clock: loadCollectionTriggered,
  fn: (id: number): number => id,
  target: getCollectionDataByIdFx,
});

export const $collection = createStore<Collection>(defaultState).on(
  getCollectionDataByIdFx.doneData,
  (_, payload) => payload
);

export const loadCollectionsTriggered = createEvent();

export const getCollectionsFx = createEffect(async () => {
  const res = await getCollections({});
  return res.data;
});

sample({
  clock: loadCollectionsTriggered,
  target: getCollectionsFx,
});

export const $collections = createStore<Collection[]>([]).on(getCollectionsFx.doneData, (_, payload) => payload);

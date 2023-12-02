import { createEffect, createEvent, createStore, sample } from 'effector';
import { getTrendingCollections } from './services';
import { type Collection } from '@/entities/Collection';

const limit = 3;

export const loadCollectionsTriggered = createEvent();

export const getCollectionsFx = createEffect(async () => {
  const res = await getTrendingCollections({});
  return res.data;
});

sample({
  clock: loadCollectionsTriggered,
  fn: () => limit,
  target: getCollectionsFx,
});

export const $collections = createStore<Collection[]>([]).on(getCollectionsFx.doneData, (_, payload) => payload);

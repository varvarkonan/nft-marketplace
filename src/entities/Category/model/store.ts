import { createEffect, createEvent, createStore, sample } from 'effector';
import { getCategoryDataById, getAllCategories } from './services';
import { type Category } from './types';

const defaultState: Category = {
  icon: '',
  id: '',
  img: '',
  name: '',
};

export const loadCategoryTriggered = createEvent<number>();
export const loadAllCategoriesTriggered = createEvent();
export const loadAmountOfCategoriesTriggered = createEvent<number>();

export const getCategoryDataByIdFx = createEffect(async (collectionId: number) => {
  const res = await getCategoryDataById({ categoryId: collectionId, _expand: 'artist' });
  return res.data;
});

export const getAllCategoriesFx = createEffect(async () => {
  const res = await getAllCategories({});
  return res.data;
});

export const getSomeCategoriesFx = createEffect(async (amount: number) => {
  const res: Category[] = [];
  for (let i = 1; i <= amount; i++) {
    res.push((await getCategoryDataById({ categoryId: i, _expand: 'artist' })).data);
  }
  return res;
});

sample({
  clock: loadCategoryTriggered,
  fn: (id: number): number => id,
  target: getCategoryDataByIdFx,
});

sample({
  clock: loadAllCategoriesTriggered,
  target: getAllCategoriesFx,
});

sample({
  clock: loadAmountOfCategoriesTriggered,
  fn: (amount: number) => amount,
  target: getSomeCategoriesFx,
});

export const $category = createStore<Category>(defaultState).on(
  getCategoryDataByIdFx.doneData,
  (_, payload) => payload
);

export const $allCategories = createStore<Category[]>([]).on(getAllCategoriesFx.doneData, (_, params) => params);

export const $someCategories = createStore<Category[]>([]).on(getSomeCategoriesFx.doneData, (_, params) => params);

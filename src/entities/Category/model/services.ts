import { apiInstance } from '@/shared/api/api';
import { type Category } from './types';
import { type AxiosPromise } from 'axios';

export interface GetCategoryDataByIdProps {
  categoryId: number;
  [x: string]: any;
}

export const getCategoryDataById = async ({
  categoryId,
  ...params
}: GetCategoryDataByIdProps): AxiosPromise<Category> => {
  return await apiInstance.get(`http://localhost:8000/categories/${categoryId}`, { params });
};

export type GetCategoryProps = Record<string, any>;

export const getAllCategories = async ({ params }: GetCategoryProps): AxiosPromise<Category[]> => {
  return await apiInstance.get(`http://localhost:8000/categories`, { params });
};

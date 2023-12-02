import { apiInstance } from '@/shared/api/api';
import { type Collection } from './types';
import { type AxiosPromise } from 'axios';

export interface GetCollectionDataByIdProps {
  collectionId: number;
  [x: string]: any;
}

export const getCollectionDataById = async ({
  collectionId,
  ...params
}: GetCollectionDataByIdProps): AxiosPromise<Collection> => {
  return await apiInstance.get(`http://localhost:8000/collections/${collectionId}`, { params });
};

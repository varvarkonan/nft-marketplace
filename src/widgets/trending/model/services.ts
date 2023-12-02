import { type AxiosPromise } from 'axios';
import { apiInstance } from '@/shared/api/api';
import { type Collection } from '@/entities/Collection';

export type GetTrendingCollectionProps = Record<string, any>;

export const getTrendingCollections = async ({ params }: GetTrendingCollectionProps): AxiosPromise<Collection[]> => {
  return await apiInstance.get(`http://localhost:8000/collections`, { params });
};

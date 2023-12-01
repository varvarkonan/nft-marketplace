import { type AxiosPromise } from 'axios';
import { type NFTSchema } from './types';
import { apiInstance } from '@/shared/api/api';

export interface GetNftByIdParams {
  nftId: number;
  [x: string]: any;
}

export const getNftById = async ({ nftId, ...params }: GetNftByIdParams): AxiosPromise<NFTSchema> => {
  return await apiInstance.get(`http://localhost:8000/nfts/${nftId}`, { params });
};

import { type AxiosPromise } from 'axios';
import { type NFT } from './types';
import { apiInstance } from '@/shared/api/api';

export interface GetNftByIdParams {
  nftId: number;
  [x: string]: any;
}

export const getNftById = async ({ nftId, ...params }: GetNftByIdParams): AxiosPromise<NFT> => {
  return await apiInstance.get(`http://localhost:8000/nfts/${nftId}`, { params });
};

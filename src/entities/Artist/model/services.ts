import { apiInstance } from '@/shared/api/api';
import { type Artist } from './types';
import { type AxiosPromise } from 'axios';

export interface GetArtistByIdProps {
  collectionId: number;
  [x: string]: any;
}

export const getArtistById = async ({
  collectionId: artistId,
  ...params
}: GetArtistByIdProps): AxiosPromise<Artist> => {
  return await apiInstance.get(`http://localhost:8000/artists/${artistId}`, { params });
};

export type GetAllArtistsProps = Record<string, any>;

export const getAllArtists = async ({ params }: GetAllArtistsProps): AxiosPromise<Artist[]> => {
  return await apiInstance.get(`http://localhost:8000/artists`, { params });
};

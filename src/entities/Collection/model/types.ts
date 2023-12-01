import { type Artist } from '@/entities/Artist';

export interface Collection {
  id: string;
  artistId: string;
  artist: Artist;
  nftsIds: string[];
  name: string;
  nftsTotal: number;
}

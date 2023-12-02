import { type Artist } from '@/entities/Artist';

export interface Collection {
  id: string;
  artistId: string;
  artist: Artist;
  nftIds: string[];
  images: string[];
  name: string;
  nftsTotal: number;
}

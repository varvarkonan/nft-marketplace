import { type Artist } from '@/entities/Artist';

export type NFTTags = 'animation' | 'illustration' | 'moon';

export interface NFTSchema {
  id: string;
  artistId: string;
  artist: Artist;
  name: string;
  img: string;
  mintedOn: string;
  description: string;
  tags: NFTTags[];
  details: string[];
  price: number;
  highestBid: number;
}

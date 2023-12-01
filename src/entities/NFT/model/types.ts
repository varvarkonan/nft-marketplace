export type NFTTags = 'animation' | 'illustration' | 'moon';

export interface NFTSchema {
  id?: string;
  artistId?: string;
  name?: string;
  img?: string;
  mintedOn?: string;
  description?: string;
  tags?: NFTTags[];
  details?: string[];
  price?: number;
  highestBid?: number;
}

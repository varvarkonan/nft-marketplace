export type { Artist } from './model/types';

export {
  $allArtists,
  $artist,
  $someArtists,
  getAllArtistsFx,
  getArtistDataByIdFx,
  getSomeArtistsFx,
  loadAllArtistsTriggered,
  loadArtistTriggered,
  loadSomeArtistsTriggered,
} from './model/store';

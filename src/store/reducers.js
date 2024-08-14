import { charactersSlice } from './slices';
import { locationsSlice } from './slices';
import { episodesSlice } from './slices';

const reducers = {
  characters: charactersSlice.reducer,
  locations: locationsSlice.reducer,
  episodes: episodesSlice.reducer
};

export default reducers;

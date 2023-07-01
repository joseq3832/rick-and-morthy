import { charactersSlice } from './slices';
import { locationsSlice } from './slices';

const reducers = {
  characters: charactersSlice.reducer,
  locations: locationsSlice.reducer
};

export default reducers;

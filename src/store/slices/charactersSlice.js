import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  isError: false,
  characters: []
};

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setCharacters: (state, action) => {
      state.characters = action.payload;
    },
    getCharactersFetch: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    setErrorCharacters: (state) => {
      state.isError = true;
      state.isLoading = false;
    },
    resetState: () => initialState
  }
});

export const { setLoading, setCharacters, setErrorCharacters, getCharactersFetch, resetState } =
  charactersSlice.actions;

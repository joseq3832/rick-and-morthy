import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  characters: [],
  isLoading: false,
  isError: false,
  page: 1,
  totalPages: ''
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
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setTotalPages: (state, action) => {
      state.totalPages = action.payload;
    },
    resetState: () => initialState
  }
});

export const {
  setLoading,
  setCharacters,
  setErrorCharacters,
  getCharactersFetch,
  setPage,
  setTotalPages,
  resetState
} = charactersSlice.actions;

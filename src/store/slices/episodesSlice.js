import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  episodes: [],
  selectedEpisode: {},
  isLoading: false,
  isError: false,
  page: 1,
  totalPages: ''
};

export const episodesSlice = createSlice({
  name: 'episodes',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setEpisodes: (state, action) => {
      state.episodes = action.payload;
    },
    getEpisodesFetch: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    setErrorEpisodes: (state) => {
      state.isError = true;
      state.isLoading = false;
    },
    setSelectedEpisode: (state, action) => {
      state.selectedEpisode = action.payload;
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
  setEpisodes,
  getEpisodesFetch,
  setErrorEpisodes,
  setSelectedEpisode,
  setPage,
  setTotalPages,
  resetState
} = episodesSlice.actions;

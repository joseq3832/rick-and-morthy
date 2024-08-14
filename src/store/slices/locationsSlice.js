import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  locations: [],
  selectedLocation: {},
  isLoading: false,
  isError: false,
  page: 1,
  totalPages: ''
};

export const locationsSlice = createSlice({
  name: 'locations',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setLocations: (state, action) => {
      state.locations = action.payload;
    },
    getLocationsFetch: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    setErrorLocations: (state) => {
      state.isError = true;
      state.isLoading = false;
    },
    setSelectedLocation: (state, action) => {
      state.selectedLocation = action.payload;
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
  setLocations,
  getLocationsFetch,
  setErrorLocations,
  setSelectedLocation,
  setPage,
  setTotalPages,
  resetState
} = locationsSlice.actions;

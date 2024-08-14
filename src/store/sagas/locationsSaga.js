import { call, put, takeLatest } from 'redux-saga/effects';
import {
  setLocations,
  setErrorLocations,
  setLoading,
  setPage,
  setTotalPages
} from '../slices/locationsSlice';
import { LOCATION_TYPES } from '../types';

import ApiService from '@/services/ApiService';

function* getLocations(action) {
  try {
    const { data } = yield call(ApiService.getLocations, action.payload);
    yield put(setLocations(data.results));
    yield put(setPage(action.payload));
    yield put(setTotalPages(data.info.pages));
    yield put(setLoading(false));
  } catch (error) {
    yield put(setErrorLocations(error));
  }
}

const sagas = [takeLatest(LOCATION_TYPES.FETCH_LOCATIONS, getLocations)];

export { sagas as default };

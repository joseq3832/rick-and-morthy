import { call, put, takeLatest } from 'redux-saga/effects';
import {
  setEpisodes,
  setErrorEpisodes,
  setLoading,
  setPage,
  setTotalPages
} from '../slices/episodesSlice';
import { EPISODE_TYPES } from '../types';

import ApiService from '@/services/ApiService';

function* getEpisodes(action) {
  try {
    const { data } = yield call(ApiService.getEpisodes, action.payload);
    yield put(setEpisodes(data.results));
    yield put(setPage(action.payload));
    yield put(setTotalPages(data.info.pages));
    yield put(setLoading(false));
  } catch (error) {
    yield put(setErrorEpisodes(error));
  }
}

const sagas = [takeLatest(EPISODE_TYPES.FETCH_EPISODES, getEpisodes)];

export { sagas as default };

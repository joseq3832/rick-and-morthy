import { call, put, takeLatest } from 'redux-saga/effects';
import { setCharacters } from '../slices';
import { CHARACTER_TYPES } from '../types';

import ApiService from '@/services/ApiService';

function* getCharacters(action) {
  try {
    const { data } = yield call(ApiService.get, action.payload);
    yield put(setCharacters(data.results));
  } catch (error) {
    console.log('Error: ' + error);
  }
}

const sagas = [takeLatest(CHARACTER_TYPES.FETCH_CHARACTERS, getCharacters)];

export { sagas as default };

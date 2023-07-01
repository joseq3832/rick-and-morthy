import { call, put, takeLatest } from 'redux-saga/effects';
import { setCharacters, setErrorCharacters, setLoading, setPage, setTotalPages } from '../slices';
import { CHARACTER_TYPES } from '../types';
import { createAdapterCharacter } from '@/features/adapters';

import ApiService from '@/services/ApiService';

function* getCharacters(action) {
  try {
    const { data } = yield call(ApiService.get, action.payload);
    const characters = data.results.map((character) => createAdapterCharacter(character));
    yield put(setCharacters(characters));
    yield put(setPage(action.payload));
    yield put(setTotalPages(data.info.pages));
    yield put(setLoading(false));
  } catch (error) {
    yield put(setErrorCharacters(error));
  }
}

const sagas = [takeLatest(CHARACTER_TYPES.FETCH_CHARACTERS, getCharacters)];

export { sagas as default };

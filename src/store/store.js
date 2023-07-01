import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import storage from 'redux-persist/lib/storage';
import reducers from './reducers';
import rootSaga from './rootSaga';

const saga = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['characters', 'locations']
};

const rootReducer = combineReducers(reducers);

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [saga]
});

saga.run(rootSaga);

export default store;

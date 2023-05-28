import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { api } from './api';
import cardSliceReducer from './cardSlice';
import formListSliceReducer from './formListSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cardSlice'],
};

const reducers = {
  cardSlice: cardSliceReducer,
  formList: formListSliceReducer,
  [api.reducerPath]: api.reducer,
};

export const reducer = combineReducers(reducers);

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

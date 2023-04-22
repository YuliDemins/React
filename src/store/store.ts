import { configureStore } from '@reduxjs/toolkit';
import { api } from './api';
import cardSliceReducer from './cardSlice';
import formListSliceReducer from './formListSlice';

const store = configureStore({
  reducer: {
    cardSlice: cardSliceReducer,
    formList: formListSliceReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
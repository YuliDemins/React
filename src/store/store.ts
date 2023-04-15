import { configureStore } from '@reduxjs/toolkit';
import { api } from './api';
// import filterSliceReducer from './filterSlice';
import cardSliceReducer from './cardSlice';
import formListSliceReducer from './formListSlice';

const store = configureStore({
  reducer: {
    cardSlice: cardSliceReducer,
    // filter: filterSliceReducer,
    formList: formListSliceReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore } from '@reduxjs/toolkit';
import { api } from './api';
// import todoReducer from './todoSlice'
import { IdSlice } from './idSlice';

const store = configureStore({
  reducer: {
    // todos: todoReducer,
    IdSlice: IdSlice.reducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

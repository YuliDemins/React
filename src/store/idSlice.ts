import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

interface IdSliceState {
  id: string;
  visibleModal: boolean;
}

export const IdSlice = createSlice({
  name: 'IdSlice',
  initialState: { id: '', visibleModal: false } as IdSliceState,
  reducers: {
    setId: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
    setVisibleModal: (state, action: PayloadAction<boolean>) => {
      state.visibleModal = action.payload;
    },
  },
});

export const setId = IdSlice.actions.setId;
export const setVisibleModal = IdSlice.actions.setVisibleModal;

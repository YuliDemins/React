import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFormData } from '../types/types';

type typeData = {
  list: IFormData[];
  isShowModal: boolean;
};

const initialState: typeData = {
  list: [],
  isShowModal: false,
};

const formListSlice = createSlice({
  name: 'formList',
  initialState,
  reducers: {
    addValue: (state, action: PayloadAction<IFormData>) => {
      state.list.push(action.payload);
    },
    setShowModal: (state, action: PayloadAction<boolean>) => {
      state.isShowModal = action.payload;
    },
  },
});

export const { addValue, setShowModal } = formListSlice.actions;

export default formListSlice.reducer;

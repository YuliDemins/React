import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CardState {
  idState: string;
  value: string;
  visibleModal: boolean;
}

const initialState: CardState = {
  idState: '',
  value: '',
  visibleModal: false,
};

export const cardSlice = createSlice({
  name: 'cardSlice',
  initialState,
  reducers: {
    updateState: (state, action: PayloadAction<{ idState: string; visibleModal: boolean }>) => {
      state.idState = action.payload.idState;
      state.visibleModal = action.payload.visibleModal;
    },
    setValueSearch: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { updateState, setValueSearch } = cardSlice.actions;

export default cardSlice.reducer;

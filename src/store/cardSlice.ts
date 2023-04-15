import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CardState {
  idState: string;
  value: string;
  visibleModal: boolean;
}

const initialState: CardState = {
  idState: '',
  value: '',
  visibleModal: false,
};

const cardSlice = createSlice({
  name: 'cardSlice',
  initialState,
  reducers: {
    setId: (state, action: PayloadAction<string>) => {
      state.idState = action.payload;
    },
    openModal: (state, action: PayloadAction<boolean>) => {
      state.visibleModal = action.payload;
    },
    setValueSearch: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setId, openModal, setValueSearch } = cardSlice.actions;

export default cardSlice.reducer;

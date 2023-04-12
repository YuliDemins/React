import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IdSliceState {
  idState: string;
  visibleModal: boolean;
}

const initialState: IdSliceState = {
  idState: '',
  visibleModal: false,
};

const IdSlice = createSlice({
  name: 'IdSlice',
  initialState,
  reducers: {
    setId: (state, action: PayloadAction<string>) => {
      state.idState = action.payload;
    },
    setVisibleModal: (state, action: PayloadAction<boolean>) => {
      state.visibleModal = action.payload;
    },
  },
});

export const { setId, setVisibleModal } = IdSlice.actions;

export default IdSlice.reducer;

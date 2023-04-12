import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface filterSliceState {
  value: string;
}

const initialState: filterSliceState = {
  value: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setValueSearch: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
      console.log(action.payload);
    },
  },
});

export const { setValueSearch } = filterSlice.actions;

export default filterSlice.reducer;

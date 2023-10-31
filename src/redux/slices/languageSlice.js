
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  spanish: true,
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    cambiarIdioma: (state) => {
      state.spanish = !state.spanish;
    },
  },
});

export const { cambiarIdioma } = languageSlice.actions;

export default languageSlice.reducer;

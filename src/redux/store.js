import { configureStore } from "@reduxjs/toolkit";
import languageSlice from "./slices/languageSlice";

const store = configureStore({
  reducer: {
    language: languageSlice,
  },
});

export default store;


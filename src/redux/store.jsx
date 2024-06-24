import { configureStore } from "@reduxjs/toolkit";

import SearchSlice from "./slice/SearchSlice";

export const store = configureStore({
  reducer: {
    search: SearchSlice,
  },
});

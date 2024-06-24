import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  userData: null,
  isLoading: false,
  error: null,
};

export const fetchUser = createAsyncThunk(
  "search/fetchUser",
  async (searchTerm) => {
    const response = await fetch(`https://api.github.com/users/${searchTerm}`);
    if (!response.ok) {
      throw new Error("Failed to fetch user");
    }
    return await response.json();
  }
);

const SearchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.userData = action.payload;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const { setSearch } = SearchSlice.actions;
export default SearchSlice.reducer;

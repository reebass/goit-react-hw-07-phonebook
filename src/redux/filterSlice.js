import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
    name: "filters",
    initialState: "",
    reducers: {
      setQueryFilter(state, action) {
        return action.payload;  
      },
    },
  });

  export const { setQueryFilter } = filtersSlice.actions;
  export const filtersReducer = filtersSlice.reducer;
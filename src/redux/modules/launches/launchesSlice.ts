import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface LaunchesState {
  networkQuery: {
    date_utc: Record<string, string>;
  };
  networkOptions: {
    sort: {
      date_utc: "desc" | "asc";
    };
    pagination: boolean;
  };
}

export const initialState: LaunchesState = {
  networkQuery: {
    date_utc: {
      $gte: "2015-01-01T00:00:00.000Z",
      $lt: "2020-01-01T00:00:00.000Z",
    },
  },
  networkOptions: {
    sort: {
      date_utc: "desc",
    },
    pagination: false,
  },
};

export const launchesSlice = createSlice({
  name: "launches",
  initialState,
  reducers: {
    changeLaunchesSortType: (state, action: PayloadAction<"desc" | "asc">) => {
      state.networkOptions.sort.date_utc = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeLaunchesSortType } = launchesSlice.actions;

export default launchesSlice.reducer;

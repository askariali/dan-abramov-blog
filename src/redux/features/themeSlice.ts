import { THEMES } from "@/consts";
import { createSlice } from "@reduxjs/toolkit";

type ThemeState = {
  theme: (typeof THEMES)[keyof typeof THEMES];
};

const initialState = {
  theme: THEMES.LIGHT,
} as ThemeState;

export const counter = createSlice({
  name: "theme",
  initialState,
  reducers: {
    enableDark: (state) => {
      state.theme = THEMES.DARK;
    },
    disableDark: (state) => {
      state.theme = THEMES.LIGHT;
    },
  },
});

export const { enableDark, disableDark } = counter.actions;
export default counter.reducer;

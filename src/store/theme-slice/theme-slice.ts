import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { Theme } from '@src/constants';
import { RootState } from '@src/store/store';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: { mode: Theme.light, updated: false },
  reducers: {
    toggleTheme: (state) => {
      localStorage.setItem('mode', state.mode === Theme.light ? Theme.dark : Theme.light);
      return { ...state, mode: state.mode === Theme.light ? Theme.dark : Theme.light, updated: true };
    },

    setTheme: (state, action: PayloadAction<Theme>) => {
      localStorage.setItem('mode', action.payload);
      return {
        ...state,
        mode: action.payload
      };
    }
  }
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export const themeSelector = (state: RootState) => state.themeSlice.mode;
export const themeUpdateSelector = (state: RootState) => state.themeSlice.updated;
export default themeSlice.reducer;

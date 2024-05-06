import { configureStore, Store } from '@reduxjs/toolkit';

import { Theme } from '@src/constants';

import themeSlice, { setTheme, themeSelector, themeUpdateSelector, toggleTheme } from './theme-slice';

describe('themeSlice', () => {
  let store: Store;

  beforeAll(() => {
    store = configureStore({
      reducer: {
        themeSlice: themeSlice
      }
    });
  });

  it('should have the initial state', () => {
    const initialState = store.getState().themeSlice;
    expect(initialState.mode).toEqual(Theme.light);
    expect(initialState.updated).toEqual(false);
  });

  it('should toggle the theme correctly', () => {
    store.dispatch(toggleTheme());
    const updatedState = store.getState().themeSlice;

    expect(updatedState.mode).toEqual(Theme.dark);
    expect(updatedState.updated).toEqual(true);

    store.dispatch(toggleTheme());
    const revertedState = store.getState().themeSlice;

    expect(revertedState.mode).toEqual(Theme.light);
    expect(revertedState.updated).toEqual(true);
  });

  it('should set the theme correctly', () => {
    store.dispatch(setTheme(Theme.dark));
    const updatedState = store.getState().themeSlice;

    expect(updatedState.mode).toEqual(Theme.dark);
    expect(updatedState.updated).toEqual(true);
  });

  it('should select the theme and update state correctly', () => {
    const state = store.getState();
    const selectedTheme = themeSelector(state);
    const selectedUpdate = themeUpdateSelector(state);

    expect(selectedTheme).toEqual(state.themeSlice.mode);
    expect(selectedUpdate).toEqual(state.themeSlice.updated);
  });
});

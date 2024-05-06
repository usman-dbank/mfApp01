import { combineReducers, configureStore, MiddlewareArray } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { logger } from 'redux-logger';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { themeSlice } from './theme-slice/theme-slice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage
};

const appReducers = {
  themeSlice: themeSlice.reducer
};

function addReduxLoggerConditionallyAndReturn(middlewareArray: MiddlewareArray<any>) {
  // Only enable redux-logger in development
  if (process.env.NODE_ENV === 'development') {
    return middlewareArray.concat(logger);
  }
  return middlewareArray;
}

const Store = configureStore({
  reducer: persistReducer(persistConfig, combineReducers(appReducers)),
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    });

    return addReduxLoggerConditionallyAndReturn(middlewares);
  },
  devTools: process.env.NODE_ENV !== 'production'
});

export const PersistedStore = persistStore(Store);

// When a store is configured with redux-persist, its type gets really deep
// and so IDEs can't resolve the type of getState, and dispatch methods
// on those stores.
// To overcome that we have a thin dummy store designed exactly like the original store
// that is used for cases where type information is desired.
const dummyStoreForTypeInference = configureStore({ reducer: appReducers });
export type RootState = ReturnType<typeof dummyStoreForTypeInference.getState>;
export type AppDispatch = typeof dummyStoreForTypeInference.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default Store;

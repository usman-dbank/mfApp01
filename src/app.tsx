import React, { useEffect, useMemo } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ConfigProvider, theme } from 'antd';
import { useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { setTheme, themeSelector, themeUpdateSelector } from '@src/store/theme-slice/theme-slice';

import { Theme } from './constants';
import { Router } from './router';
import { PersistedStore, useAppDispatch } from './store/store';
import { DarkTheme } from './theme/dark-theme';
import { DefaultTheme } from './theme/default-theme';
const isBrowserDefaultDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false // default: true
    }
  }
});
function App() {
  const themeUpdated = useSelector(themeUpdateSelector);
  const mode = useSelector(themeSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const storedTheme = localStorage.getItem('mode');

    if (!storedTheme && !themeUpdated) {
      dispatch(setTheme(isBrowserDefaultDark() ? Theme.dark : Theme.light));
    } else if (storedTheme && !themeUpdated) {
      dispatch(setTheme(storedTheme === Theme.dark ? Theme.dark : Theme.light));
    }
  }, [dispatch, themeUpdated]);

  const selectedTheme = useMemo(() => (mode === Theme.dark ? DarkTheme : DefaultTheme), [mode]);

  useEffect(() => {
    document.body.removeAttribute('data-theme');
    document.body.setAttribute('data-theme', mode);
  }, [mode]);
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <PersistGate loading={null} persistor={PersistedStore}>
          <ConfigProvider
            theme={{
              algorithm:
                mode === Theme.dark ? [theme.darkAlgorithm, theme.compactAlgorithm] : [theme.defaultAlgorithm, theme.compactAlgorithm],
              ...selectedTheme
            }}
            componentSize="middle">
            <Router />
          </ConfigProvider>
        </PersistGate>
      </QueryClientProvider>
    </div>
  );
}

export default App;

import React from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react';

import { logger } from '@src/utils/logger/logger';

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false
      }
    },
    logger: {
      log: logger.log,
      warn: logger.warn,
      error: () => {}
    }
  });

export function renderWithClient(ui: React.ReactElement) {
  const testQueryClient = createTestQueryClient();
  const { rerender, ...result } = render(<QueryClientProvider client={testQueryClient}>{ui}</QueryClientProvider>);
  return {
    ...result,
    rerender: (rerenderUi: React.ReactElement) => rerender(<QueryClientProvider client={testQueryClient}>{rerenderUi}</QueryClientProvider>)
  };
}

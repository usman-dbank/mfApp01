/* istanbul ignore file */

import { BrowserRouter } from 'react-router-dom';

import InternalRoutes from './internal-routes';

export function Router() {
  return (
    <BrowserRouter>
      <InternalRoutes />
    </BrowserRouter>
  );
}

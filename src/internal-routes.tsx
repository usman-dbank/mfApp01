import { Route, Routes } from 'react-router-dom';

import Template from './components/compound/template/template';
import Dashboard from './pages/dashboard/dashboard';
import { RouteUrls } from './utils/routes.constants';
import './assets/styles/index.less';

const InternalRoutes = () => {
  return (
    <>
      <Routes>
        <Route path={RouteUrls.dashboard} element={<Dashboard />} />
        <Route path={RouteUrls.template} element={<Template />} />
      </Routes>
    </>
  );
};

export default InternalRoutes;

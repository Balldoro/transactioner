import { Route, Routes } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import { RoutePaths } from "./RoutePaths";
import Dashboard from "modules/dashboard/pages/Dashboard";
import Layout from "components/Layout";
import CategoryOverview from "modules/category/pages/CategoryOverview";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={RoutePaths.BASE} element={<PrivateRoute />}>
        <Route path={RoutePaths.BASE} element={<Layout />}>
          <Route path={RoutePaths.BASE} element={<Dashboard />} />
          <Route path={RoutePaths.DASHBOARD} element={<Dashboard />} />
          <Route path={RoutePaths.GROUPS} element={<Dashboard />} />
          <Route path={RoutePaths.PROFILE} element={<Dashboard />} />
          <Route path={RoutePaths.SETTINGS} element={<Dashboard />} />
          <Route
            path={`${RoutePaths.GROUP}/:id`}
            element={<CategoryOverview />}
          />
        </Route>
      </Route>
    </Routes>
  );
};
export default AppRoutes;

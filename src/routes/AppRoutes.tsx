import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import { RoutePaths } from "./RoutePaths";
import Layout from "components/Layout";
import LoadingSpinner from "components/LoadingSpinner";

const Dashboard = lazy(() => import("modules/dashboard/pages/Dashboard"));
const CategoryOverview = lazy(
  () => import("modules/category/pages/CategoryOverview")
);

const AppRoutes = () => {
  return (
    <Suspense fallback={<LoadingSpinner isFullPage />}>
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
    </Suspense>
  );
};
export default AppRoutes;

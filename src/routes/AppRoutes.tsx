import { useAuth0 } from "@auth0/auth0-react";
import { Route, Routes } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import { RoutePaths } from "./RoutePaths";
import Dashboard from "components/Dashboard";

const AppRoutes = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Routes>
      <Route path={RoutePaths.BASE} element={<PrivateRoute />}>
        <Route path={RoutePaths.BASE} element={<Dashboard />} />
        <Route path={RoutePaths.DASHBOARD} element={<Dashboard />} />
      </Route>
    </Routes>
  );
};
export default AppRoutes;

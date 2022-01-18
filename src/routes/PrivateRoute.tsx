import { withAuthenticationRequired } from "@auth0/auth0-react";
import LoadingSpinner from "components/LoadingSpinner";
import { Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const ElementType = withAuthenticationRequired(Outlet, {
    onRedirecting: () => <LoadingSpinner isFullPage />,
  });

  return <ElementType />;
};
export default PrivateRoute;

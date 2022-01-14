import { withAuthenticationRequired } from "@auth0/auth0-react";
import { Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const ElementType = withAuthenticationRequired(Outlet, {
    onRedirecting: () => <h1>LOADING...</h1>,
  });

  return <ElementType />;
};
export default PrivateRoute;

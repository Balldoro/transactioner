import { AppState, Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

type Auth0NavigateProviderProps = {
  children: React.ReactNode;
};

const Auth0NavigateProvider = ({ children }: Auth0NavigateProviderProps) => {
  const navigate = useNavigate();

  const { REACT_APP_AUTH0_DOMAIN, REACT_APP_AUTH0_CLIENT } = process.env;

  const handleRedirectCallback = (appState: AppState) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={REACT_APP_AUTH0_DOMAIN as string}
      clientId={REACT_APP_AUTH0_CLIENT as string}
      redirectUri={window.location.origin}
      onRedirectCallback={handleRedirectCallback}>
      {children}
    </Auth0Provider>
  );
};
export default Auth0NavigateProvider;

import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";

import Auth0NavigateProvider from "components/Auth0NavigateProvider";
import ErrorCatcher from "components/ErrorCatcher";
import theme from "styles/theme";
import "services/i18n";

type AppProvidersProps = {
  children: React.ReactNode;
};

const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <Router>
      <ChakraProvider theme={theme}>
        <ErrorCatcher>
          <Auth0NavigateProvider>{children}</Auth0NavigateProvider>
        </ErrorCatcher>
      </ChakraProvider>
    </Router>
  );
};

export default AppProviders;

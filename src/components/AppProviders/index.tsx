import { ChakraProvider } from "@chakra-ui/react";

import ErrorCatcher from "components/ErrorCatcher";
import theme from "styles/theme";
import "services/i18n";

type AppProvidersProps = {
  children: React.ReactNode;
};

const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <ChakraProvider theme={theme}>
      <ErrorCatcher>{children}</ErrorCatcher>
    </ChakraProvider>
  );
};

export default AppProviders;

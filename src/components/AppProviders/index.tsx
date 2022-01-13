import { ChakraProvider } from "@chakra-ui/react";
import theme from "styles/theme";

type AppProvidersProps = {
  children: React.ReactNode;
};

const AppProviders = ({ children }: AppProvidersProps) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};
export default AppProviders;

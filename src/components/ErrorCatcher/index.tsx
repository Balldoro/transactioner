import { Flex, Heading, Button, Text, VStack } from "@chakra-ui/react";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";
import rollbarInstance from "services/rollbar";

type ErrorInfo = { componentStack: string };

type ErrorFallbackProps = FallbackProps;

type ErrorCatcherProps = {
  children: React.ReactNode;
};

const ErrorFallback = ({ error, resetErrorBoundary }: ErrorFallbackProps) => (
  <Flex direction="column" align="center" justify="center" minH="100vh">
    <VStack spacing="5">
      <Heading as="h1" textAlign="center" color="red.600">
        Error!
      </Heading>
      <Text textAlign="center">There was an error: {error.message}</Text>
      <Button colorScheme="blue" onClick={resetErrorBoundary} minW="120px">
        Retry!
      </Button>
    </VStack>
  </Flex>
);

const ErrorCatcher = ({ children }: ErrorCatcherProps) => {
  const handleError = (error: Error, info: ErrorInfo) => {
    rollbarInstance.error(error, info);
  };

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onError={handleError}>
      {children}
    </ErrorBoundary>
  );
};

export default ErrorCatcher;

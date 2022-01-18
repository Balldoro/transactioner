import { Flex, Spinner, SpinnerProps } from "@chakra-ui/react";

type LoadingSpinnerProps = SpinnerProps & {
  isFullPage?: boolean;
};

const LoadingSpinner = ({ isFullPage, ...props }: LoadingSpinnerProps) => {
  if (isFullPage) {
    return (
      <Flex
        position="fixed"
        bg="white"
        justifyContent="center"
        alignItems="center"
        w="100%"
        minH="100vh">
        <Spinner size="xl" color="blue.400" thickness="2px" label="Loading" />
      </Flex>
    );
  }

  return (
    <Spinner
      size="md"
      color="blue.400"
      thickness="2px"
      label="Loading"
      {...props}
    />
  );
};
export default LoadingSpinner;

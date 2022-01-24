import { Flex, Spinner, SpinnerProps } from "@chakra-ui/react";

type LoadingSpinnerProps = SpinnerProps & {
  isFullPage?: boolean;
  isCentered?: boolean;
};

const LoadingSpinner = ({
  isFullPage,
  isCentered,
  ...props
}: LoadingSpinnerProps) => {
  if (isFullPage) {
    return (
      <Flex
        position="fixed"
        bg="gray.100"
        top="0"
        left="0"
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
      display="block"
      {...(isCentered && { margin: "0 auto" })}
      {...props}
    />
  );
};
export default LoadingSpinner;

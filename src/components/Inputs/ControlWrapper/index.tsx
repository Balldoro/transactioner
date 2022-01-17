import { FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";

type ControlWrapperProps = {
  label: string;
  error?: string;
  children: React.ReactNode;
};

const ControlWrapper = ({ label, error, children }: ControlWrapperProps) => {
  return (
    <FormControl isInvalid={Boolean(error)}>
      <FormLabel>{label}</FormLabel>
      {children}
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  );
};
export default ControlWrapper;

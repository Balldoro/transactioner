import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormControlProps,
} from "@chakra-ui/react";

type ControlWrapperProps = FormControlProps & {
  label: string;
  error?: string;
  children: React.ReactNode;
};

const ControlWrapper = ({
  label,
  error,
  children,
  ...props
}: ControlWrapperProps) => {
  return (
    <FormControl isInvalid={Boolean(error)} {...props}>
      <FormLabel>{label}</FormLabel>
      {children}
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  );
};
export default ControlWrapper;

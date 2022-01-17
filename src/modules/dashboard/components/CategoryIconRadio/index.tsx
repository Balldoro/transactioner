import {
  Box,
  IconButton,
  Image,
  useRadio,
  UseRadioProps,
} from "@chakra-ui/react";

type CategoryIconRadioProps = {
  radioProps: UseRadioProps;
  src: string;
};

const CategoryIconRadio = ({ src, radioProps }: CategoryIconRadioProps) => {
  const { state, getInputProps, getCheckboxProps } = useRadio(radioProps);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <IconButton
        {...checkbox}
        as="div"
        cursor="pointer"
        maxW="48px"
        {...(state.isChecked && {
          bg: "blue.200",
          borderWidth: "2px",
          borderStyle: "solid",
          borderColor: "blue.600",
        })}
        _hover={{ bg: "blue.200" }}
        icon={<Image src={src} borderRadius="full" boxSize="32px" />}
        size="lg"
        aria-label="group icon"
        alignSelf="flex-start"
        borderRadius="full"
      />
    </Box>
  );
};

export default CategoryIconRadio;

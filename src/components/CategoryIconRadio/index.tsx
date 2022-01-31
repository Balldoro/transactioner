import {
  Box,
  IconButton,
  Image,
  Tooltip,
  useRadio,
  UseRadioProps,
} from "@chakra-ui/react";
import { useState } from "react";

type CategoryIconRadioProps = {
  radioProps: UseRadioProps;
  src: string;
  label: string;
};

const CategoryIconRadio = ({
  src,
  label,
  radioProps,
}: CategoryIconRadioProps) => {
  const { state, getInputProps, getCheckboxProps } = useRadio(radioProps);

  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Tooltip label={label} isOpen={isTooltipOpen}>
        <IconButton
          {...checkbox}
          as="div"
          onMouseEnter={() => setIsTooltipOpen(true)}
          onMouseLeave={() => setIsTooltipOpen(false)}
          onClick={() => setIsTooltipOpen(true)}
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
      </Tooltip>
    </Box>
  );
};

export default CategoryIconRadio;

import { forwardRef, Icon, IconProps } from "@chakra-ui/react";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type AwesomeIconProps = IconProps & {
  icon: IconDefinition;
};

const AwesomeIcon = forwardRef<AwesomeIconProps, "svg">(
  ({ ...props }: AwesomeIconProps, ref) => (
    <Icon as={FontAwesomeIcon} ref={ref} {...props} />
  )
);
export default AwesomeIcon;

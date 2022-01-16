import { Link as ChakraLink } from "@chakra-ui/react";
import { Link, LinkProps } from "react-router-dom";

type RouteLinkProps = LinkProps;

const RouteLink = ({ children, ...props }: RouteLinkProps) => {
  return (
    <ChakraLink as={Link} _hover={{ textDecoration: "none" }} {...props}>
      {children}
    </ChakraLink>
  );
};
export default RouteLink;

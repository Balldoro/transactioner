import { useMediaQuery, useTheme } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const useSidebar = () => {
  const { breakpoints } = useTheme();
  const [isLargerThanMd] = useMediaQuery(`(min-width: ${breakpoints.md})`);

  const [isOpen, setIsOpen] = useState(isLargerThanMd);

  const toggleSidebar = () => {
    setIsOpen(isOpen => !isOpen);
  };

  const closeSidebarFromLink = () => {
    if (!isLargerThanMd) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    setIsOpen(isLargerThanMd);
  }, [isLargerThanMd]);

  return { isOpen, toggleSidebar, closeSidebarFromLink };
};
export default useSidebar;

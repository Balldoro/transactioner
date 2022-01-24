import {
  Flex,
  Heading,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { Group } from "modules/dashboard/types";
import Transactions from "modules/category/components/Transactions";
import { getGroupInfo } from "modules/category/api";
import LoadingSpinner from "components/LoadingSpinner";

// TODO: rename Category to Group

const CategoryOverview = () => {
  const { t } = useTranslation("category");

  const [groupInfo, setGroupInfo] = useState<Group | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchGroupInfo = async () => {
      setIsLoading(true);
      const groupInfo = await getGroupInfo();
      setGroupInfo(groupInfo);
      setIsLoading(false);
    };

    fetchGroupInfo();
  }, []);

  if (isLoading) {
    return <LoadingSpinner isFullPage />;
  }

  if (!groupInfo) {
    return null;
  }

  return (
    <Flex direction="column">
      <VStack spacing="4" align="flex-start" width="100%">
        <Image src={groupInfo.icon} mr="4" />
        <Heading>{groupInfo.name}</Heading>

        <Tabs width="100%">
          <TabList>
            <Tab>{t("overview")}</Tab>
            <Tab>{t("statistics")}</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Transactions group={groupInfo} />
            </TabPanel>
            <TabPanel>
              <Heading>{t("statistics")}</Heading>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </VStack>
    </Flex>
  );
};
export default CategoryOverview;

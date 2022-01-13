import { Button, Center, Flex, Heading, VStack } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import { LANGUAGES } from "services/i18n/types";
import AppProviders from "components/AppProviders";

const App = () => {
  const { t, i18n } = useTranslation("common");

  const switchLanguage = (lang: LANGUAGES) => {
    i18n.changeLanguage(lang);
  };

  return (
    <AppProviders>
      <Center as="main" minH="100vh">
        <Flex direction="column">
          <VStack spacing="5">
            <Heading>{t("hello-app")}</Heading>
            <Button
              colorScheme={"blue"}
              onClick={() => switchLanguage(LANGUAGES.EN)}>
              {t("switch-language", { lang: "EN" })}
            </Button>
            <Button
              colorScheme={"blue"}
              onClick={() => switchLanguage(LANGUAGES.PL)}>
              {t("switch-language", { lang: "PL" })}
            </Button>
          </VStack>
        </Flex>
      </Center>
    </AppProviders>
  );
};

export default App;

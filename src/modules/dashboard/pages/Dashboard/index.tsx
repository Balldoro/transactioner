import { Heading } from "@chakra-ui/react";
import { useAuthContext } from "modules/auth/contexts/AuthContext";
import GroupsList from "modules/dashboard/components/GroupsList";
import { useTranslation } from "react-i18next";

const Dashboard = () => {
  const { t } = useTranslation("dashboard");
  const { user } = useAuthContext();

  return (
    <>
      <Heading>{t("hello-user", { user: user?.nickname })}</Heading>
      <GroupsList />
    </>
  );
};
export default Dashboard;

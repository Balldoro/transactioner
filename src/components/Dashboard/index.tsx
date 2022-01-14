import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@chakra-ui/react";

const Dashboard = () => {
  const { logout } = useAuth0();
  return (
    <div>
      <Button
        colorScheme={"red"}
        onClick={() =>
          logout({
            returnTo: window.location.origin,
          })
        }>
        Log Out
      </Button>
    </div>
  );
};
export default Dashboard;

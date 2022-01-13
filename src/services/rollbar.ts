import Rollbar from "rollbar";

const accessToken = process.env.REACT_APP_ROLLBAR_ACCESS_TOKEN;
const environment = process.env.NODE_ENV;

const rollbarConfig = {
  accessToken,
  environment,
  captureUncaught: true,
  captureUnhandledRejections: true,
  enabled: environment !== "production",
};

const rollbarInstance = new Rollbar(rollbarConfig);

export default rollbarInstance;

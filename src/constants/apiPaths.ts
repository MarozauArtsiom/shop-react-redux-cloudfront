const isProd = process.env.NODE_ENV === "prod";

const getEnvName = () => (isProd ? "prod" : "dev");

const getEnvUrl = (env: string) => {
  switch (env) {
    case "external":
      return "https://.execute-api.eu-west-1.amazonaws.com/dev";
    case "dev":
      return "http://localhost:3000";
    case "prod":
      return "https://7etguy1g2b.execute-api.eu-west-1.amazonaws.com/prod";
    default:
      return "http://localhost:3000";
  }
};

const API_PATHS = {
  product: getEnvUrl("external"),
  order: getEnvUrl("external"),
  import: getEnvUrl("external"),
  bff: getEnvUrl(getEnvName()),
  cart: getEnvUrl("external"),
};

export default API_PATHS;

import 'dotenv/config';

export default ({ config }) => {
  const appConfig = {
    ...config,
    extra: {
      API_URL: process.env.API_URL,
    },
  };
  return appConfig;
};

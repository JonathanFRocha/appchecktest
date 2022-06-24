import Constants from 'expo-constants';

interface IEnv {
  API_URL: string;
}

const env: IEnv = {
  API_URL: Constants.manifest?.extra?.API_URL,
};

export default env;

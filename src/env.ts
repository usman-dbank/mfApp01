declare global {
  interface Window {
    env;
  }
}

type EnvType = {
  REACT_APP_SERVER_URL: string;
  REACT_APP_GRAPHQL_URL: string;
  REACT_APP_Client_URL: string;
};
export const env: EnvType = { ...process.env, ...window.env };

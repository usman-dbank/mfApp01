import axios from 'axios';

import { env } from '@src/env';

declare const frontendVersion: string;

let version: string = '';
export const getFrontendVersion = (): string => {
  return typeof frontendVersion !== 'undefined' ? frontendVersion : 'unknown';
};
export const getVersionInfo = async () => {
  const { data } = await axios({ method: 'GET', url: `${env.REACT_APP_SERVER_URL}/version` });
  version = `v${getFrontendVersion()} | v${data}`;
};

export const getVersion = () => {
  return version;
};

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { getVersion, getVersionInfo } from './version-info';
global.frontendVersion = require('../../package.json').version;

describe('Version info', () => {
  const axiosMock = new MockAdapter(axios);

  const backendVersion = '1.0.0';
  const frontendVersion = require('../../package.json').version;

  beforeAll(() => {
    axiosMock.onGet(`${global.process.env.REACT_APP_SERVER_URL}/version`).reply(200, backendVersion);
  });

  it('getVersion returns correctly', async () => {
    await getVersionInfo();
    const value = getVersion();
    const expectedVersion = `v${frontendVersion} | v${backendVersion}`;
    expect(axiosMock.history.get[0].url).toBe(`${global.process.env.REACT_APP_SERVER_URL}/version`);
    expect(value).toBe(expectedVersion);
  });
});

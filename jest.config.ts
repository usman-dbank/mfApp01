import fs from 'fs';

import { JestConfigWithTsJest } from 'ts-jest';

const configSWC = JSON.parse(fs.readFileSync(`${__dirname}/.swcrc`, 'utf-8'));

const jestConfig: JestConfigWithTsJest = {
  collectCoverageFrom: ['src/**/*.(ts|tsx)', '!src/**/*.test.(ts|tsx)', '!src/**/*.mock.(ts|tsx)', '!src/serviceWorker.ts'],

  testPathIgnorePatterns: ['/dist/', '/node_modules/', '/vendor/', '\\.less$'],
  testEnvironmentOptions: {
    url: 'http://localhost/'
  },
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testTimeout: 20000,
  moduleDirectories: ['node_modules', '<rootdir>/src'],
  setupFilesAfterEnv: ['<rootDir>/src/setup-tests.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  roots: ['<rootDir>/src'],
  transformIgnorePatterns: ['\\.less$'],
  transform: {
    // '\\.(svg)$': 'jest-transform-stub',
    '^.+\\.tsx?$': ['@swc/jest', { ...configSWC }],
    '^.+\\.ts?$': ['@swc/jest', { ...configSWC }],
    '^.+\\.m?jsx?$': 'babel-jest'
  },
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '^@src/(.*)$': '<rootDir>/src/$1',
    '\\.svg$': '<rootDir>/__mocks__/svg.tsx',
    '^antd/es/(.*)$': 'antd/lib/$1',
    uuidv7: require.resolve('uuidv7')
  }
};

export default jestConfig;

/* eslint-disable check-file/filename-naming-convention */
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import React from 'react';

import { configure } from '@testing-library/react';
import '@testing-library/jest-dom/jest-globals';
import 'isomorphic-fetch';
import 'jest-canvas-mock';

process.env.REACT_APP_SERVER_URL = 'http://localhost:3000';
process.env.REACT_APP_GRAPHQL_URL = 'http://localhost:3000/graphql';
global.React = React;

global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      addListener: jest.fn(),
      removeListener: jest.fn()
    };
  };

configure({
  testIdAttribute: 'data-test-id'
});

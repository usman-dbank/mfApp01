import nock from 'nock';

import { env } from '@src/env';

export const addNock = (mockObj, requestBodyFn) =>
  nock(env.REACT_APP_SERVER_URL)
    .defaultReplyHeaders({
      'access-control-allow-origin': '*',
      'access-control-allow-credentials': 'true'
    })
    .persist()
    .post('/graphql', (body) => {
      return requestBodyFn(body);
    })
    .reply(() => {
      return [
        200,
        {
          data: mockObj,
          isSuccess: true,
          isLoading: false,
          isFetching: false
        }
      ];
    });
export const nockCleanAll = () => {
  nock.cleanAll();
};

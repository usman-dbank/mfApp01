import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  // This process.env value does not need to be
  // imported via 'src/env.ts' because it
  // is used outside of src folder. Also because
  // this file does not exist in the 'dist' folder
  // after `npm run build`.
  schema: process.env.REACT_APP_GRAPHQL_URL,
  documents: ['src/graphql/*.{gql, graphql}'],
  config: {
    reactQueryVersion: 5
  },
  generates: {
    'src/generated/types.tsx': {
      plugins: ['typescript'],
      config: {
        scalars: {
          DateTime: 'Date',
          JSON: 'Record<string, any>' // Override JSON scalar type
        }
      }
    },
    'src/generated/operations.tsx': {
      plugins: ['typescript-operations'],
      preset: 'import-types-preset',
      presetConfig: { typesPath: './types' },
      config: {
        strictScalars: true,
        scalars: {
          DateTime: 'Date',
          JSON: 'Record<string, any>' // Override JSON scalar type
        }
      }
    },
    'src/generated/hooks.tsx': {
      plugins: ['typescript-react-query'],
      preset: 'import-types-preset',
      presetConfig: { typesPath: './operations' },
      config: {
        fetcher: {
          // ATTENTION! we are using require('../env').env.REACT_APP_GRAPHQL_URL instead of
          // process.env.REACT_APP_GRAPHQL_URL.
          // When we use process.env.REACT_APP_GRAPHQL_URL the value in this environment variable at the time
          // of `npm build` gets baked into the build. However when we use the export of `env.ts` file, at the time
          // of `npm build` this gets replaced with the value in `process.env` but it is overridable via `env.js`
          endpoint: `require('../env').env.REACT_APP_GRAPHQL_URL || ''`,
          fetchParams: `{
            credentials: 'include',
            headers: {
              "Content-Type": "application/json"
            }
          }`
        }
      }
    }
  }
};

export default config;

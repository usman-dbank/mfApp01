const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'));

module.exports = {
  extends: ['react-app', 'prettier'],
  plugins: ['prettier', 'check-file', 'import', 'no-relative-import-paths'],
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    'react/jsx-filename-extension': 0,
    'no-param-reassign': 0,
    'react/prop-types': 1,
    'react/require-default-props': 0,
    'react/no-array-index-key': 0,
    'react/jsx-props-no-spreading': 0,
    'react/forbid-prop-types': 0,
    'no-console': 1,
    'jsx-a11y/anchor-is-valid': 0,
    'prefer-destructuring': 0,
    'no-shadow': 0,
    'no-unused-vars': [
      1,
      {
        ignoreRestSiblings: false
      }
    ],
    'check-file/filename-naming-convention': [
      'error',
      {
        '**/!(__tests__)/*.{jsx,tsx}': 'KEBAB_CASE',
        '**/!(__tests__)/*.{js,ts}': 'KEBAB_CASE'
      },
      {
        ignoreMiddleExtensions: true
      }
    ],
    'check-file/folder-naming-convention': [
      'error',
      {
        'src/!(__tests__)/**/': 'KEBAB_CASE',
        'mocks/!(__tests__)/*/': 'KEBAB_CASE'
      }
    ],
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        },
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin'
          },
          {
            pattern: 'antd/**',
            group: 'external'
          },
          {
            pattern: '@din-global/**',
            group: 'internal'
          },
          {
            pattern: '@src/**',
            group: 'parent'
          }
        ],
        'newlines-between': 'always',
        pathGroupsExcludedImportTypes: ['default']
      }
    ],
    'no-relative-import-paths/no-relative-import-paths': [
      'warn',
      {
        allowSameFolder: true,
        rootDir: 'src',
        prefix: '@src'
      }
    ]
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: { 'prettier/prettier': ['warn', prettierOptions] }
    }
  ],
  ignorePatterns: ['src/generated/*']
};

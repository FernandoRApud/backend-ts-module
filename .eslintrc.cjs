module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    indent: ['error', 2],
    'no-multi-spaces': ['error'],
    'linebreak-style': 0,
    'no-console': 'off',
    'no-plusplus': 'off',
    'no-shadow': 'off',
    radix: 'off',
    'no-restricted-globals': 'off',
    'no-restricted-syntax': 'off',
    'no-underscore-dangle': 'off',
    'consistent-return': 'off',
    'max-len': [
      'error',
      {
        code: 170,
      },
    ],
    'no-use-before-define': 'off',
    'no-param-reassign': [2, { props: false }],
  },
};

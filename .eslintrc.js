module.exports = {
  env: {
    commonjs: true,
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier', 'import-helpers'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    indent: ['error', 2],
    'no-param-reassign': 0,
    'no-undef': 0,
    'no-console': 0,
    'import/prefer-default-export': 0,
    'linebreak-style': ['error', 'windows'],
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }, 'options'],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: ['module', ['parent', 'sibling', 'index']],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
  },
};
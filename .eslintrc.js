/*
 * @Date: 2023-04-11 13:30:05
 * @LastEditTime: 2023-04-11 15:28:48
 * @FilePath: /justfornest/.eslintrc.js
 * @Description:
 *
 */
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: [
    '.eslintrc.js',
    '/src/**/*.spec.ts',
    '/src/**/*.spec.tsx',
    '/src/**/*.spec.js',
    '/src/**/*.spec.jsx',
    '/src/**/*.test.ts',
    '/src/**/*.test.tsx',
    '/src/**/*.test.js',
    '/src/**/*.test.jsx',
    '/src/**/*.d.ts',
    '/src/*.ts',
  ],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
};

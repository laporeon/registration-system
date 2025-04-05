import prettier from 'eslint-plugin-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import prettierConfig from 'eslint-config-prettier';
import typescriptParser from '@typescript-eslint/parser';

export default [
  {
    files: ['**/*.{ts,js,mjs}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
      },
    },
    plugins: {
      prettier,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      ...prettierConfig.rules,
      'prettier/prettier': 'error',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^\\u0000'],
            ['^node:'],
            ['^@?\\w'],
            ['^@/'],
            ['^\\.\\.'],
            ['^\\.'],
          ],
        },
      ],
      'no-console': 'off',
    },
    ignores: ['dist/**', 'eslint.config.mjs', 'node_modules/**'],
  },
];

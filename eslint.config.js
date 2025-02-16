import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      indent: ['error', 2], // Enforce 2-space indentation
      quotes: ['error', 'single'], // Enforce single quotes
      semi: ['error', 'never'], // Disallow semicolons
    },
    ignores: [
      'node_modules/',
      'dist/',
      'build/',
      'playwright-report/',
      'coverage/',
    ],
  }
);
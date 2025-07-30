import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import prettier from 'eslint-plugin-prettier';
import typescript from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';
import { globalIgnores } from 'eslint/config';

export default tseslint.config([
	globalIgnores(['dist']),
	{
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
			parser: tsParser,
			parserOptions: {
				ecmaVersion: 'latest',
				ecmaFeatures: { jsx: true },
				sourceType: 'module',
			},
		},
		settings: {
			react: {
				version: 'detect',
			},
			'import/resolver': {
				typescript: {},
			},
		},
		plugins: {
			react,
			prettier,
			import: importPlugin,
			'@typescript-eslint': typescript,
			'simple-import-sort': simpleImportSortPlugin,
		},
		extends: [
			js.configs.recommended,
			tseslint.configs.recommended,
			reactHooks.configs['recommended-latest'],
			reactRefresh.configs.vite,
		],
		rules: {
			'react/jsx-no-target-blank': 'off',
			'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
			'@typescript-eslint/no-unused-vars': ['warn'],
			'react/prop-types': 'off',
			quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
			'prettier/prettier': ['error', { printWidth: 110 }],
			'simple-import-sort/imports': 'warn',
			'simple-import-sort/exports': 'warn',
			'import/no-unresolved': 'error',
			'import/no-cycle': 'warn',
			'import/no-duplicates': 'error',
		},
	},
]);

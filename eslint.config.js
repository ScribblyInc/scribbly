import pluginJs from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import pluginRouter from '@tanstack/eslint-plugin-router';

/** @type {import('eslint').Linter.Config[]} */
export default [
	{
		ignores: ['dist'],
		settings: { react: { version: '18.3' } },
		files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
		},
		plugins: {
			react,
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
			'@tanstack/router': pluginRouter,
		},
		rules: {
			'react/react-in-jsx-scope': 'warn',
			'react/jsx-uses-react': 'warn',
			'no-console': 'warn',
			...reactHooks.configs.recommended.rules,
			'react-refresh/only-export-components': [
				'warn',
				{ allowConstantExport: true },
			],
		},
	},
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	react.configs.flat.recommended,
	react.configs.flat['jsx-runtime'],
];

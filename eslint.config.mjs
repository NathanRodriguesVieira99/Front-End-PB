import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import testingLibrary from 'eslint-plugin-testing-library';
import jestDom from 'eslint-plugin-jest-dom';
import nextPlugin from 'eslint-plugin-next';
import importPlugin from 'eslint-plugin-import';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

export default [
    // Configurações base do Next.js
    {
        plugins: {
            next: nextPlugin,
            import: importPlugin,
        },
        rules: {
            ...nextPlugin.configs.recommended.rules,
            // Regras do eslint-plugin-import
            'import/order': [
                'error',
                {
                    groups: [
                        'builtin',
                        'external',
                        'internal',
                        'parent',
                        'sibling',
                        'index',
                    ],
                    pathGroups: [
                        {
                            pattern: '@/**',
                            group: 'internal',
                        },
                    ],
                    alphabetize: { order: 'asc', caseInsensitive: true },
                    'newlines-between': 'always',
                },
            ],
            'import/no-unresolved': 'error',
            'import/no-duplicates': 'error',
        },
        settings: {
            'import/resolver': {
                typescript: {},
                alias: {
                    map: [['@', './src']],
                    extensions: ['.js', '.jsx', '.ts', '.tsx'],
                },
            },
        },
    },

    ...compat.extends(
        'next/core-web-vitals',
        'plugin:testing-library/react',
        'plugin:jest-dom/recommended'
    ),

    // Configurações para testes
    {
        files: [
            '**/__tests__/**/*.{js,jsx,ts,tsx}',
            '**/*.{spec,test}.{js,jsx,ts,tsx}',
        ],
        plugins: {
            'testing-library': testingLibrary,
            'jest-dom': jestDom,
        },
        rules: {
            'testing-library/await-async-queries': 'error',
            'testing-library/no-await-sync-queries': 'error',
            'testing-library/no-debugging-utils': 'warn',
            '@typescript-eslint/no-unused-vars': 'off',
            'jest-dom/prefer-checked': 'error',
            'jest-dom/prefer-enabled-disabled': 'error',
            'jest-dom/prefer-required': 'error',
            'jest-dom/prefer-to-have-attribute': 'error',
        },
    },

    // Ignorar pastas
    {
        ignores: ['**/node_modules/', '.next/', '**/*.d.ts'],
    },
];

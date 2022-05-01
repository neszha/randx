module.exports = {
    env: {
        browser: true,
        es2021: true,
        'jest/globals': true,
    },
    extends: [
        'airbnb-base',
    ],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['jest'],
    rules: {
        indent: ['error', 4],
        'no-underscore-dangle': 'off',
        'no-console': 'off',
        'max-len': 'off',
        'import/extensions': [
            'error', 'always',
            {
                js: 'always',
            },
        ],
    },
};

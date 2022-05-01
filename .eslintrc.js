module.exports = {
    env: {
        browser: true,
        es2021: true,
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
        'no-underscore-dangle': 'off',
        'no-console': 'off',
        'max-len': 'off',
        indent: ['error', 4],
        'import/extensions': [
            'error', 'always',
            {
                js: 'always',
            },
        ],
    },
};

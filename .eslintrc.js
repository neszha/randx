module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
        'jest/globals': true,
    },
    extends: [
        'airbnb-base',
    ],
    parserOptions: {
        ecmaVersion: 12,
    },
    plugins: ['jest'],
    rules: {
        indent: ['error', 4],
        'no-underscore-dangle': 'off',
        'no-console': 'off',
        'max-len': 'off',
    },
};

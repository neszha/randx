module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
        'jest/globals': true,
    },
    extends: 'airbnb-base',
    overrides: [
    ],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    plugins: ['jest'],
    rules: {
        indent: ['error', 4],
        'no-underscore-dangle': 'off',
        'no-console': 'off',
        'max-len': 'off',
        'linebreak-style': 'off',
    },
};

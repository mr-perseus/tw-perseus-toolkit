module.exports = {
    env: {
        es6: true,
        node: true,
        jquery: true,
        browser: true,
    },
    extends: [
        'airbnb-base',
        'eslint:recommended',
        'plugin:prettier/recommended',
    ],
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': ['warn'],
        'func-names': 'off',
        'prefer-rest-params': 'off',
        'no-console': ['warn', { allow: ['error'] }],
    },
    globals: {
        CinemaWindow: true,
        Map: true,
        west: true,
        wman: true,
        scriptUpdater: true,
        Premium: true,
        UserMessage: true,
        JobWindow: true,
    },
};

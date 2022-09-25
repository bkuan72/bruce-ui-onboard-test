module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "no-undef": 0,
        "no-unused-vars": 0,
        "no-unexpected-multiline": 1,
        "semi": 1,
        "indent": [ 1, 4 ],
        "no-async-promise-executor": 1,
        "no-compare-neg-zero": 1,
        "no-const-assign": 1,
        "no-constant-condition": 1,
        "no-dupe-args": 2,
        "no-dupe-class-members": 2,
        "no-irregular-whitespace": [ 1, { "skipComments": true, "skipRegExps": true }],
        "no-loss-of-precision": 1,
        "no-new-symbol": 2,
        "no-self-assign": 2,
        "no-useless-escape": 1,
        "arrow-body-style": [ 1, "as-needed" ],
        "block-scoped-var": 1,
        "camelcase": [ 1, { ignoreDestructuring: true }],
        "class-methods-use-this": 0,
        "curly": 1,
        "no-confusing-arrow": 1,
        "array-bracket-spacing": [ 1, "always", { "singleValue": false, "arraysInArrays": false, "objectsInArrays": false }],
        "array-bracket-newline": [ 1, "consistent" ],
        "brace-style": [ 1, "stroustrup" ],
        "quotes": [ 1, "double" ],
        "no-mixed-spaces-and-tabs": 1,
        "no-empty": 1,
        "no-prototype-builtins": 0,
        "@typescript-eslint/brace-style": [ 1, "stroustrup" ],
        "@typescript-eslint/comma-dangle": 1,
        "@typescript-eslint/consistent-type-definitions": 1
    },
    "extends": "eslint:recommended"
};

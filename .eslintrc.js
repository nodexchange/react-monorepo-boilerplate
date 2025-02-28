module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest/globals": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:jest/recommended",
        "plugin:react/recommended",
        "react/jsx-runtime"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "quotes": 2
    },
    "settings": {
        "react": {
            "version": "detect",
        }
    }
};

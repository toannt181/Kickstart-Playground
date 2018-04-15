module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y"
    ],
    "parser": "babel-eslint",
    "parserOptions": {
        "sourceType": "module",
        "allowImportExportEverywhere": false,
        "codeFrame": false
    },
    "env": {
        "browser": true,
        "node": true
    },
    "rules": {
        "semi": 0,
        'react/jsx-filename-extension': 0,
        'jsx-a11y/anchor-is-valid': 0,
        "comma-dangle": [
            2,
            "always-multiline"
        ],
        'react/prefer-stateless-function': 0,
    }
}

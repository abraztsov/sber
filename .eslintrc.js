module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": ["react-app", "plugin:jsx-a11y/recommended"],
    "parserOptions": {
        "experimentalDecorators": true,
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "jsx-a11y"
    ],
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-unused-vars": [0],
    }
};

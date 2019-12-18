module.exports = {
  parser: "babel-eslint",
  plugins: ["react-hooks"],
  env: {
    jest: true,
    browser: true
  },
  rules: {
    "react/prop-types": 0,
    camelcase: 0,
    "react/no-unused-prop-types": 0,
    "new-cap": [
      "error",
      { newIsCapExceptions: ["i18n"], capIsNewExceptions: ["Map", "Children"] }
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": 0
  },
  extends: [
    "standard",
    "standard-react",
    "plugin:prettier/recommended",
    "prettier/standard",
    "prettier/react"
  ],
  globals: {
    atob: true,
    btoa: true
  },
  settings: {
    react: {
      version: "detect" // React version. "detect" automatically picks the version you have installed.
    },
    propWrapperFunctions: [
      // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
      "forbidExtraProps",
      { property: "freeze", object: "Object" },
      { property: "myFavoriteWrapper" }
    ],
    linkComponents: [
      // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
      "Hyperlink",
      { name: "Link", linkAttribute: "to" }
    ]
  }
}

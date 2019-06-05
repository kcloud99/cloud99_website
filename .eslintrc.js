module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  plugins: ["prettier", "react"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: "module",
  },
  rules: {
    "react/jsx-one-expression-per-line": "off",
    "no-plusplus": "off",
    "no-console": "off",
    camelcase: "off",
    "jsx-a11y/label-has-for": "off",
    "react/forbid-prop-types": "off",
    "import/no-unresolved": "off",
    "react/button-has-type": "off",
    "no-nested-ternary": "off",
    "consistent-return": "off",
    "no-bitwise": "off",
  },
}

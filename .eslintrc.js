module.exports = {
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module",
    ecmaFeatures: { experimentalObjectRestSpread: true }
  },
  plugins: ["prettier"],
  env: { jest: true, browser: true, es6: true },
  extends: ["airbnb-base", "prettier"],
  rules: {
    "prettier/prettier": ["error", { singleQuote: true }],
    quotes: ["error", "single"],
    "arrow-parens": ["warn", "as-needed"],
    "no-console": "warn",
    curly: ["error", "multi"],
    "no-await-in-loop": "off",
    "import/no-extraneous-dependencies": [
      "error",
      { devDependencies: ["**/*.test.js"] }
    ]
  }
};

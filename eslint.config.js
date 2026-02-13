const coreWebVitals = require("eslint-config-next/core-web-vitals");

module.exports = [
  ...coreWebVitals,
  {
    rules: {
      "@next/next/no-html-link-for-pages": "off",
    },
  },
];

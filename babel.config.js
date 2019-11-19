module.exports = function(api) {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['>0.25%', 'ie 11', 'not op_mini all']
        }
      }
    ],
    '@babel/preset-typescript',
    '@babel/preset-react'
  ];

  const plugins = [
    "react-loadable/babel",
    "@babel/plugin-transform-runtime",
    "@babel/plugin-syntax-dynamic-import",
    [
      "module-resolver",
      {
        "root": [
          "./src"
        ],
        "alias": {
          "@pages": "./src/pages",
          "@components": "./src/components",
          "@constants": "./src/constants",
          "@mocks": "./src/mocks",
          "@images": "./src/assets/images",
          "@helpers": "./src/helpers",
          "@ui-kit": "./src/ui-kit",
        }
      }
    ]
  ];

  return {
    presets,
    plugins
  };
}
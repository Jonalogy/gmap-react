module.exports = {
  env: {
    node: true,
    commonjs: true,
    es6: true
  },
  extends: ['eslint:recommended', 'plugin:node/recommended'],
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    },
    sourceType: 'module'
  },
  plugins: ['node'],
  rules: {
    'node/exports-style': ['error', 'module.exports']
  }
};

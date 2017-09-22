module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  ecmaFeatures: {
    jsx: true,
  },
  rules: {
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'no-underscore-dangle': 0,
    'arrow-parens': [
      'error',
      'always',
    ],
    'react/jsx-filename-extension': 0,
    'react/require-default-props': 0,
  },
};

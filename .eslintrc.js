module.exports = {
  'env': {
    'browser': true,
    'es6': true
  },
  'extends': [
    'plugin:prettier/recommended',
    'plugin:react/recommended'
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    'prettier'
  ],
  'rules': {
    'prettier/prettier': 'error'
  }
}

module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/airbnb'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'semi': 0,
    'indent': 0,
    'no-underscore-dangle': 0,
    'import/extensions': ['off', 'always', {
      'js': 'never',
      'vue': 'never'
    }]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
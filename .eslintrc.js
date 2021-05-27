module.exports = {
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 12,
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es2021: true,
    browser: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
  ],
  rules: {
    'max-len': 0,
    'default-case': 0,
    'dot-notation': 0,
    'global-require': 0,
    'no-unused-vars': 0,
    'no-control-regex': 0,
    'no-useless-escape': 0,
    'no-param-reassign': 0,
    'object-curly-newline': 0,
    'no-unused-expressions': 0,

    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'react-hooks/exhaustive-deps': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-one-expression-per-line': 0,

    'import/extensions': 0,
    'import/no-unresolved': 0,

    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        aspects: ['preferButton'],
        components: ['Link'],
        specialLink: [
          'hrefLeft',
          'hrefRight',
        ],
      },
    ],
    'jsx-a11y/img-redundant-alt': 0,
  },
};

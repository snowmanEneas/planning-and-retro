module.exports = {
    root: true,
    env: { node: true },
    extends: [
      'plugin:vue/recommended',
      'eslint:recommended',
      'prettier'
    ],
    parserOptions: { parser: 'babel-eslint' },
    rules: {
      'vue/attribute-hyphenation': 'error',
      'vue/component-name-in-template-casing': ['error', 'kebab-case'],
      'vue/html-closing-bracket-newline': 'error',
      'vue/html-closing-bracket-spacing': 'error',
      'vue/html-end-tags': 'error',
      'vue/html-indent': 'error',
      'vue/html-quotes': 'error',
      'vue/html-self-closing': 'error',
      'vue/multiline-html-element-content-newline': 'error',
      'vue/max-attributes-per-line': [
        'error',
        {
          singleline: 1,
          multiline: {
            max: 1,
            allowFirstLine: false,
          },
        },
      ],
      'vue/name-property-casing': ['error', 'kebab-case'],
      'vue/no-multi-spaces': 'error',
      'vue/no-spaces-around-equal-signs-in-attribute': 'error',
      'vue/no-template-shadow': 'error',
      'vue/prop-name-casing': 'error',
      'vue/require-default-prop': 'error',
      'vue/require-prop-types': 'error',
      'vue/singleline-html-element-content-newline': 'error',
      'vue/v-bind-style': 'error',
      'vue/v-on-style': 'error',
      'vue/attributes-order': 'error',
      'vue/no-confusing-v-for-v-if': 'error',
      'vue/no-v-html': 'error',
      'vue/order-in-components': 'error',
      'vue/this-in-template': 'error',
      'vue/script-indent': 'error',
      'no-shadow': 'error',
      'semi': ['error', 'never'],
      'comma-dangle': ['error', 'always-multiline'],
      'max-len': [
        'error',
        {
          'code': 120,
          'tabWidth': 2,
        },
      ],
    },
    overrides: [{ files: ['**/__tests__/*.{j,t}s?(x)'], env: { jest: true } }],
  }
  
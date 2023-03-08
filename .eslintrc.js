module.exports = {
  env: {
    browser: true,
    node: true
  },
  parser: '@babel/eslint-parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: ['react', 'prettier'],
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    },
    babelOptions: {
      presets: ['@babel/preset-react']
    }
  },
  requireConfigFile: false,
  settings: {
    'import/resolver': 'node'
  },
  rules: {
    'space-before-function-paren': 'off',
    'prettier/prettier': 0, // 关闭Vscode的prettier验证(防止vscode的prettier冲突！！！！！！)
    semi: 0, // 行末分号，根据编码习惯选择添加，这里配置的不加分号
    'no-console': 0,
    'comma-dangle': ['error', 'never'], // {}末尾逗号关闭
    'max-len': 0,
    'space-before-function-paren': [0, 'always'],
    'no-unused-expressions': [
      0,
      {
        allowShortCircuit: true,
        allowTernary: true
      }
    ],
    'arrow-body-style': [0, 'never'],
    'func-names': 0,
    'prefer-const': 0,
    'no-extend-native': 0,
    'no-param-reassign': 0,
    'no-restricted-syntax': 0,
    'no-eval': 0,
    'no-continue': 0,
    'no-unused-vars': [
      0,
      {
        ignoreRestSiblings: true
      }
    ],
    'no-underscore-dangle': 0,
    'global-require': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    // react
    'react/jsx-first-prop-new-line': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-no-bind': 0,
    'react/no-array-index-key': 0,
    'react/require-default-props': 0,
    'react/forbid-prop-types': 0,
    'react/no-string-refs': 0,
    'react/no-find-dom-node': 0,
    'react/no-danger': 0,
    'react/prop-types': 0,
    'react/display-name': 0,
    'react/no-deprecated': 0,
    'react/no-direct-mutation-state': 0,
    'jsx-a11y/href-no-hash': 0,
    'jsx-a11y/no-static-element-interactions': 0
  }
}

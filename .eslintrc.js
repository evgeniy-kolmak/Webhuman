module.exports = {
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
    'plugin:import/recommended'
  ],
  plugins: ['react', '@typescript-eslint', 'import'],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: "./"
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".ts", ".tsx", ".native.js"],
      },
      "typescript": {}
    }
  },
  rules: {
    'linebreak-style': 'off',
    'import/extensions': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    "import/no-extraneous-dependencies": [
      "error", {
        "devDependencies": false,
        "optionalDependencies": false,
        "peerDependencies": false,
        "packageDir": "./"
      }
    ],
    "import/no-unresolved": "off",
  },
};
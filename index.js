module.exports = {
  plugins: ['markdown', 'json-light', 'jsdoc'],
  parserOptions: {
    sourceType: 'module',
    impliedStrict: true,
    ecmaVersion: 2017
  },
  env: {
    commonjs: true,
    es6: true,
    node: true
  },
  rules: {
    'array-bracket-newline': ['error', 'consistent'],
    'block-scoped-var': 'off',
    'brace-style': ['error', '1tbs', {allowSingleLine: false}],
    'camelcase': ['error', {properties: 'always'}],
    'comma-dangle': ['error', 'never'],
    'comma-spacing': ['error', {before: false, after: true}],
    'comma-style': ['error', 'last'],
    'complexity': 'off',
    'consistent-return': 'off',
    'consistent-this': 'warn',
    'curly': ['error', 'all'],
    'default-case': 'off',
    'dot-notation': 'error',
    'eol-last': 'error',
    'eqeqeq': ['error', 'allow-null'],
    'func-names': 'off',
    'function-paren-newline': ['error', 'multiline'],
    'guard-for-in': 'off',
    'handle-callback-err': ['error', '^(err|error|anySpecificError)$'],
    'indent': ['error', 2],
    'key-spacing': ['error', {beforeColon: false, afterColon: true}],
    'keyword-spacing': 'error',
    'max-depth': 'off',
    'max-len': 'off',
    'max-nested-callbacks': ['warn', 4],
    'max-params': 'off',
    'max-statements': 'off',
    'new-cap': ['error', {newIsCap: true, capIsNew: false}],
    'new-parens': 'error',
    'newline-after-var': ['error', 'always'],
    'no-alert': 'error',
    'no-array-constructor': 'error',
    'no-bitwise': 'off',
    'no-caller': 'error',
    'no-catch-shadow': 'error',
    'no-cond-assign': ['error', 'except-parens'],
    'no-console': 'error',
    'no-const-assign': 'error',
    'no-constant-condition': 'off',
    'no-continue': 'off',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-delete-var': 'error',
    'no-div-regex': 'off',
    'no-dupe-args': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-else-return': 'error',
    'no-empty': 'error',
    'no-empty-character-class': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-ex-assign': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-parens': 'off',
    'no-extra-semi': 'error',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-func-assign': 'error',
    'no-implied-eval': 'error',
    'no-inline-comments': 'error',
    'no-inner-declarations': ['error', 'functions'],
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-loop-func': 'warn',
    'no-mixed-requires': ['off', false],
    'no-mixed-spaces-and-tabs': ['error', false],
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-multiple-empty-lines': ['error', {max: 1}],
    'no-native-reassign': 'error',
    'no-negated-in-lhs': 'error',
    'no-nested-ternary': 'warn',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-require': 'error',
    'no-new-wrappers': 'error',
    'no-obj-calls': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-path-concat': 'error',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-process-env': 'off',
    'no-process-exit': 'off',
    'no-proto': 'error',
    'no-redeclare': 'error',
    'no-regex-spaces': 'error',
    'no-restricted-modules': 'off',
    'no-return-assign': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'warn',
    'no-sequences': 'error',
    'no-shadow': 'error',
    'no-shadow-restricted-names': 'error',
    'no-spaced-func': 'error',
    'no-sparse-arrays': 'error',
    'no-sync': 'off',
    'no-ternary': 'off',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'error',
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'off',
    'no-underscore-dangle': 'off',
    'no-unreachable': 'error',
    'no-unused-expressions': 'error',
    'no-unused-vars': ['error', {vars: 'all', args: 'none'}],
    'no-use-before-define': ['error', {functions: false}],
    'no-var': 'error',
    'no-void': 'off',
    'no-warning-comments': ['warn', {terms: ['todo', 'fixme', 'xxx'], location: 'start'}],
    'no-with': 'error',
    'object-curly-newline': ['error', {consistent: true}],
    'object-shorthand': ['error', 'always'],
    'one-var': ['error', 'never'],
    'operator-assignment': ['off', 'always'],
    'operator-linebreak': ['error', 'after'],
    'padded-blocks': 'off',
    'prefer-const': ['error', {destructuring: 'all', ignoreReadBeforeAssign: true}],
    'quote-props': ['error', 'consistent-as-needed'],
    'quotes': ['error', 'single', 'avoid-escape'],
    'radix': 'error',
    'semi': ['error', 'always'],
    'semi-spacing': ['error', {before: false, after: true}],
    'sort-vars': 'off',
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': ['error', {anonymous: 'never', named: 'never'}],
    'space-in-brackets': 'off',
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-unary-ops': ['error', {words: true, nonwords: false}],
    'spaced-comment': ['error', 'always'],
    'strict': 'off',
    'use-isnan': 'error',
    'valid-typeof': 'error',
    'vars-on-top': 'error',
    'wrap-iife': ['error', 'any'],
    'wrap-regex': 'off',
    'yoda': ['error', 'never'],
    'jsdoc/newline-after-description': 'warn',
    'require-jsdoc': ['warn', {
      require: {
        FunctionDeclaration: true,
        MethodDefinition: true,
        ClassDeclaration: true
      }
    }],
    'valid-jsdoc': ['warn', {
      prefer: {
        returns: 'return',
        augments: 'extends',
        arg: 'param',
        virtual: 'abstract',
        constructor: 'class'
      },
      preferType: {
        Boolean: 'boolean',
        Number: 'number',
        String: 'string',
        Undefined: 'undefined',
        Null: 'null',
        object: 'Object',
        array: 'Array',
        date: 'Date',
        regexp: 'RegExp'
      },
      requireReturn: false,
      requireReturnType: true,
      requireParamDescription: true,
      requireReturnDescription: true,
      matchDescription: '.+'
    }]
  }
};

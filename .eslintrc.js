// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing'      : 'off',
    // allow debugger during development
    'no-debugger'                 : process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'semi'                        : ['error', 'always'],
    'semi-spacing'                : ['error', {'after': true, 'before': false}],
    'semi-style'                  : ['error', 'last'],
    'space-before-function-paren' : ['error', 'never'],
    'no-extra-semi'               : 'error',
    'no-unexpected-multiline'     : 'error',
    'no-unreachable'              : 'error',
    'no-var'                      : 'error',
    'no-template-curly-in-string' : 'error',
    'require-jsdoc'               : ['error', {
                                      'require': {
                                        "FunctionDeclaration"    : true,
                                        "MethodDefinition"       : true,
                                        "ClassDeclaration"       : true,
                                        "ArrowFunctionExpression": true,
                                        "FunctionExpression"     : true
                                      }
                                    }],
    'valid-jsdoc'                 : ['error', {
                                      'prefer': {
                                        'arg'                    : 'param',
                                        'argument'               : 'param',
                                        'class'                  : 'constructor',
                                        'return'                 : 'return',
                                        'virtual'                : 'abstract'
                                      },
                                      'preferType': {
                                        'Boolean'                : 'Boolean',
                                        'Number'                 : 'Number',
                                        'Object'                 : 'Object',
                                        'String'                 : 'String'
                                      },
                                      'requireReturn'            : false,
                                      'requireParamDescription'  : true,
                                      'requireReturnDescription' : true
                                    }],
    'camelcase'                   : 'error',
    'no-tabs'                     : 'error',
    'no-trailing-spaces'          : 'error',
    'quotes'                      : ['error', 'single'],
    'switch-colon-spacing'        : ['error', {'after': true, 'before': false}],
    'template-tag-spacing'        : ['error', 'always'],
    'arrow-spacing'               : 'error',
    'object-curly-spacing'        : ['error', 'always']
  }
}

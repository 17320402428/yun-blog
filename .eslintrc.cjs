/*
 * @Author: bin
 * @Date: 2022-09-22 14:58:43
 * @LastEditors: bin
 * @LastEditTime: 2023-03-02 09:14:39
 * @objectDescription: 入口文件
 */
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'standard-with-typescript',
    'prettier' // 就是这段配置
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  rules: {
    'vue/no-multiple-template-root': 0,
    'vue/multi-word-component-names': "off",
    'no-unused-vars': [
      'error',
      // we are only using this rule to check for unused arguments since TS
      // catches unused variables but not args.
      { varsIgnorePattern: '.*', args: 'none' }
    ]
  }
}

module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  'extends': 'react-app',
  rules: {
    "indent": ["error", 2],
    'no-console': 'off',
    'no-debugger': 'off',
    'max-len': 0,
    'linebreak-style': 0,
    'no-param-reassign': 0,
    'no-alert': 0,
    'no-tabs': 'off',
    "no-plusplus": 0,
    "no-multiple-empty-lines": [2, {"max": 2}],//空行最多不能超过2行
    "no-mixed-operators": 0, // 循序混合运算
    "eqeqeq": [2, "allow-null"], // 使用 === 替代 ==  

    // 数组和对象键值对最后一个逗号， never参数：不能带末尾的逗号, always参数：必须带末尾的逗号，
    // always-multiline：多行模式必须带逗号，单行模式不能带逗号
    "comma-dangle": [2, "always-multiline"],
    // 控制逗号前后的空格
    "comma-spacing": [2, { "before": false, "after": true }],
  },

  parserOptions: {
    parser: 'babel-eslint'
  }
};
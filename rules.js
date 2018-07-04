module.exports = {
  /* 潜在的错误 */
  'no-cond-assign': 2, // 禁止在条件运算符中赋值，if(a=1)
  'no-constant-condition': 2, // 条件语句禁止使用常量表达式
  'no-console': 1, // 禁止使用console对象输出调试信息语句（生产环境需要关掉）
  'no-debugger': 2, // 禁止使用debugger语句
  'no-dupe-args': 2, // 禁止出现重复的函数参数
  'no-dupe-keys': 2, // 禁止出现重复的键值
  'no-duplicate-case': 2, // switch语句禁止出现重复的case条件
  'no-empty': 2, // 禁止出现空的语句块，包含注释的除外
  'no-extra-semi': 2, // 禁止出现多余的分号
  'no-extra-parens': 2, // 禁止出现多余的圆括弧
  /* 减少BUG */
  'curly': [2, 'multi-line'], // 条件语句后的单个语句添加花括符
  'no-multi-spaces': 2, // 禁止多余空格
  'no-self-assign': 2, // 禁止将变量自身赋值给自身
  'no-unused-labels': 2, // 禁止无用label标签
  'no-useless-return': 2, // 禁止无用return语句
  /* 变量定义 */
  'no-undef': 2, // 禁止使用未定义的变量，除非显式申明了全局属性
  'no-undef-init': 2, // 禁止将申明变量时，初始为undeined
  'no-unused-vars': 2, // 禁止申明一个变量，但不使用
  'no-use-before-define': 2, // 禁止在变量，函数，类申明前使用
  /* 编码风格 */
  'no-tabs': 1, // 禁止使用制表符
  'semi': [1, 'always', { omitLastInOneLineBlock: true }], // 使用分号结束语句，除了语句块独占一行
  'semi-spacing': 1, // 分号后要加空格
  'semi-style': 1, // 强制分号出现在语句结束位置
  'quotes': [1, 'single', { avoidEscape: true }], // 字符串使用单引号
  'padding-line-between-statements': [1, { blankLine: 'always', prev: 'var', next: 'return' }], // 不同语句块间加空行
  'block-spacing': 1, // 语句块与花括符间加空格
  'brace-style': [1, '1tbs'], // 左花括符与条件语句(if, else...)在同一行
  'comma-dangle': [1, 'never'], // 数组或对象最后一个元素后不能加逗号
  'comma-spacing': 1, // 逗号运算符两边空格：前面不加，后面加
  'comma-style': 1, // 逗号加在当前行的结束位置
  'computed-property-spacing': [1, 'never'], // 可计算属性与中括弧间不加空格
  'consistent-this': [1, 'that'], // 回调函数传this上下文, 别名使用that
  'eol-last': 1, // 文件结束添加空行
  'func-call-spacing': 1, // 函数调用，函数名称与()之间不能加空字符
  'func-name-matching': 1, // 函数赋值，标识符要一致
  // 'func-names': 1, // 函数必须定义名称：方便调试时，在堆栈中刚看到函数名
  'function-paren-newline': 1, // 函数参数为多行时，参数增加新的一行
  'indent': [1, 2], // 缩进使用两个空格的宽度
  'key-spacing': 1, // 对象键冒号前不加空格，冒号后加空格
  'keyword-spacing': 1, // 关键词前后要加空格
  'linebreak-style': [1, 'unix'], // 换行使用unix风格 \n
  'lines-around-comment': [1, {beforeBlockComment: true, allowObjectEnd: true, allowArrayEnd: true}], // 注释两边的空行: 块注释前添加空行
  'spaced-comment': [1, 'always', { exceptions: ['-', '+'] }], // 注释符后加空格
  'new-parens': 1, // 构造函数无参数时，new 一个实例也必须添加括弧()，增加代码清晰度
  'newline-per-chained-call': [1, {ignoreChainWithDepth: 2}], // 链式调用时，需要换行，同一行可以调用两次
  'no-lonely-if': 1, // 不允许在else语句块中只出现一个if语句，此时应该使用 else if
  'no-multiple-empty-lines': 1, // 不允许添加连续的空行
  'no-trailing-spaces': 1, // 不允许行末尾添加多余的空字符
  'no-unneeded-ternary': 1, // 禁止使用没有必要的三目运算符，?: 通常出现在返回结果是一个布尔值，和单个变量之间的比较（直接赋值或者使用||运算符）
  'space-before-blocks': 1, // 语句块前必须添加空格
  'space-before-function-paren': 1, // 函数括弧前必须添加空格
  'space-in-parens': 1, // 圆括弧内部开始于结束位置不能添加空格
  'space-infix-ops': 1, // 中缀运算符两端添加空格
  'wrap-regex': 1, // 正则表达式需要用圆括弧包裹起来，避免在特定场景下，斜杠看起来像分割符
  'nonblock-statement-body-position': 1, // 不允许单一语句行独占一行，{}语句块内的除外
};

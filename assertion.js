// test case: the little cat cat2 is in the hat hat2, we like it.
// \b 单词边界

const str = 'the little cat cat2 is in the hat hat2, we like it.';

const reg = /(\w+)(\s+\b\1\b)+/g;

console.log(str.replace(reg, '$1'));
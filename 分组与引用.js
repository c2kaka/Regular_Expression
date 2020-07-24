const str = 'the little cat cat is in the hat hat, we like it.';
let reg = /(\w+) \1/gm;
console.log(str.replace(reg, '$1'));

const str2 = 'the little cat cat is in the hat hat hat, we like it.';
let reg2 = /(\w+)(\s\1)+/gm;
console.log(str2.replace(reg2, '$1'));
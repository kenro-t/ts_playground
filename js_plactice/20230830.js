let a = [1,2,3];
let b = a;
b[0] = 'hoge';
//phpと違い配列、オブジェクトは参照渡しになる
console.log(a[0]);


let c = [1,2,3];
// structuredCloneを利用することで参照渡しではなく値渡しになる
let d = structuredClone(c);

d[0] = 'fuga';

console.log(c[0]);


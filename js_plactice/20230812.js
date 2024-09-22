// 存在しないプロパティにアクセスするとエラーになる
const fruit = undefined;
const fruitName = fruit.name;

// オプショナルチェーンでアクセスすると存在しなかった場合にはundefinedが返ってくる
const food = undefined;
const foodName = food?.name;

// 配列に対しても利用できる
const food2 = food?.[1];

// ネストして呼び出せる 
const hoge = food?.name?.hoge;

// functionが存在するかもチェックできる
const foo = ((n)=> n+1);
const bar = foo?.(1);
// ファンクション
const returnFunc = (async ()=> {
    return new Promise((resolve, reject) => {
        resolve('promiseResolve!');
    })
});

const returnPromise = new Promise((resolve, reject) => {
    resolve('resolve!');
});

// Promise.allは配列でプロミスを渡す
// Promise.all();

(async ()=> {
    // プロミスのリスト
    // returnFuncはプロミスを返す’ファンクション’のため不可（returnFuncはファンクションのオブジェクト自体が返ってきてしまう）
    const promiseList = [returnFunc,returnPromise];

    const PromiseAll = await Promise.all(promiseList);

    console.log(PromiseAll)

    // プロミスにしてやることで動かせる
    const returnPromiseObj = returnFunc();

    const promiseList2 = [returnPromiseObj,returnPromise];


    // promise.allは配列で引数を渡す
    const PromiseAll2 = await Promise.all(promiseList2);

    console.log(PromiseAll2)
})();

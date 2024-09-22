// new Promiseで返すパターン
(async ()=> {
    const returnPromise = await new Promise((resolve, reject) => {
        // resolveで解決
        resolve('promiseResolve!');
        // rejectで失敗
        reject('promiseReject!');
    })
    // rejectした場合、値がそのまま入ってくる
    .catch(e=>e);

    console.log(returnPromise);
})();

// asyncで返すパターン
(async ()=> {
    const returnAsync = await (async()=> {
        // returnで解決
        return 'resolve!';
        // throw Errorで失敗
        throw new Error('reject!');
    })()
    // エラーオブジェクトが入ってくるのでメッセージプロパティを読み取る
    .catch(e => e.message);

    console.log(returnAsync);
})();
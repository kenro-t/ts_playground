(async ()=> {
    
    const promise1 = new Promise((resolve, reject) => {
        setTimeout(resolve, 3000,'promise1');
    });

    const promise2 = new Promise((resolve, reject) => {
        setTimeout(resolve, 2000,'promise2');
    });

    const promise3 = new Promise((resolve, reject) => {
        resolve('promise3');
    });

    const promiseList = [promise1, promise2, promise3];

    // PromiseAllに入ってくる順番は処理終了順ではなく、配列の順番が担保される
    const PromiseAll = await Promise.all(promiseList)
    PromiseAll.forEach(e=> console.log(e))

})();
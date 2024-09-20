// Promise.race
(async ()=> {
    
    const promise1 = new Promise((resolve, reject) => {
        setTimeout(resolve, 3000,'race1');
    });

    const promise2 = new Promise((resolve, reject) => {
        // setTimeout(resolve, 2000,'promise2');
        setTimeout(reject, 2000,'race2');
    });

    const promiseList = [promise1, promise2];

    // 成否に関係なく最初に戻ってきた値が入ってくる
    const PromiseAll = await Promise.race(promiseList).catch(e => e);
    console.log(PromiseAll);


})();

// Promise.any
(async ()=> {
    
    const promise1 = new Promise((resolve, reject) => {
        setTimeout(resolve, 3000,'any1');
    });

    const promise2 = new Promise((resolve, reject) => {
        setTimeout(reject, 2000,'any2');
    });

    const promiseList = [promise1, promise2];

    // 最初に成功した値が入ってくる
    const PromiseAll = await Promise.any(promiseList).catch(e => e);
    console.log(PromiseAll);

    
})();
(async ()=> {
    
    const promise1 = new Promise((resolve, reject) => {
        setTimeout(resolve, 3000,'promise1');
    });

    const promise2 = new Promise((resolve, reject) => {
        setTimeout(resolve, 2000,'promise2');
    });

    const promise3 = new Promise((resolve, reject) => {
        reject('promise3');
    });

    const promiseList = [promise1, promise2, promise3];

    // Promise.allSettledはallと違い、全て成功した場合ではなく、成否に関係なく値が入ってくる
    const PromiseAllSetteled = await Promise.allSettled(promiseList)
    PromiseAllSetteled.forEach(result=> {
        // resultには成功した場合、statusとvalueのプロパティが入ってくる
        if(result.status === 'fulfilled') {
            console.log(result.status);
            console.log(result.value);
        }
        
        // rejectされた場合にはvalueではなくreasonとなる
        if(result.status === 'rejected') {
            console.log(result.status);
            console.log(result.reason);
        }
    })

})();
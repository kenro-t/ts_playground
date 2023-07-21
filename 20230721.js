const p2 = new Promise((resolve, reject) => {
    // コールバックはtrycatchで書いても処理の外側で呼び出すことになるのでキャッチできない
    try {
        setTimeout(() => {
            throw new Error("Uncaught Exception!");
          }, 1000);
    } catch (error) {
        throw e;
    }
    
  });
  
  p2.catch((e) => {
    console.error(e); // キャッチできない
  });
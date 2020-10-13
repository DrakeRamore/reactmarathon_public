function getPromise(delay, message) {
    return new Promise(function(resolve) {
        setTimeout(() => {
            resolve(message);
        }, delay);
    });
}
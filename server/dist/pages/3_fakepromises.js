function Promise(fn) {
    this.thenHandlers = [];
    this.catchHandlers = [];
    this.isResolved = false;
    this.isRejected = false;
    setTimeout(() => fn(this.resolve.bind(this), this.reject.bind(this)));
}
const oldPromisePrototype = Promise.prototype;
Promise.prototype = {
    resolve: function () {
        this.thenHandlers.forEach(handler => handler());
        this.isResolved = true;
    },
    reject: function () {
        this.catchHandlers.forEach(handler => handler());
        this.isRejected = true;
    },
    then: function (handler) {
        if (this.isResolved) {
            handler();
        }
        else {
            this.thenHandlers.push(handler);
        }
        return this;
    },
    catch: function (handler) {
        if (this.isRejected) {
            handler();
        }
        else {
            this.catchHandlers.push(handler);
        }
        return this;
    }
};
const p = new Promise((resolve, reject) => {
    Math.round(Math.random() * 10) % 2 === 0 ? resolve() : reject();
});
p.then(res => console.log('res')).catch((err) => console.log('reject'));
//Реализация Promise.all
function promiseAll(promises) {
    return new Promise((resolve, reject) => {
        const results = [];
        let resolvedCount = 0;
        promises.forEach((promise, index) => {
            promise
                .then(result => {
                results[index] = result;
                resolvedCount++;
                if (promises.length === resolvedCount) {
                    resolve(results);
                }
            })
                .catch(err => {
                reject(err);
            });
        });
    });
}
promiseAll([
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('foo');
        }, 5000);
    }),
    new Promise((resolve) => {
        setTimeout(() => {
            resolve('bar');
        }, 3000);
    }),
    new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.round(Math.random() * 10) % 2 === 0 ? resolve('baz') : reject(new Error());
        }, 300);
    })
]).then(resolve => console.log('RESOLVED: ', resolve))
    .catch(err => console.log('REJECTED: ', err));

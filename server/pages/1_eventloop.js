console.log(1);

setTimeout(() => {
    console.log(2)
}, 10)

const promise = new Promise(resolve => {
    console.log(3);
    setTimeout(() => {
        console.log(0)
    }, 0)
    resolve(4);
})

promise.then((res) => console.log(res))


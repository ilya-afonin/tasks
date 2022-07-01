function func() {
    let a = 5;
    const f = function () {
        return console.log(this)
    }
    f();
}

// const obj = {
//     fun () {
//        console.log(this)
//     }
// }
// console.log(obj.fun)


const arr = [10, 12, 15, 21];
for (let i = 0; i < arr.length; i++) {
    setTimeout(function () {
        console.log('Index: ' + i + ', element: ' + arr[i]);
    }, 3000);
}

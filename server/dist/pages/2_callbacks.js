// const obj1 = {
//     a: 5,
//     f: function () {
//         // return console.log('f this', this.)
//     },
//     f1: () => {
//         console.log('f1 this', this)
//     },
// }
// obj1.f()
// obj1.f1()
// const obj = {
//     fun() {
//         console.log(this)
//     },
// }
// console.log(obj.fun)
// const arr = [10, 12, 15, 21]
// for (let i = 0; i < arr.length; i++) {
//     setTimeout(function () {
//         console.log('Index: ' + i + ', element: ' + arr[i])
//     }, 3000)
// }
// let button = {}
// class a {
//     output() {
//         console.log(this)
//     }
// }
// let obj = new a()
// button.click = obj.output
// button.click()
const tree = {
    value: 1,
    node: {
        value: 2,
        node: {
            value: 3,
        },
    },
};

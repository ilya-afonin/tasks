// function sum(number) {
//     let value = number;
//     console.log(value);
//     const a = function (num) {
//         value = num + value;
//         console.log(value)
//         return a;
//     }
//     return a;
// }
function sum(number) {
    let value = number;
    return function a(num) {
        value = num + value;
        console.log(value);
        return a;
    };
}
sum(5)(6)(56);

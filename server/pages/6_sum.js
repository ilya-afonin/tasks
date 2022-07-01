function sum(number) {
    let value = number;
    console.log(value);
    const a = function (num) {
        value = num + value;
        console.log(value)
        return a;
    }
    return a;
}

sum(5)(6)(7)(30)

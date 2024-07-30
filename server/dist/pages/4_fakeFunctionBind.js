Function.prototype.bind = function (context, ...argsBind) {
    const fn = this;
    return function (...args) {
        return fn.apply(context, argsBind.concat(args));
    };
};
let testBind = function () {
    console.log(this);
    // console.log(args)
};
testBind();

map = (xs, fun) => {
    let ys = [];

    for(let x of xs) {
        res = fun(x);
        ys.push(res);
    }

    return ys;
}

const foo = [1, 3, 5, 7, 8, 9];
const fun = (x) => {
    return x*x;
}

bar = map(foo, fun);
console.log(bar);

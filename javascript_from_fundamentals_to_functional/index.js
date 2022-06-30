filter = (xs, fun) => {
    let ys = [];
    for(const [key, val] of Object.entries(xs)) {
        const res = fun(val, key, xs);
        if(res) {
            ys.push(val);
        }
    }

    debugger
    return ys;
}


const foo = [1, 2, 3, 4, 5];
const fun = (x) => {
    return (x % 2 == 0) ? true : false;
}

const bar = filter(foo, fun);
console.log(bar);

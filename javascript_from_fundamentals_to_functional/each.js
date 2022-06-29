const each = (xs, fun) => {
    for(const [key, val] of Object.entries(xs)) {
        fun(val, key, xs);
    }
}

const x2 = (x, y, xs) => {
    console.log('y: ' + y);
    console.log('x: ' + x*x);
}

const foo = [1, 3, 5, 7, 8, 9];
each(foo, x2);

const bar = {a: 1, b: 3, c: 5}
each(bar, x2);

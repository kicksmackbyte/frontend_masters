const reduce = (collection, fun, acc) => {
    for(const [_, val] of Object.entries(collection)) {
        acc = fun(acc, val);
    }

    return acc;
}

const letters = ['a', 'b', 'c', 'd'];
const bar = reduce(letters, (a, b) => {return a+b+a}, '');
console.log(bar);

const sum = reduce([1, 2], (sum, n) => {return sum + n}, 0);
console.log(sum);

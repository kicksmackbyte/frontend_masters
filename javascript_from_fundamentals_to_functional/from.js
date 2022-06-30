const from = function() {
    let arr = [];

    for(const a of arguments) {
        arr.push(a);
    }

    return arr
}

const arr = from(1, 2, 3, 4);
console.log(arr);

const add = function(a, b=2) {
    console.log(arguments); //only knows about passed-in arguments
    const arr = Array.prototype.slice.call(arguments);
    console.log(arr);
    return a + b;
}

add(5);

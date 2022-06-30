//const foo = (a, b, c, ...d) => {
const foo = function(a, b, c, ...d) {
    console.log(d);
}

foo('it', 'could', 'be', 'anyone', 'no one');

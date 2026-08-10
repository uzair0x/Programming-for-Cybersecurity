function add(a,b) {
    return a + b ;

}

function multiply(a, b) {
    return a * b;
}

function operation (func, first, second) {
    return func(first,second);
}

console.log(operation(add, 10 , 330));
console.log(operation(multiply, 10, 20));
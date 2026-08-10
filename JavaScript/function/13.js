function doNothing() {
    return undefined;

}
let a = doNothing();
let b = doNothing;

console.log(typeof a);
console.log(typeof b);

/// Normal Method

// let values = [10, 30, 50, 70, 100,];
// let sum = 0;
// for ( let i = 0 ; i < values.length ; i++){
//     sum += values[i];
// }

// console.log(sum);

console.log("--------------------For......of-----------------------------------");

let values = [10, 30, 50, 70, 100];
let sum = 0;
for (let number of values ){
    sum += number;
}

console.log(sum);
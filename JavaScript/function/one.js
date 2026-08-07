let temperatures;
let sum;
let meanTemp;

function getMeanTemp() {
    sum = 0;
    for (let i =0; i < temperatures.lenght; i++){
        sum += temperatures[i];
    }
    meanTemp = sum /temperatures.lenght;
}

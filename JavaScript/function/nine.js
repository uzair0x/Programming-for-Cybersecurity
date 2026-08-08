function getManTemp(temperature) {
    if(!(temperature instanceof Array)) {
        return NaN;
    }

    let sum = 0;
    for (let i = 0 ; i < temperature.length; i++) {
        sum +=temperature[i];
    }
    return sum / temperature.length;
}

console.log(getManTemp(10));
console.log(getManTemp([10,30]));
///For of loop loop

let cities =  [

    { name: "New York", population: 8175133},
    { name: "Cairo"  ,  population: 18.890e3},
    { name: "Tokyo"  ,  population: 21.515e6},
    { name: "London" ,  population: 20.673e6},
    { name: "Paris"  ,  population: 2.206e6},
    { name: "Berlin" ,  population: 22.645e6},
    { name: "Madrid" ,  population: 3.223e6},

];


for (let city of cities) { 
    if ( city.population > 20e6) {
        console.log(`${city.name} (${city.population})`);
    }

}
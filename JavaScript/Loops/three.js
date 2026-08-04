let  riskScores = [10, 30,  50 , 100];
let totalRisk = 0;

for (let i = 0; i < riskScores.length; i++) {
    totalRisk += riskScores[i];
}

console.log("Total Risk Score:", totalRisk);

if (totalRisk > 150) {
    console.log("High risk detected! inform the security Team");
}
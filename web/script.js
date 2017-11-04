var chr = 3.095678;
var choliday = -14.527039;
var cweekday = 2.274601;
var cweathersit = -12.239456;
var ctemp = 335.339553;
var catemp = 25.301369;
var chum = -78.364862;
var cwindspeed = -21.393127;

// Using linear regression to calculate the raw value
var rawPredictedValue = 
(chr * 0) + 
(choliday * 0) + 
(cweekday * 6) + 
(cweathersit * 2) + 
(ctemp * 0.46) + 
(catemp * 0.4545) + 
(chum * 0.72) + 
(cwindspeed * 0.2836)

// Calculate the range of possible values
var minPredicatedValue = rawPredictedValue - ((1 - 0.89) * rawPredictedValue);
var maxPredictedValue = rawPredictedValue + ((1 - 0.89) * rawPredictedValue);
console.log(minPredicatedValue + " to " + maxPredictedValue);
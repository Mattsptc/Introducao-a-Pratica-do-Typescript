"use strict";
var valorAny;
valorAny = 3;
console.log(typeof valorAny);
valorAny = true;
var valorString = 'teste';
valorString = valorAny;
// valorAny pode ser qlqr tipo - any vai de contrario c a funcao do typescript
var valorString2 = 'teste2';
valorString2 = valorAny;
function somarString(string1, string2) {
    console.log(string1 + string2);
}
somarString(valorString, valorString2);
// como valorAny = true o JS soma true + true = 2 
// considerando true = 1 e false = 0
somarString('ola ', "como vai?");

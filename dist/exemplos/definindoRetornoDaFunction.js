"use strict";
function somarValores(input1, input2) {
    if (typeof input1 === 'string' || typeof input2 === 'string') {
        return input1.toString() + input2.toString();
    }
    else
        input1 + input2;
}
console.log(somarValores(1, 'josepio'));
console.log(somarValores(1, 14));
console.log(somarValores('1', 1));
function somarValoresNumericos(numero1, numero2) {
    return numero1 + numero2;
}
console.log(somarValoresNumericos(1, 12));
function printaValoresNumericos(numero1, numero2) {
    console.log(numero1 + numero2);
}

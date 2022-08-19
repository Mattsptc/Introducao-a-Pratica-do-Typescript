"use strict";
var input1 = document.querySelector('#input1');
var input2 = document.querySelector('#input2');
var button = document.querySelector('#button');
function adicionarNumero(numero1, numero2, devePrintar, frase) {
    var resultado = numero1 + numero2;
    if (devePrintar) {
        console.log(frase + resultado);
    }
    return numero1 + numero2;
}
var devePrintar = true;
var frase;
frase = "O valor \u00E9: ";
if (button) {
    button.addEventListener('click', function () {
        if (input1 && input2) {
            console.log(adicionarNumero(Number(input1.value), Number(input2.value), devePrintar, frase));
        }
    });
}

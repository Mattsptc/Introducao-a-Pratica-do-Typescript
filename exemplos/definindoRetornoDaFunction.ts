type input = number | string 
function somarValores(input1: number | string, input2: number | string) {
    if (typeof input1 === 'string' || typeof input2 === 'string') {
        return input1.toString() + input2.toString()
    } else input1 + input2; 
}

console.log(somarValores(1, 'josepio'))
console.log(somarValores(1, 14))

console.log(somarValores('1', 1))


function somarValoresNumericos(numero1: number, numero2: number): number //define o tipo que vai sair
 {
    return numero1 + numero2;
}

console.log(somarValoresNumericos(1, 12))

function printaValoresNumericos(numero1: number, numero2: number): void // define que a funcao nao retorna NADA
 {
    console.log(numero1 + numero2)
}
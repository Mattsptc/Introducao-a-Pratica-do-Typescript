let input1 = document.querySelector('#input1') as HTMLInputElement;
let input2 = document.querySelector('#input2') as HTMLInputElement;
let button = document.querySelector('#button')


function adicionarNumero(numero1: number, numero2: number, devePrintar: boolean, frase: string) {
    let resultado = numero1 + numero2
    if (devePrintar) {
        console.log(frase + resultado)
    }
    return numero1 + numero2
}

let devePrintar = true;
let frase: string;
frase = `O valor é: `


if (button) {
button.addEventListener('click', () => {
    if (input1 && input2)
 {
    console.log(adicionarNumero(Number(input1.value), Number(input2.value), devePrintar, frase))
 }    
})
}
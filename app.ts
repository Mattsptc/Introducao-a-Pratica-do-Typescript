// Exercicio 1
interface employee {
  code: number;
  name: string;
}

let John: employee = {
  code: 10,
  name: "John",
};

console.log(John.code);

// Exercicio 2

interface pessoa {
  nome: string;
  idade: number;
  profissao: Profissao;
}

enum Profissao {
  Padeiro,
  Atriz,
}

let pessoa1: pessoa = {
  nome: "maria",
  idade: 29,
  profissao: Profissao.Atriz,
};
let pessoa2: pessoa = {
  nome: "roberto",
  idade: 19,
  profissao: Profissao.Padeiro,
};
let pessoa3: pessoa = {
  nome: "laura",
  idade: 32,
  profissao: Profissao.Atriz,
};
let pessoa4: pessoa = {
  nome: "carlos",
  idade: 19,
  profissao: Profissao.Padeiro,
};

// Exercicio 3

export {};
let botaoAtualizar = document.getElementById("atualizar-saldo");
let botaoLimpar = document.getElementById("limpar-saldo")!; // exclamacao  e sinal que dev tem ctza que o campo nao e nulo
let soma = document.getElementById("soma") as HTMLInputElement;
let campoSaldo = document.getElementById("campo-saldo");
let saldoTotal = 0;

limparSaldo();

function somarAoSaldo(soma: number) {
  if (campoSaldo) {
    campoSaldo.innerHTML += soma;
    campoSaldo.innerHTML = saldoTotal.toString();
    limparCampoSoma();
  }
}

function limparCampoSoma() {
  soma.value = "";
}

function limparSaldo() {
  if (campoSaldo) {
    saldoTotal = 0;
    campoSaldo.innerHTML = saldoTotal.toString()
  };
}

if (botaoAtualizar) {
botaoAtualizar.addEventListener("click", function () {
  somarAoSaldo(Number(soma.value));

});
}
botaoLimpar.addEventListener("click", function () {
  limparSaldo();
});

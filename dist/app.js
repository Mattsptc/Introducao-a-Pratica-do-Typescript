"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var John = {
    code: 10,
    name: "John",
};
console.log(John.code);
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Padeiro"] = 0] = "Padeiro";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
})(Profissao || (Profissao = {}));
var pessoa1 = {
    nome: "maria",
    idade: 29,
    profissao: Profissao.Atriz,
};
var pessoa2 = {
    nome: "roberto",
    idade: 19,
    profissao: Profissao.Padeiro,
};
var pessoa3 = {
    nome: "laura",
    idade: 32,
    profissao: Profissao.Atriz,
};
var pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: Profissao.Padeiro,
};
var botaoAtualizar = document.getElementById("atualizar-saldo");
var botaoLimpar = document.getElementById("limpar-saldo"); // exclamacao  e sinal que dev tem ctza que o campo nao e nulo
var soma = document.getElementById("soma");
var campoSaldo = document.getElementById("campo-saldo");
var saldoTotal = 0;
limparSaldo();
function somarAoSaldo(soma) {
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
        campoSaldo.innerHTML = saldoTotal.toString();
    }
    ;
}
if (botaoAtualizar) {
    botaoAtualizar.addEventListener("click", function () {
        somarAoSaldo(Number(soma.value));
    });
}
botaoLimpar.addEventListener("click", function () {
    limparSaldo();
});

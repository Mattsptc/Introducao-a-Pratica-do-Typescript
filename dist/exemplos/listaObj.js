"use strict";
var pessoa = {
    nome: 'josepio',
    idade: 35,
    profissao: 'developer'
};
// pessoa.idade = 'teste' nao pode alterar o tipo
var andre = {
    nome: 'andre',
    idade: 33,
    profissao: 'pintor'
};
var paula = {
    nome: 'andre',
    idade: 33,
    profissao: 'Developer'
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Desenvolvedora"] = 1] = "Desenvolvedora";
    Profissao[Profissao["JogadoraDeFutebol"] = 2] = "JogadoraDeFutebol";
    Profissao[Profissao["universitaria"] = 3] = "universitaria";
})(Profissao || (Profissao = {}));
var vanessa = {
    nome: 'Vanessa',
    idade: 22,
    profissao: Profissao.Desenvolvedora
};
var josefa = {
    nome: 'Josefa',
    idade: 42,
    profissao: Profissao.Desenvolvedora
};
var Jessica = {
    nome: 'Jessica',
    idade: 50,
    profissao: Profissao.universitaria,
    materias: ['Matematica', 'programacao']
};
function listar(lista) {
    for (var _i = 0, lista_1 = lista; _i < lista_1.length; _i++) {
        var item = lista_1[_i];
        console.log('- ', item);
    }
}
listar(Jessica.materias);

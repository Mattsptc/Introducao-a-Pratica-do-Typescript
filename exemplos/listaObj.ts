const pessoa = {
    nome: 'josepio',
    idade: 35,
    profissao: 'developer'
}

// pessoa.idade = 'teste' nao pode alterar o tipo

const andre: {nome: string, idade: number, profissao: string} = {
    nome: 'andre',
    idade: 33,
    profissao: 'pintor'
}

const paula: {nome: string, idade: number, profissao: string} = {
    nome: 'andre',
    idade: 33,
    profissao: 'Developer'
}

enum Profissao { // enum e tipo um grupo de constantes
    Professora,
    Desenvolvedora,
    JogadoraDeFutebol,
    universitaria
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao: Profissao
}

const vanessa: Pessoa = {
    nome: 'Vanessa',
    idade: 22,
    profissao: Profissao.Desenvolvedora
}

const josefa: Pessoa = {
    nome: 'Josefa',
    idade: 42,
    profissao: Profissao.Desenvolvedora
}

interface Estudante extends Pessoa {
    materias: string[]
}

const Jessica: Estudante = {
    nome: 'Jessica',
    idade: 50,
    profissao: Profissao.universitaria,
    materias: ['Matematica', 'programacao']
}

function listar(lista: string[]) {
    for (const item of lista) {
        console.log('- ', item)
    }
}

listar(Jessica.materias)
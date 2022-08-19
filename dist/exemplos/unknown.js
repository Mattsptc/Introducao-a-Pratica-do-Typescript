"use strict";
var anyEstaDeVolta;
anyEstaDeVolta = 3;
anyEstaDeVolta = true;
anyEstaDeVolta = 5;
var strintTeste = 'verificar';
var unknownValor; // é uma boa pratica em relacao ao any
unknownValor = 3;
unknownValor = 'opa';
unknownValor = true;
unknownValor = 'vai sim';
var stringTesteUnk = 'agora vai';
// stringTesteUnk =  unknownValor; vai dar errado pois e necessario verificar se o valor e aquele
if (typeof unknownValor === 'string') {
    stringTesteUnk = unknownValor;
}

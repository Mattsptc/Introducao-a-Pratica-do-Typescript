let anyEstaDeVolta: any;
anyEstaDeVolta = 3
anyEstaDeVolta = true
anyEstaDeVolta = 5

let strintTeste: string = 'verificar'

let unknownValor: unknown; // é uma boa pratica em relacao ao any

unknownValor = 3;
unknownValor = 'opa'
unknownValor = true;
unknownValor = 'vai sim';
let stringTesteUnk: string = 'agora vai'
// stringTesteUnk =  unknownValor; vai dar errado pois e necessario verificar se o valor e aquele

if (typeof unknownValor === 'string') {
    stringTesteUnk = unknownValor;
}
"use strict";
function jogaErro(erro, codigo) {
    throw { error: erro, code: codigo };
}
;
jogaErro('deu Erro', 500);

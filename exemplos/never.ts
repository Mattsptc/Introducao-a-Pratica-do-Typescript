function jogaErro(erro: string, codigo: number): never { 
    throw{ error: erro,  code: codigo}
};

jogaErro('deu Erro', 500)
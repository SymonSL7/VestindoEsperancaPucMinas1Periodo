    // =============================================
    // INSERIR USUÁRIO DE TESTE (APENAS PARA DESENVOLVIMENTO)
    // =============================================
    if (!localStorage.getItem('usuarios') || JSON.parse(localStorage.getItem('usuarios')).length === 0) {
        const usuariosTeste = [           
            {
                nome: "PUC Lourdes",
                email: "puclourdes@puc.br",
                senha: "VSpec@2025",
                tipoUsuario: "pontoColeta",
                endereco: {
                    cep: "30160-012",
                    logradouro: "Rua da Bahia",
                    numero: "2020",
                    complemento: "",
                    bairro: "Lourdes",
                    cidade: "Belo Horizonte",
                    uf: "MG"
                }
            },
            {
                nome: "Mineirão",
                email: "mineirao@mineirao.com.br",
                senha: "VSpec@2025",
                tipoUsuario: "pontoColeta",
                endereco: {
                    cep: "31275-000",
                    logradouro: "Avenida Antônio Abrahão Caram",
                    numero: "1001",
                    complemento: "",
                    bairro: "São José",
                    cidade: "Belo Horizonte",
                    uf: "MG"
                }
            },
            {
                nome: "PUC Betim",
                email: "pucbetim@puc.br",
                senha: "VSpec@2025",
                tipoUsuario: "pontoColeta",
                endereco: {
                    cep: "32604-115",
                    logradouro: "Rua do Rosário",
                    numero: "1081",
                    complemento: "",
                    bairro: "Angola",
                    cidade: "Betim",
                    uf: "MG"
                }
            },
            {
                nome: "Puc Barreiro",
                email: "pucbarreiro@puc.br",
                senha: "VSpec@2025",
                tipoUsuario: "pontoColeta",
                endereco: {
                    cep: "30640-070",
                    logradouro: "Avenida Afonso Vaz de Melo",
                    numero: "1200",
                    complemento: "",
                    bairro: "Barreiro",
                    cidade: "Belo Horizonte",
                    uf: "MG"
                }
            }
        ];
    
        localStorage.setItem('usuarios', JSON.stringify(usuariosTeste));
        console.log('Usuários de teste criados com sucesso!');
    }
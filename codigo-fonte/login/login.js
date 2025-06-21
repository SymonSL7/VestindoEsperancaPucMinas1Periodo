if (sessionStorage.getItem('usuarioLogado')) {
    window.location.href = "../pontosColeta/pontosColeta.html";
}

function logar(){

    var login = document.getElementById('usuario').value.toLowerCase();
    var senha = document.getElementById('senha').value;
    var dadosUsuario = JSON.parse(localStorage.getItem('usuarios'));

    var usuarioEncontrado = dadosUsuario.find(function(usuario){
        return usuario.email == login && usuario.senha == senha;
    });

    if (!login || !senha) {
        alert("Preencha todos os campos!");
        return;
    }

    if (usuarioEncontrado) { // Verifica se os dados informados estão de  acordo com o banco de dados
        sessionStorage.setItem('usuarioLogado',JSON.stringify(usuarioEncontrado)); // Cria a sessão de usuário logado
        location.href = "../pontosColeta/pontosColeta.html";
    }

    else { // Informa ao usuário que os dados informados estão incorretos e apaga automaticamente as informações
        alert("Usuário ou senha incorretos!");
        const inputField = document.getElementById('usuario senha');
        inputField.value = "";
    }
}

function cancelog(){ // Botão de cancelar, envia o usuário de volta à página inicial

    location.href = "../index.html";
}

    
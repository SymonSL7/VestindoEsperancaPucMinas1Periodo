const form = document.getElementById('formCadastro');
let usuariosCadastrados = JSON.parse(localStorage.getItem('usuarios')) || [];

function buscarEndereco() {
  const cep = document.getElementById('cep').value.replace('-', '');
  if (!/^\d{8}$/.test(cep)) {
    alert('Digite um CEP válido no formato 00000-000');
    return;
  }

  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(res => res.json())
    .then(data => {
      if (data.erro) {
        alert('CEP não encontrado!');
        return;
      }
      document.getElementById('logradouro').value = data.logradouro;
      document.getElementById('bairro').value = data.bairro;
      document.getElementById('cidade').value = data.localidade;
      document.getElementById('uf').value = data.uf;
      window.enderecoTemp = data;
    })
    .catch(() => alert('Erro ao buscar o CEP.'));
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim().toLowerCase();
  const senha = document.getElementById('senha').value;
  const confirmaSenha = document.getElementById('confirmaSenha').value;
  const numero = document.getElementById('numero').value.trim();
  const tipoUsuario = document.getElementById('tipoUsuario').value;

  if (senha !== confirmaSenha) {
    alert('As senhas não coincidem!');
    return;
  }

  if (usuariosCadastrados.some(u => u.email === email)) {
    alert('E-mail já cadastrado!');
    return;
  }

  const usuario = {
    nome,
    email,
    senha,
    endereco: {
      logradouro: window.enderecoTemp?.logradouro || '',
      bairro: window.enderecoTemp?.bairro || '',
      cidade: window.enderecoTemp?.localidade || '',
      uf: window.enderecoTemp?.uf || '',
      numero,
      complemento: '',
    },
    tipoUsuario,
  };

  usuariosCadastrados.push(usuario);
  localStorage.setItem('usuarios', JSON.stringify(usuariosCadastrados));

   alert('Usuário cadastrado com sucesso!');
form.reset();
window.location.href = "../index.html"; 
});

document.addEventListener('DOMContentLoaded', function(){

    const usuarioLogado = JSON.parse(sessionStorage.getItem('usuarioLogado'));

    
    if (usuarioLogado){
        window.location.href = '../pontosColeta/pontosColeta.html';
        return;
    }

});


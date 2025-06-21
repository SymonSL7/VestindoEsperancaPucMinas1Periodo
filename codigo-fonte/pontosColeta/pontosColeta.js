window.onload = function() {
  
  const usuarioLogado = JSON.parse(sessionStorage.getItem('usuarioLogado'));
  
  if (!usuarioLogado) {
      window.location.href = '../index.html';
      return;
  }

  const pontosColetaContainer = document.getElementById('pontosColetaContainer');
  
  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

  const pontosColeta = usuarios.filter(usuario => usuario.tipoUsuario === 'pontoColeta');

  if (pontosColeta.length === 0) {
      pontosColetaContainer.innerHTML = '<p class="empty-message">Nenhum ponto de coleta encontrado.</p>';
  } else {

      const table = document.createElement('table');
      table.classList.add('pontosColetaTable');


      const thead = document.createElement('thead');
      thead.innerHTML = `
          <tr>
              <th>Nome</th>
              <th>Endereço</th>
              <th>Ação</th>
          </tr>
      `;
      table.appendChild(thead);


      const tbody = document.createElement('tbody');

      pontosColeta.forEach(ponto => {
          const row = document.createElement('tr');
          
          row.innerHTML = `
              <td>${ponto.nome}</td>
              <td>${ponto.endereco.logradouro}, ${ponto.endereco.numero} - ${ponto.endereco.bairro}, ${ponto.endereco.cidade} - ${ponto.endereco.uf}</td>
              <td><button class="verDetalhesBtn">Ver Detalhes</button></td>
          `;
          
          row.querySelector('.verDetalhesBtn').addEventListener('click', () => {
              sessionStorage.setItem('pontoSelecionado', JSON.stringify(ponto));
              window.location.href = ('../pontosColetaDetalhado/pontosColetaDetalhado.html');
          });

          

          tbody.appendChild(row);
      });

      table.appendChild(tbody);
      pontosColetaContainer.appendChild(table);
  }


  document.getElementById('logoutBtn').addEventListener('click', () => {
      sessionStorage.removeItem('usuarioLogado');
      window.location.href = '../index.html';
  });


  document.getElementById('editarContaBtn').addEventListener('click', () => {
      window.location.href = ('../editarCadastro/editarCadastro.html');
  });


  document.getElementById('excluirContaBtn').addEventListener('click', () => {
      const confirmarExclusao = confirm('Tem certeza que deseja excluir sua conta permanentemente?');
      
      if (confirmarExclusao) {
          const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
          const usuariosAtualizados = usuarios.filter(
              usuario => usuario.email !== usuarioLogado.email
          );
          
          localStorage.setItem('usuarios', JSON.stringify(usuariosAtualizados));
          sessionStorage.removeItem('usuarioLogado');
          alert('Conta excluída com sucesso.');
          window.location.href = '../index.html';
      }
  });
};
# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2025-2-e1-proj-web-t10-g4-turma-10/blob/main/documentos/02-Especifica%C3%A7%C3%A3o%20do%20Projeto.md"> Especificação do Projeto</a></span>, <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2025-2-e1-proj-web-t10-g4-turma-10/blob/main/documentos/04-Projeto%20de%20Interface.md"> Projeto de Interface</a>

Os requisitos para realização dos testes de software são:
<ul><li>Site publicado na internet;</li>
<li>Navegador da internet: Chrome, Firefox ou Edge.</li>
</ul>

Os testes funcionais a serem realizados na aplicação são descritos a seguir.

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-01: Verificar o funcionamento dos links da página inicial</td>
  <td>
   <ul>
    <li>RF - 01	O sistema deve permitir realizar o cadastro de doadores.</li>
    <li>RF - 02	O sistema deve permitir realizar o cadastro de pontos de coleta/distribuição..</li>
    <li>RF - 03	O sistema deve permitir realizar o cadastro de instituições e ONGS.</li>
    <li>RF - 04	O sistema permitir deve registrar o endereço e informações de contato dos usuários, pontos e instituições.</li>
    <li>RF - 05	O sistema deve permitir filtrar cadastro dos pontos de coleta/distribuição.</li>
    <li>RF - 06	O sistema deve permitir fazer Login.</li>
   </ul>
  </td>
  <td>Verificar se os links da página inicial estão encaminhando para as respectivas páginas corretamente</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar nos links da página Home.</li>
   </ol>
   </td>
  <td>Todos os links da página Home devem encaminhar os usuários para as páginas descritas.</td>
  <td>Symon</td>
 </tr>
</table>


<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-02: Verificar se a busca pelo endereço através do cep está sendo feita</td>
  <td>
   <ul>
    <li>RF - 14	O sistema deve permitir fazer a buscar do endereço por CEP.</li>
   </ul>
  </td>
  <td>Verificar se o endereço está sendo retornado corretamente</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar no link de cadastro.</li>
    <li>Digitar o CEP</li>
    <li>Clicar no botão de "Buscar Endereço"</li>
    <li>Verificar nos campos abaixo se o endereço está sendo retornado corretamente</li>
   </ol>
   </td>
  <td>As informações do endereço devems ser exibidas nos campos abaixo</td>
  <td>Lucas</td>
 </tr>
</table>


<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-03: Verificar se o cadastro do usuário está sendo feito</td>
  <td>
   <ul>
    <li>RF - 01	O sistema deve permitir realizar o cadastro de doadores.</li>
    <li>RF - 02	O sistema deve permitir realizar o cadastro de pontos de coleta/distribuição..</li>
    <li>RF - 03	O sistema deve permitir realizar o cadastro de instituições e ONGS.</li>
    <li>RF - 04	O sistema permitir deve registrar o endereço e informações de contato dos usuários, pontos e instituições.</li>
    <li>RF - 05	O sistema deve permitir filtrar cadastro dos pontos de coleta/distribuição.</li>
    <li>RF - 14	O sistema deve permitir fazer a buscar do endereço por CEP.</li>
   </ul>
  </td>
  <td>Verificar se os dados do cadastro estão sendo salvos corretamente</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar no link de cadastro.</li>
    <li>Digitar o CEP</li>
    <li>Clicar no botão de "Buscar Endereço"</li>
    <li>Digite as informações pessoais</li>
    <li>Escolha o tipo de conta a ser criado ("Ponto de Coleta" ou "Doador")</li>
    <li>Clicar no botão Cadastrar</li>
    <li>Verificar se os dados cadastrados foram salvos no Local Storage</li>
   </ol>
   </td>
  <td>Os dados do cadastro devem aparecer no Local Storage</td>
  <td>Lucas</td>
 </tr>
</table>


<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-04: Verificar se o usuário está conseguindo fazer o login</td>
  <td>
   <ul>
    <li>RF - 06	O sistema deve permitir fazer Login.</li>
   </ul>
  </td>
  <td>Verificar se o usuário consegue fazer o login</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar no link de login.</li>
    <li>Digitar as informações e fazer o login</li>
    <li>Redirecionar para a página de Pontos de Coleta</li>
   </ol>
   </td>
  <td>O usuário deve digitar as informações corretas para fazer o login e deve ser redirecionado para a página de Pontos de Coleta.</td>
  <td>Luiz</td>
 </tr>
</table>


<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-05: Verificar caso o usuário digite as informações incorretas, ele não pode fazer o login</td>
  <td>
   <ul>
    <li>RF - 06	O sistema deve permitir fazer Login.</li>
   </ul>
  </td>
  <td>Verificar se o usuário consegue fazer o login digitando as informações erradas</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar no link de login.</li>
    <li>Digitar as informações e fazer o login</li>
   </ol>
   </td>
  <td>Se o usuário digitar as informações incorretas, ele devera ser informado que as informações estão incorretas e o login não deve ser feito</td>
  <td>Luiz</td>
 </tr>
</table>


<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-06: Verificar se a página de Pontos de Coleta está fazendo o filtro para aparecer somente os usuários cadastros como Ponto de Coleta</td>
  <td>
   <ul>
    <li>RF - 05	O sistema deve permitir filtrar cadastro dos pontos de coleta/distribuição.</li>
    <li>RF - 07	O sistema deve permitir exibir informações dos pontos de coleta.</li>
   </ul>
  </td>
  <td>Verificar se o filtro está dos tipos de contas estão sendo feito e mostrando somente os pontos de coleta</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar no link de login.</li>
    <li>Digitar as informações e fazer o login</li>
    <li>Acessar o Local Storage, identififcar as contas que foram cadastradas como "Ponto de Coleta" e as que foram cadastras como "Doador"</li>
    <li>Verificar se a página está sendo exibido somente os usuários cadastro como Ponto de Coleta</li>
   </ol>
   </td>
  <td>A página deve exibir somente os usuários cadastrados como "Ponto de Coleta"</td>
  <td>Cláudia</td>
 </tr>
</table>


<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-07: Verificar se a busca pelo endereço através do cep está sendo feita</td>
  <td>
   <ul>
    <li>RF - 14	O sistema deve permitir fazer a buscar do endereço por CEP.</li>
   </ul>
  </td>
  <td>Verificar se o endereço está sendo retornado corretamente</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar no link de login.</li>
    <li>Fazer o login</li>
    <li>Acessar a página de Pontos de Coleta (será redirecionado para ela automaticamente, quando o login for feito)</li>
    <li>Clicar no botão "Editar Minha Conta"</li>
    <li>Acessar a página de Edição de Cadastro (será redirecionado para ela automaticamente, quando o clicar no botão)</li>
    <li>Digitar o CEP</li>
    <li>Clicar no botão de "Buscar Endereço"</li>
    <li>Verificar nos campos abaixo se o endereço está sendo retornado corretamente</li>
   </ol>
   </td>
  <td>As informações do endereço devem ser exibidas nos campos abaixo</td>
  <td>Symon</td>
 </tr>
</table>


<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-08: Verificar se a edição do cadastro do usuário está sendo feito</td>
  <td>
   <ul>
    <li>RF - 04	O sistema permitir deve registrar o endereço e informações de contato dos usuários, pontos e instituições.</li>
    <li>RF - 05	O sistema deve permitir filtrar cadastro dos pontos de coleta/distribuição.</li>
    <li>RF - 12	O sistema deve permitir editar informações cadastradas anteriormente pelo usuário.</li>
    <li>RF - 14	O sistema deve permitir fazer a buscar do endereço por CEP.</li>
   </ul>
  </td>
  <td>Verificar se os dados editados estão sendo salvos corretamente</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar no link de login.</li>
    <li>Fazer o login</li>
    <li>Acessar a página de Pontos de Coleta (será redirecionado para ela automaticamente, quando o login for feito)</li>
    <li>Clicar no botão "Editar Minha Conta"</li>
    <li>Acessar a página de Edição de Cadastro (será redirecionado para ela automaticamente, quando o clicar no botão)</li>
    <li>Digitar o CEP</li>
    <li>Clicar no botão de "Buscar Endereço"</li>
    <li>Digite as informações pessoais</li>
    <li>Escolha o tipo de conta a ser criado ("Ponto de Coleta" ou "Doador")</li>
    <li>Clicar no botão Salvar Alteraçõesr</li>
    <li>Verificar se os dados editados foram salvos no Local Storage</li>
   </ol>
   </td>
  <td>Os dados no Local Storage devem ser atualizados</td>
  <td>Symon</td>
 </tr>
</table>


<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-09: Verificar se os dados que estão chegando na página de edição é do usuário logado</td>
  <td>
   <ul>
    <li>RF - 04	O sistema permitir deve registrar o endereço e informações de contato dos usuários, pontos e instituições.</li>
    <li>RF - 05	O sistema deve permitir filtrar cadastro dos pontos de coleta/distribuição.</li>
    <li>RF - 12	O sistema deve permitir editar informações cadastradas anteriormente pelo usuário.</li>
   </ul>
  </td>
  <td>Verificar se os dados do cadastro estão retornando corretamente</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar no link de login.</li>
    <li>Fazer o login</li>
    <li>Acessar a página de Pontos de Coleta (será redirecionado para ela automaticamente, quando o login for feito)</li>
    <li>Clicar no botão "Editar Minha Conta"</li>
    <li>Acessar a página de Edição de Cadastro (será redirecionado para ela automaticamente, quando o clicar no botão)</li>
    <li>Acessar o Local Storage e verificar se os dados estão batendo com o que está na tela.</li>
   </ol>
   </td>
  <td>Os dados do Local Storage devem ser iguais aos exibidos na tela.</td>
  <td>Symon</td>
 </tr>
</table>


<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-10: Verificar se os dados do ponto selecionado estão retornando corretamente.</td>
  <td>
   <ul>
    <li>RF - 07	O sistema deve permitir exibir informações dos pontos de coleta.</li>
   </ul>
  </td>
  <td>Verificar se os dados do cadastro estão sendo salvos corretamente</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar no link de login.</li>
    <li>Fazer o login</li>
    <li>Acessar a página de Pontos de Coleta (será redirecionado para ela automaticamente, quando o login for feito)</li>
    <li>Clicar no botão "Ver Detalhes"</li>
    <li>Acessar a página de Pontos de Coleta Detalhado (será redirecionado para ela automaticamente, quando o clicar no botão)</li>
    <li>Verificar se está aparecendo as informações corretas do ponto que foi selecionado</li>
   </ol>
   </td>
  <td>Deve aparecer os dados do ponto selecionado</td>
  <td>Symon</td>
 </tr>
</table>


<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-11: Verificar se o mapa com endereço do ponto está renderizando com as informações corretas</td>
  <td>
   <ul>
    <li>RF - 07	O sistema deve permitir exibir informações dos pontos de coleta.</li>
    <li>RF - 09	O sistema deve permitir exibir um mapa, com o endereço do ponto de coleta.</li>
   </ul>
  </td>
  <td>Verificar se o mapa está renderizando e apontando para a localização correta</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar no link de login.</li>
    <li>Fazer o login</li>
    <li>Acessar a página de Pontos de Coleta (será redirecionado para ela automaticamente, quando o login for feito)</li>
    <li>Clicar no botão "Ver Detalhes"</li>
    <li>Acessar a página de Pontos de Coleta Detalhado (será redirecionado para ela automaticamente, quando o clicar no botão)</li>
    <li>Verificar se o mapa está retornando a informações corretas</li>
   </ol>
   </td>
  <td>Deve aparecer no mapa o endereço do ponto de coleta.</td>
  <td>Symon</td>
 </tr>
</table>


<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-12: Verificar se o usuário logado está acessando a página inicial</td>
  <td>
   <ul>
    <li>RF - 06	O sistema deve permitir fazer Login.</li>
   </ul>
  </td>
  <td>Verificar se o usuário que fez o login consegue acessar a página inicial</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar no link de login.</li>
    <li>Digitar as informações e fazer o login</li>
    <li>Na barra de endereço, forçar o redirecionamento para a página inicial pelo link "https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2025-2-e1-proj-web-t10-g4-turma-10/codigo-fonte/index.html"</li>
    <li>Usuário deve ser redirecionado para a página Pontos de Coleta</li>
   </ol>
   </td>
  <td>O usuário deve ser redirecionado para a página de Pontos de Coleta</td>
  <td>Symon</td>
 </tr>
</table>


<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-13: Verificar se o usuário logado está acessando a página de Cadastro</td>
  <td>
   <ul>
    <li>RF - 06	O sistema deve permitir fazer Login.</li>
   </ul>
  </td>
  <td>Verificar se o usuário que fez o login consegue acessar a página de Cadastro</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar no link de login.</li>
    <li>Digitar as informações e fazer o login</li>
    <li>Na barra de endereço, forçar o redirecionamento para a página inicial pelo link "https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2025-2-e1-proj-web-t10-g4-turma-10/codigo-fonte/cadastro/Tela_cadastro_usuario.html"</li>
    <li>Usuário deve ser redirecionado para a página Pontos de Coleta</li>
   </ol>
   </td>
  <td>O usuário deve ser redirecionado para a página de Pontos de Coleta</td>
  <td>Lucas</td>
 </tr>
</table>


<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-14: Verificar se o usuário logado está acessando a página de Login</td>
  <td>
   <ul>
    <li>RF - 06	O sistema deve permitir fazer Login.</li>
   </ul>
  </td>
  <td>Verificar se o usuário que fez o login consegue acessar a página de Login</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar no link de login.</li>
    <li>Digitar as informações e fazer o login</li>
    <li>Na barra de endereço, forçar o redirecionamento para a página inicial pelo link "https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2025-2-e1-proj-web-t10-g4-turma-10/codigo-fonte/login/login.html"</li>
    <li>Usuário deve ser redirecionado para a página Pontos de Coleta</li>
   </ol>
   </td>
  <td>O usuário deve ser redirecionado para a página de Pontos de Coleta</td>
  <td>Luiz</td>
 </tr>
</table>


<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-15: Verificar se o usuário está conseguindo acessar a página de Pontos de Coleta, sem estar logado.</td>
  <td>
   <ul>
    <li>RF - 06	O sistema deve permitir fazer Login.</li>
   </ul>
  </td>
  <td>Verificar se o usuário que fez o login consegue acessar a página de Login</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Na barra de endereço, forçar o redirecionamento para a página Pontos de Coleta pelo link "https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2025-2-e1-proj-web-t10-g4-turma-10/codigo-fonte/pontosColeta/pontosColeta.html"</li>
     <li>Usuário deve ser redirecionado para a página Inicial</li>
   </ol>
   </td>
  <td>O usuário deve ser redirecionado para a página de Inicial</td>
  <td>Cláudia</td>
 </tr>
</table>


<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-16: Verificar se o usuário está conseguindo acessar a página de Edição de Cadastro, sem estar logado.</td>
  <td>
   <ul>
    <li>RF - 06	O sistema deve permitir fazer Login.</li>
   </ul>
  </td>
  <td>Verificar se o usuário que fez o login consegue acessar a página de Edição de Cadastro</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Na barra de endereço, forçar o redirecionamento para a página Pontos de Coleta pelo link "https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2025-2-e1-proj-web-t10-g4-turma-10/codigo-fonte/editarCadastro/editarCadastro.html"</li>
     <li>Usuário deve ser redirecionado para a página Inicial</li>
   </ol>
   </td>
  <td>O usuário deve ser redirecionado para a página Inicial</td>
  <td>Symon</td>
 </tr>
</table>


<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-17: Verificar se o usuário está conseguindo acessar a página de Ponto de Coleta Detalhado, sem estar logado.</td>
  <td>
   <ul>
    <li>RF - 06	O sistema deve permitir fazer Login.</li>
   </ul>
  </td>
  <td>Verificar se o usuário que fez o login consegue acessar a página de Pontos de Coleta Detalhado</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Na barra de endereço, forçar o redirecionamento para a página Pontos de Coleta pelo link "https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2025-2-e1-proj-web-t10-g4-turma-10/codigo-fonte/pontosColetaDetalhado/pontosColetaDetalhado.html"</li>
     <li>Usuário deve ser redirecionado para a página Inicial</li>
   </ol>
   </td>
  <td>O usuário deve ser redirecionado para a página Inicial</td>
  <td>Symon</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-18: Verificar se o botão de sair está funcionando corretamente</td>
  <td>
   <ul>
    <li>RF- Não Associado:	O botão de sair deve redirecionar o usuário para a página inicial e deve remover os dados do usuário logado do Session Storage</li>
   </ul>
  </td>
  <td>Verificar se o logout está sendo feito</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar no link de login.</li>
    <li>Digitar as informações e fazer o login</li>
    <li>Clicar no botão Sair</li>
    <li>Verificar se está sendo redirecionado para página inicial</li>
    <li>Verificar se os dados do usuário logado foram removidos do Session Storage</li>
   </ol>
   </td>
  <td>Deve ser redirecionado para página inicial e excluir os dados do Session Storage</td>
  <td>Cláudia</td>
 </tr>
</table>


<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-19: Verificar se o botão excluir está funcionando corretamente</td>
  <td>
   <ul>
    <li>RF- Não Associado:	O botão de excluir deve, redirecionar o usuário para a página inicial e exlcuir os dados do usuário que estiver logado do Local Storage</li>
   </ul>
  </td>
  <td>Verificar se a exclusão está sendo feita</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar no link de login.</li>
    <li>Digitar as informações e fazer o login</li>
    <li>Clicar no botão Excluir Minha Conta</li>
    <li>Verificar se está sendo redirecionado para página inicial</li>
    <li>Verificar se os dados do usuário logado foram excluidos do Local Storage</li>
   </ol>
   </td>
  <td>Deve ser redirecionado para página inicial e excluir os dados do Local Storage</td>
  <td>Cláudia</td>
 </tr>
</table>


<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-20: Verificar se o botão de voltar está funcionando corretamente</td>
  <td>
   <ul>
    <li>RF- Não Associado:	O sistema deve retornar a página de Pontos de Coleta e remover o ponto selecionado do session storage.</li>

   </ul>
  </td>
  <td>Verificar se está sendo redirecionado para página de Pontos de Coleta e está removendo o Ponto Selecionado do Local Storage</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar no link de login.</li>
    <li>Fazer o login</li>
    <li>Acessar a página de Pontos de Coleta (será redirecionado para ela automaticamente, quando o login for feito)</li>
    <li>Clicar no botão "Ver Detalhes"</li>
    <li>Acessar a página de Pontos de Coleta Detalhado (será redirecionado para ela automaticamente, quando clicar no botão)</li>
    <li>Clicar no botão "Volta" no canto superior direito</li>
    <li>Acessar a página de Pontos de Coleta (será redirecionado para ela automaticamente, quando clicar no botão Voltar)</li>
    <li>Verificar se os dados do Ponto Selecionado foram removidos do Session Storage</li>
   </ol>
   </td>
  <td>Deve redirecionar para  página de Pontos de Coleta e excluir os dados do Ponto Selecionado do Session Storage.</td>
  <td>Symon</td>
 </tr>
</table>

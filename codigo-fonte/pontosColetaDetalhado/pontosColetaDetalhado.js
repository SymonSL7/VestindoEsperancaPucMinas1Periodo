window.onload = function () {

    const usuarioLogado = JSON.parse(sessionStorage.getItem('usuarioLogado'));
    
    if (!usuarioLogado) {
        window.location.href = '../index.html'; 
        return; 
    }

    const pontoSelecionado = JSON.parse(sessionStorage.getItem('pontoSelecionado'));

    if (!pontoSelecionado) {
        alert('Erro: Nenhum ponto de coleta selecionado.');
        window.location.href = '../pontosColeta/pontosColeta.html';
        return;
    }

    const pontoColetaInfo = document.getElementById('pontoColetaInfo');
    pontoColetaInfo.innerHTML = `
    <h3>${pontoSelecionado.nome}</h3>
    <p><strong>Email:</strong> ${pontoSelecionado.email}</p>
    <p><strong>Endereço:</strong> ${pontoSelecionado.endereco.logradouro}, ${pontoSelecionado.endereco.numero} - ${pontoSelecionado.endereco.bairro},
     ${pontoSelecionado.endereco.cidade} - ${pontoSelecionado.endereco.uf}
     ${pontoSelecionado.endereco.complemento ? ' - ' + pontoSelecionado.endereco.complemento : ''}</p>
    `;

    
    document.getElementById('voltarBtn').addEventListener('click', () => {
        sessionStorage.removeItem('pontoSelecionado');
        window.location.href = '../pontosColeta/pontosColeta.html';
    });

    const endereco = `${pontoSelecionado.endereco.logradouro}, ${pontoSelecionado.endereco.numero}, ${pontoSelecionado.endereco.bairro}, ${pontoSelecionado.endereco.cidade}, ${pontoSelecionado.endereco.uf}`;
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(endereco)}&limit=1&email=symonlima07@gmail.com`;

    console.log('URL da requisição:', url);

    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log('Resposta da API Nominatim:', data); 

            if (data && data.length > 0) {
                const { lat, lon } = data[0]; 

                
                const map = L.map('map').setView([lat, lon], 15); 

                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }).addTo(map);

                L.marker([lat, lon]).addTo(map) 
                    .bindPopup(pontoSelecionado.nome)
                    .openPopup();
            } else {
                console.error('Endereço não encontrado ou dados inválidos');
                alert('Erro ao encontrar o endereço. Tente novamente.');
            }
        })
        .catch(error => {
            console.error('Erro na requisição:', error);
            alert('Erro ao buscar o endereço. Tente novamente.');
        });

}
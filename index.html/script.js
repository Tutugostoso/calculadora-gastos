document.getElementById('gastosForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário, para não recarregar a página

    // Coleta os valores dos campos do formulário
    const nome = document.getElementById('nome').value;
    const alimentacao = parseFloat(document.getElementById('alimentação').value) || 0;
    const agua = parseFloat(document.getElementById('agua').value) || 0;
    const luz = parseFloat(document.getElementById('luz').value) || 0;
    const internet = parseFloat(document.getElementById('internet').value) || 0;

    // Calcula o total
    const total = alimentacao + agua + luz + internet;

    // Atualiza a tabela
    const tabela = document.getElementById('tabelaGastos').getElementsByTagName('tbody')[0];
    const novaLinha = tabela.insertRow();

    novaLinha.innerHTML = `
        <td>${nome}</td>
        <td>${alimentacao.toFixed(2)}</td>
        <td>${agua.toFixed(2)}</td>
        <td>${luz.toFixed(2)}</td>
        <td>${internet.toFixed(2)}</td>
        <td>${total.toFixed(2)}</td>
    `;

    // Atualiza o total geral de gastos
    const gastosTotaisElement = document.getElementById('gastosTotais');
    let totalGastos = parseFloat(gastosTotaisElement.innerText.replace('R$ ', '').replace(',', '.')) || 0;
    totalGastos += total;
    gastosTotaisElement.innerText = totalGastos.toFixed(2);
});


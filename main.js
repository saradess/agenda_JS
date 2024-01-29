const form = document.getElementById('form-agenda');
const nome = [];
const telefone = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha () {
    const inputNomeContato = document.getElementById('Nome-contato');
    const inputTelefone = document.getElementById('telefone');

    if(nome.includes(inputNomeContato.value)) {
        alert(`O Nome: ${inputNomeContato.value} já foi adicionado`);
    } else {
        nome.push(inputNomeContato.value);
        telefone.push(parseFloat(inputTelefone.value));

        linhas += '<tr>';
        linhas += `<td>${inputNomeContato.value}</td>`;
        linhas += `<td>${inputTelefone.value}</td>`;
        linhas += '</tr>';
    }

    inputNomeContato.value = '';
    inputTelefone.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    const tfoot = document.querySelector('tfoot');
    tfoot.innerHTML = `<tr><td>Total de contatos</td><td>${nome.length}</td></tr>`;
}


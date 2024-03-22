$(document).ready(function(){

    $('#lista-de-tarefas').on('submit', function(e){
        e.preventDefault();
        
        const novaTarefa = $('#tarefa').val();
        
        if (novaTarefa.trim() !== '') {
            $('#lista').append('<li>' + novaTarefa + '</li>');
            $('#tarefa').val('');
        }
        
            $('#lista').on('click','li',function(){
                $(this).toggleClass('riscado');
            });

    });

    const formAgenda = $('#form-agenda');
    const nome = [];
    const telefone = [];
    let linhas = '';

    formAgenda.on('submit', function(e) {
        e.preventDefault();

        adicionaLinha();
        atualizaTabela();
    });

    function adicionaLinha() {
        const inputNomeContato = $('#Nome-contato');
        const inputTelefone = $('#telefone');

        if(nome.includes(inputNomeContato.val())) {
            alert(`O Nome: ${inputNomeContato.val()} já foi adicionado`);
        } else {
            nome.push(inputNomeContato.val());
            telefone.push(parseFloat(inputTelefone.val()));

            linhas += '<tr>';
            linhas += `<td>${inputNomeContato.val()}</td>`;
            linhas += `<td>${inputTelefone.val()}</td>`;
            linhas += '</tr>';
        }

        inputNomeContato.val('');
        inputTelefone.val('');
    }

    function atualizaTabela() {
        const corpoTabela = $('tbody');
        corpoTabela.html(linhas);

        const tfoot = $('tfoot');
        tfoot.html(`<tr><td>Total de contatos</td><td>${nome.length}</td></tr>`);
    }
});




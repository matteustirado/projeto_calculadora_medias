const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./img/aprovado.png" alt="Emoji Celebrando">';
const imgReprovado = '<img src="./img/reprovado.png" alt="Emoji Triste">';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="aprovado">Aprovado</span>';
const spanReprovado = '<span class="reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Qual a nota mínima para aprovação?"));

let linhas = ' ';

form.addEventListener('submit', function(e) {
    e.preventDefault(); 

    adicionarLinha();
    atualizarTabela();
    atualizaMediaFinal();
});

function adicionarLinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if (atividades.includes(inputNomeAtividade.value)) {
        alert(`A atividade ${inputNomeAtividade.value} já foi inserida!`);
    }
    else {

    atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));
    
    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;	
    linha += '</tr>';

    linhas += linha;
    }

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizarTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calculaMediaFinal () {
    let somaDasNotas = 0;

        for (let i = 0; i < notas.length; i++) {
            somaDasNotas += notas[i];
        }

        return media = somaDasNotas / notas.length;
}
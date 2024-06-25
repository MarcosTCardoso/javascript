// Vamos reduzir os seletores em uma função

//let campo = document.querySelector(tag)
//campo.innerHTML = texto


let numeroSecreto = gerarNumeroAleatorio()
//retirar o comentário abaixo para testar a função com o console
//console.log(numeroSecreto)

//Foi informado dois parâmetros, o primeiro chamado tag e o segundo texto, a primeira linha da função considera o primeiro parâmetro informado para pegar os dados geográficos da informação e o segundo parâmetro modifica os dados que ali estavam. 
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10:');

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
}
//Nos casos onde a função gera uma informação, ela precisa ser armazenada, para isso deve-se utilizar o return
function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}
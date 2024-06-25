//Todos os exercícios do modulo foram desenvolvidos aqui.

let titulo = document.querySelector('h1');

titulo.innerHTML = 'Hora do Desafio!';


function mensagem() {
    let cidade = prompt("Diga um nome de uma cidade do Brasil:");
    alert(`Estive em ${cidade} e lembrei de você.`);
}

function soma() {
    let valor1 = parseFloat(prompt("Digite um valor para que seja somado:"));
    let valor2 = parseFloat(prompt("Digite o valor para ser somado:"))
    alert(`O resultado da soma dos dois valores é ${valor1 + valor2}!`)
}

function verificarChute() {
    console.log("O botão foi clicado!");
    alert("Eu amo JS!");
}

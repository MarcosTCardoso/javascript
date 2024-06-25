alert('Boas vindas ao jogo do número secreto!');
let numeroSecreto = 9;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//enquanto
while (chute != numeroSecreto) {
    chute = prompt("Escolha um número de 1 a 10:");
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
    } else {
        if (numeroSecreto > chute) {
            alert(`O número secreto é maior que ${chute}!`);
        } else {
            alert(`O número secreto é menor que ${chute}!`);
        }
        //tentativas = tentativas + 1;
        tentativas ++;
}

}

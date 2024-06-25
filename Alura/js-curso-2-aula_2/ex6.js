function tabuada(numero) {
    let contador = 1;
    while (contador != 11) {
        mostrarTabuada(contador, numero);
        contador++;
    }
}

function mostrarTabuada(contador, numero) {
    console.log(`${contador} X ${numero} = ${contador * numero};`);
}

tabuada(5)
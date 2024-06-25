function calcularFatorial(numero) {
    let cont = numero;
    let resultado = 1
    while (cont != 1) {
        resultado = resultado * cont;
        cont--
    }
    return resultado;
}
console.log(calcularFatorial(15))
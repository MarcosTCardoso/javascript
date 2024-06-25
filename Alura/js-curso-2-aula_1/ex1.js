//exercício 01
function hello() {
    console.log("Olá, mundo!");
}
hello();

//exercício 02
function nome(text) {
    console.log(`Olá, ${text}!`);    
}
nome("Marcos");

//exercício 03
function dobro(number) {
    return number * 2;
}
console.log(dobro(10));

//exercício 04
function media(number1, number2, number3) {
    return (number1 + number2 + number3) / 3;
}
console.log(media(5, 3, 1));

//exercício 05
function maior(number1, number2) {
    if (number1 >= number2) {
        return number1;
    } else {
        return number2;
    }
}
console.log(maior(5, 9));

//exercício 06
function potencia(number1) {
    return number1** 2;
}
console.log(potencia(10))
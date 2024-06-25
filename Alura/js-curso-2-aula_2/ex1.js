function imc(altura, peso) {
    let media = (parseFloat(peso) / (parseFloat(altura.replace(',', '.')) * parseFloat(altura.replace(',', '.'))));
    return media;
}

console.log(imc('1,73', '141'));
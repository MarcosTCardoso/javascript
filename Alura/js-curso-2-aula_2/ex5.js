function circuloPerimetroArea(raio) {
    let area = 3.14 * (raio ** 2);
    let perimetro = 2 * 3.14 * raio;
    return `A área é de ${area} e o perímetro é de ${perimetro}.`
}

console.log(circuloPerimetroArea(10))
function areaPerimetro(altura, largura) {
    let area = parseFloat(altura) * parseFloat(largura);
    return area
}
let largura = prompt("Qual a largura da sala?");
let altura = prompt("Qual a altura da sala?");
let titulo = document.querySelector('h1');
titulo.innerHTML = `Á área da sala é de ${areaPerimetro(altura, largura)} metros.`
console.log(`A área da sala possui ${areaPerimetro(altura, largura)} metros.`);
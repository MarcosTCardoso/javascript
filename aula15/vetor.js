valores = [8, 1, 7, 4, 2, 9]

/*for(pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos + 1} tem o valor ${valores[pos]}`)
}*/

for(let pos in valores) {
    console.log(`A posição ${Number(pos) + 1} tem o valor ${valores[pos]}.`)
}

console.log(valores.indexOf(2))
console.log(valores.indexOf(3))
position = valores.indexOf(7)
if (position == -1){
    console.log('Valores não encontrados')
} else {
    console.log(`O valor pesquisado está na posição ${position}`)
}
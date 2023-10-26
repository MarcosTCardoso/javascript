let num = ['5', '8', '4']
num[3] = 9
num.push(7)
num.push(1)
num.sort()
console.log(`O nosso vetor tem ${num.length} elementos.`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(num)
for(let c = 0; c < num.length; c++) {
    console.log(`O valor ${num[c]}`)
}
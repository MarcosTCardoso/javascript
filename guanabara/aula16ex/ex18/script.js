function adicionar() {
    let num = Number(document.getElementById('txtn').value)
    let res = document.getElementById('selres')

    if (lista.includes(num)) {
        alert('Número já adicionado!')
    } else if (num < 1 || num > 100) {
        alert('Número inválido!')
    } else {
        lista.push(num)
        let op = document.createElement('option')
        op.text += `Valor ${num} adicionado.`
        res.appendChild(op)
    }
}

function finalizar() {
    if (lista.length == 0){
        alert('Nenhum valor cadastrado!')
    } else {
        let res = document.getElementById('fim')
        let par = document.body.section.getElementsbytag('p')
        let p = document.createElement('p')
        let soma = function (n) {
            let total = 0
            for(let nub of n) {
                total += nub
            }
            return total
        }

        p.innerHTML += `<br>Ao todo, temos ${lista.length} números cadastrados.`
        p.innerHTML += `<br><br>O maior valor informado foi ${Math.max(...lista)}.`
        p.innerHTML += `<br><br>O menor valor informado foi ${Math.min(...lista)}.`
        p.innerHTML += `<br><br>Somando todos os valores, temos ${soma(lista)}.`
        p.innerHTML += `<br><br>A média dos valores digitados é ${soma(lista) /lista.length}`
        res.appendChild(p)
    }
}

var lista = []
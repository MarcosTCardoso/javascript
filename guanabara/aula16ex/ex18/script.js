/*function adicionar() {
    let num = Number(document.getElementById('txtn').value)
    let res = document.getElementById('selres')

    if (lista.includes(num)) {//Controle de entradas!
        alert('Número já adicionado!')
    } else if (num < 1 || num > 100) {//Controle de entradas!
        alert('Número inválido!')
    } else { //Após validação, cadastro do valor.
        lista.push(num)
        let op = document.createElement('option')
        op.text += `Valor ${num} adicionado.`
        res.appendChild(op)
    }
}

function finalizar() {
    if (lista.length == 0){ //Validação de dados para cadastro!
        alert('Nenhum valor cadastrado!')
    } else {
        let res = document.getElementById('fim')
        let p = document.createElement('p')
        let soma = function (n) {//Tem comando para simplificar, com function =>, mas não está ainda no roteiro do aprendizado.
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
*/
let num = document.querySelector('input#txtn')
let lista = document.querySelector('select#selres')
let res = document.querySelector('div#fim')
let valores = []

function isNumber(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inlist(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumber(num.value) && !inlist(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''//Serve para limpar o campo após adicionar um valor
    num.focus() //voltar o foco para o campo de adicionar valores
}

function finalizar() {
    if(valores.length == 0) {
        alert('Adicione valores antes de finalizar.')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) 
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma/tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos${soma}.</p>`
        res.innerHTML += `<p>A média dos valores é ${media}.</p>`
    }
}
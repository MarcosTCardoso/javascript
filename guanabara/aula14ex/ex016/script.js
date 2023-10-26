var ini, fim, pas, res 

function calcular() {
    var ini = Number(document.getElementById('txtini').value)
    var fim = Number(document.getElementById('txtfim').value)
    var pas = Number(document.getElementById('txtpas').value)
    var res = document.getElementById('res')
    var val = ini
    res.innerHTML = `Contando: <br>`
    if (ini == 0) {
        res.innerHTML = 'Impossível contar!'
    } else if (ini > fim) {
        res.innerHTML = 'Número de ínicio maior que o do fim, corrija para iniciar.'
    } else if (pas == 0 || pas > 0) {
        if (pas == 0) {
            alert('Passo não pode ser 0, então vamos considerar o valor 1.')
            pas = 1
        }
        while (val <= fim) {
            res.innerHTML += `${val} 👉`
            val += pas
        }
        res.innerHTML += `FIM!`
    }

}
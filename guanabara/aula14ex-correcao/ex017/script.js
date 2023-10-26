function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')//1 - var criada
    if (num.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')//3 - Adiciona um option dentro do select seltab
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`//Esse item faz mais sentido em outras linguagens, mas ele serve pra mostrar o item que foi selecionado na tabuada.
            tab.appendChild(item) //2 - Ele entra no select aqui, o item é o seltab porque foi definido na var da linha 3.
            c++
        }
    }
}
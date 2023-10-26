function calcular() {
    var val = document.querySelector('input#txtnum').value
    var num = Number(val)
    var res = document.querySelector('textarea#txttab')
    res.value = ``
    if (val == '') {
        alert('Digite um número')
    } else {
    for (cont = 0; cont <=10; cont++) {
        res.value += `${cont} X ${num} = ${cont * num}\n`
    }
}
}
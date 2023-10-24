function calcular() {
    var num = Number(document.querySelector('input#txtnum').value)
    var res = document.querySelector('textarea#txttab')
    res.value = `0 X ${num} = 0`
    for (cont = 1; cont <=10; cont++) {
        res.value += `\n${cont} X ${num} = ${cont * num}`
    }
}
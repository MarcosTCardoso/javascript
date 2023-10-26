function calcular() {
    var alt = document.getElementById('txtalt').value
    var pes = document.getElementById('txtpes').value
    var res = document.getElementById('res')
    var fsex = document.getElementsByName('sextip')
    var imc = pes / Number.parseFloat((alt**2))
    var gen = ''
    if (fsex[0].checked) {
        gen = 'homem'
    } else {
        gen = 'mulher'
    }
    res.innerHTML = `Você é um ${gen} com ${alt} m de altura e pesa ${pes} Kg. Portanto seu IMC é ${imc}.`
    
}
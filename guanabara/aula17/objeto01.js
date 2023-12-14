let amigo = {nome: 'José', 
sexo: 'M',
peso: 120.3,
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}
amigo.engordar(2)
console.log(`${amigo.nome} está com ${amigo.peso}Kg`)
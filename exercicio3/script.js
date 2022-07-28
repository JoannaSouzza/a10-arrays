//Exercicio 3

const numeros = [ 13, 23 , 31 ]
const strings = ["Joanna","Jojo","Jo"]
const misturaTipos = [ 14 , "Banana", true]

const numerosCopia = numeros.slice()
numeros.push(80)
console.log(numeros, numerosCopia)

const stringsCopia = strings.slice()
stringsCopia.pop()
console.log(strings, stringsCopia)

const misturaTiposCopia = misturaTipos.slice()
misturaTipos.splice(1, 1)
console.log(misturaTipos, misturaTiposCopia)

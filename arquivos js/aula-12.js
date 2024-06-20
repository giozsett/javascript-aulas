/** CONDIÇÕES ANINHADAS**/
var idade = 17

console.log(`A idade é ${idade} anos.`)

if (idade < 16) {
    console.log(`Ainda não pode votar.`)
}
else {
    if (idade >= 16 && idade < 18) {
        console.log(`Nessa idade o voto é facultativo.`)
    }
    else {
        console.log(`Nessa idade o voto é obrigatório.`)
    }
}

/** OUTRA FORMA DE FAZER O CÓDIGO.**/
console.log()
console.log(`Repetindo a verificação para ver uma forma alternativa do código.`)
console.log()

if (idade < 16) {
    console.log(`Ainda não pode votar.`)
}
else if (idade < 18) {
    console.log(`Nessa idade o voto é opcional.`)
}
else if (idade >= 18) {
    console.log(`O voto é obrigatório nessa idade.`)
}

/** CONDIÇÕES ANINHADAS**/
var idade = 12

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

var agora = new Date()
var dia_semana = agora.getDay() //Vai mostrar o número do dia da semana. Domingo = 0 e por aí vai.

console.log(`Hoje é ${dia_semana}.`)

switch (dia_semana) {
    case 0: 
        console.log(`domingo`)
        break   
    case 1:
        console.log(`segunda-feira`)
        break
    case 2:
        console.log(`terça-feira`)
        break
    case 3:
        console.log(`quarta-feira`)
        break
    case 4:
        console.log(`quinta-feira`)
        break
    case 5:
        console.log(`sexta-feira`)
        break
    case 6:
        console.log(`sábado`)
        break

    default:
        console.log(`Erro. Dia inválido!`)
        break
}
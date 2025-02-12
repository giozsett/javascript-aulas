
function carregar() {
    /** Cria variáveis com os IDs das divs.**/
    var msg_hora = window.document.getElementById('msg_hora')
    var img = window.document.getElementById('icon_hora')
    var fundo = window.document.getElementById('fundo')
    
    /** Criando variável que guardará a data atual.**/
    /** E criando as demais variáveis para pegar a hora, o dia, mês e ano.**/
    var data_atual = new Date()
    var hora_atual = data_atual.getHours()
    var minuto_atual = data_atual.getMinutes()
    var dia_atual = data_atual.getDate() 
    var mes_atual = data_atual.getMonth()
    var ano_atual = data_atual.getFullYear()
    var nome_do_mes = 'nome'

    /** Switch case para trocar o número do mês pelo nome do mês.**/
    switch (mes_atual) {
        case 0:
            nome_do_mes = `janeiro`
            break
        case 1:
            nome_do_mes = `fevereiro`
            break
        case 2:
            nome_do_mes = `março`
            break
        case 3:
            nome_do_mes = `abril`
            break
        case 4:
            nome_do_mes = `maio`
            break
        case 5:
            nome_do_mes = `junho`
            break
        case 6:
            nome_do_mes = `julho`
            break
        case 7: 
            nome_do_mes = `agosto`
            break
        case 8:
            nome_do_mes = `setembro`
            break
        case 9:
            nome_do_mes = `outubro`
            break
        case 10:
            nome_do_mes = `novembro`
            break
        case 12:
            nome_do_mes = `dezembro`
            break
        default:
            nome_do_mes = `mês inválido`
    }

    /** Mensagem que aparecerá quando a página carregar.**/
    msg_hora.innerHTML = `${dia_atual} de ${nome_do_mes} de ${ano_atual} <br>Agora são <b>${hora_atual}h${minuto_atual}</b>`

    /** Faz aparecer a imagem correspondente a manhã, tarde ou noite na div de imagem.**/
    if (hora_atual >= 0 && hora_atual < 12) {
        /** BOM DIA!**/
        img.src = 'bomdia.png'
        fundo.style.background = '#fff2b4'
        img.style.border = '8px solid #f0f8ff'
        img.style.background = '#f0f8ff'
        img.style.boxShadow = '2px 2px rgb(0, 0, 0, 0.55)'
        
    } else if (hora_atual >= 12 && hora_atual < 18) {
        /** BOA TARDE!**/
        img.src = 'boatarde.png'
        fundo.style.background = '#ffa32d'
        img.style.border = '8px solid #f0f8ff'
        img.style.background = '#f0f8ff'
        img.style.boxShadow = '2px 2px rgb(0, 0, 0, 0.55)'
        
    } else {
        /** BOA NOITE!**/
        img.src = 'boanoite.png'
        fundo.style.background = '#1c5f78'
        img.style.border = '8px solid #f0f8ff'
        img.style.background = '#f0f8ff'
        img.style.boxShadow = '2px 2px rgb(0, 0, 0, 0.55)'
    }
}
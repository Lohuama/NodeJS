const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
console.log('maior 19 e se tem cnh')
console.log('lista de presença')

readLine.question('Qual seu ano de nacimento?', ano => {
    if(ano > 2004){
        console.log('Voce não tem 18 anos')
    }else{
        readLine.question("Você tem CNH? (SimNao)", temCNH => {
            if(!temCNH.toUpperCase === 'SIM'){
                console.log('Voce nao tem CNH')
            }else{
                readLine.question("Qual seu nome? ", nome =>{
                    switch(nome){
                        case 'Douglas' :
                            console.log('Bem vindo ao kart Douglas')
                            break;
                        case 'Rafael':
                            console.log('Bem vindo ao kart Rafael')
                            break;
                        default:
                            console.log('Vc n esta na lista de presenca')
                    }
                })
            }
        })
    }
})
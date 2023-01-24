const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

const validarNumero = (numero) => {
    const result = Number.parseFloat(numero)
    if(!result){
        console.log('error')
    }
    return result
}

const validarOperador = (operador) => {
    switch (operador) {
        case '+':
        case '-':
        case '/':    
        case '*':
        case '%':
            return operador;
        default:
            console.log('operador informado é inválido');
            return null;
    }
}

readLine.question('Favor informar um número:', (n1) =>{
    const numeroValido1 = validarNumero(n1);

    if(numeroValido1){
        readLine.question('Favor informar outro número:', (n2) => {
            const numeroValido2 = validarNumero(n2);

            if(numeroValido2){  
                readLine.question('Favor informar o operador: ', operador => {
                    const operadorValidado = validarOperador(operadorValidado)
                    if(operadorValidado){
                        switch (operadorValidado) {
                            case '+': console.log(`operador selecionado + ${numeroValido1} + ${numeroValido2} = ${numeroValido1 + numeroValido2}`)
                            case '-': console.log(`operador selecionado - ${numeroValido1} - ${numeroValido2} = ${numeroValido1 - numeroValido2}`)
                            case '/': console.log(`operador selecionado / ${numeroValido1} / ${numeroValido2} = ${numeroValido1 / numeroValido2}`)
                            case '*': console.log(`operador selecionado * ${numeroValido1} * ${numeroValido2} = ${numeroValido1 * numeroValido2}`)
                            case '%': console.log(`operador selecionado % ${numeroValido1} % ${numeroValido2} = ${numeroValido1 % numeroValido2}`)
                        }
                    }
                })
            }
        })
    }
})
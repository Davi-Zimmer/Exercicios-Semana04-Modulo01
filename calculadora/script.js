

function calc( number1, number2){

    const operationIndex = parseInt(document.getElementById('inputGroupSelect01').value)

    const actionList = [
        (n1, n2) => n1 + n2, 
        (n1, n2) => n1 - n2, 
        (n1, n2) => n1 * n2, 
        (n1, n2) => n1 / n2, 
    ]
    
    const action = actionList[ operationIndex -1]

    const result = action(number1, number2)

    return result

}


function gerarResultado( e ){
    e.preventDefault()

    const number1 = parseInt(document.getElementById('inputNumero1').value)
    const number2 = parseInt(document.getElementById('inputNumero2').value)

    const result = calc(number1, number2)
    document.getElementById('result').innerText = result
}

document
    .getElementById('form')
    .addEventListener('submit', gerarResultado)
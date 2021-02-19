let displayTest = ""
let numOne 
let numTwo
let operation
function handleClick(symbol){
       
    switch(symbol) {
        case "+" :
            numOne = parseFloat(displayTest) // transformando a string em número real
            displayTest = "0"
            operation = symbol
            break   
        case "=" :
            numTwo = parseFloat(displayTest) // transformando a string em número real
            displayTest = numOne + numTwo
            operation = symbol
            break   
        default:
            displayTest += symbol
    }
    const element = document.getElementById("output")
    element.innerText= displayTest
}

function handleClear(){
    const element = document.getElementById("output")
    displayTest = "0"
    element.innerText= displayTest
}

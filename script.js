let firstNumber = ""
let secondNumber = ""
const numberButtons = document.querySelectorAll(".number")
const operatorButtons = document.querySelectorAll(".operator")
const equalsButton = document.querySelector(".equals")
const clearButton = document.querySelector(".clear")
const deleteButton = document.querySelector(".delete")

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (operator === "") {
            firstNumber += button.textContent
        } else {
            secondNumber += button.textContent
        }
        writeDisplay()
    })
})



const add = function () {
    return firstNumber + secondNumber 
}

const subtract = function () {
    return firstNumber - secondNumber
}

const multiply = function () {
    return firstNumber * secondNumber
}

const divide = function () {
    return firstNumber / secondNumber
}

const operate = function () {
    
    console.table(operator)
}

let display = document.querySelector('.output-field')
let operator = [add(), subtract(), multiply(), divide()]
const writeDisplay = function () {
    if (operator === "") {
        display.textContent = firstNumber
    } else {    
        display.textContent = secondNumber
    }

}

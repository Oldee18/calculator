let firstNumber = ""
let secondNumber = ""
const numberButtons = document.querySelectorAll(".number")
const equalsButton = document.querySelector(".equals")
const clearButton = document.querySelector(".clear")
const deleteButton = document.querySelector(".delete")
const operatorButtons = document.querySelectorAll(".operator")

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (operatorButtons === "") {
            firstNumber += button.textContent
            display.textContent = firstNumber
        } else {
            secondNumber += button.textContent
            display.textContent = secondNumber
        }
    })
})

/* const operate = function () {
    
    console.table(operator) 
} */

let display = document.querySelector('.output-field')


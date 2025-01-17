let firstNumber = ""
let secondNumber = ""
const numberButtons = document.querySelectorAll(".number")
const equalsButton = document.querySelector(".equals")
const clearButton = document.querySelector(".clear")
const deleteButton = document.querySelector(".delete")
const operatorButtons = document.querySelectorAll(".operator")

numberButtons.forEach((numberBtn) => {
    numberBtn.addEventListener("click", () => {
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

console.log(operatorButtons)
console.log(numberButtons)
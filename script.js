let firstNumber = ""
let secondNumber = ""
const numberButtons = document.querySelectorAll(".number")
const equalsButton = document.querySelector(".equals")
const clearButton = document.querySelector(".clear")
const deleteButton = document.querySelector(".delete")
const operatorButtons = document.querySelectorAll(".operator")
let display = document.querySelector('.output-field')

operatorButtons.forEach((operatorBtn) => {
    operatorBtn.addEventListener("click", () => {
            display.textContent = ""
    })
}) 



numberButtons.forEach((numberBtn) => {
    numberBtn.addEventListener("click", () => {
        if (operatorButtons === "") {
            firstNumber += numberBtn.textContent
            display.textContent = firstNumber
        } else 
            secondNumber += numberBtn.textContent
            display.textContent = secondNumber
        })
})



console.log(operatorButtons)
console.log(numberButtons)

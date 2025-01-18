let firstNumber = ""
let secondNumber = ""
const numberButtons = document.querySelectorAll(".number")
const equalsButton = document.querySelector(".equals")
const clearButton = document.querySelector(".clear")
const deleteButton = document.querySelector(".delete")
const operatorButtons = document.querySelectorAll(".operator")

operatorButtons.forEach((operatorBtn) => {
    operatorBtn.addEventListener("click", () => {
        if (operatorBtn != "") {
            display.textContent = ""
        }
    })
}) 



numberButtons.forEach((numberBtn) => {
    numberBtn.addEventListener("click", () => {
        if (operatorButtons === "") {
            firstNumber += numberBtn.textContent
            display.textContent = firstNumber
            console.log(firstNumber)
        } else if (operatorButtons != "") {
            secondNumber += numberBtn.textContent
            display.textContent = secondNumber
            console.log(secondNumber)
        }
    })
})


let display = document.querySelector('.output-field')

console.log(operatorButtons)
console.log(numberButtons)

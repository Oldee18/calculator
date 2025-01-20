let firstNumber = ""
let secondNumber = ""
const numberButtons = document.querySelectorAll(".number")
const equalsButton = document.querySelector(".equals")
const clearButton = document.querySelector(".clear")
const deleteButton = document.querySelector(".delete")
const operatorButtons = document.querySelectorAll(".operator")
let display = document.querySelector('.output-field')

numberButtons.forEach((numberBtn) => {
    numberBtn.addEventListener("click", () => {
    	firstNumber += numberBtn.textContent
     	display.textContent = firstNumber
        })
		operatorButtons.forEach((operatorBtn) => {
			operatorBtn.addEventListener("click", () => {
					display.textContent = ""
					secondNumber += numberBtn.textContent
			})
		}) 
	})



	



console.log(operatorButtons)
console.log(numberButtons)

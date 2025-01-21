let firstNumber = 0
let secondNumber = 0

const add = function () {
	console.log(firstNumber + secondNumber)
}

const subtract = function () {
	console.log(firstNumber - secondNumber)
}

const multiply = function () {
	console.log(firstNumber * secondNumber)
}

const divide = function () {
	console.log(firstNumber / secondNumber)
}

const numberButtons = document.querySelectorAll(".number")
const display = document.querySelector(".output-field")
const operatorButtons = document.querySelectorAll(".operator")

const operate = function () {
	let num1 = +prompt("What is your first number?")
	let num2 = +prompt("What is your second number?")
	let operator = prompt("What operation do you want to finish? Add, Subtract, Multiply, Divide")
		firstNumber += num1
		secondNumber += num2
			if (operator === "Add") {			
				add()
			} else if (operator === "Subtract") {
				subtract()
			} else if (operator === "Multiply") {
				multiply()
			} else if (operator === "Divide") {
				divide()
			} else 
				alert("Bad operator choice. Please choose a valid operator!")
}
console.log(numberButtons)
console.log(operatorButtons)
const displayPopulate = function () {
	numberButtons.forEach((numberBtn) => {
		numberBtn.addEventListener("click", () => {
			display.textContent += numberBtn.textContent
			firstNumber += numberBtn.textContent
		})
		
	})
}


displayPopulate()
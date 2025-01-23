let firstNumber = 0
let operation = ""

const getNumber = function () {
	return +display.textContent
}

const add = function () {
	firstNumber = +firstNumber + getNumber()
}

const subtract = function () {
	firstNumber = +firstNumber - getNumber()
}

const multiply = function () {
	firstNumber = +firstNumber * getNumber()
}

const divide = function () {
	firstNumber = +firstNumber / getNumber()
}

const numberButtons = document.querySelectorAll(".number")
const display = document.querySelector(".output-field")
const operatorButtons = document.querySelectorAll(".operator")
const equals = document.querySelector("#equals")
const clear = document.querySelector("#clear")

const operate = function () {
	if ("+" === operation) {
		add()
	} else if ("-" === operation) {
		subtract()
	} else if ("*" === operation) {
		multiply()
	} else if ("/" === operation) {
		divide()
	} else {
		alert("Ember")
	}
	
	display.textContent = firstNumber
}
equals.addEventListener("click", () => {
	operate()
})

operatorButtons.forEach((operatorBtn) => {
	operatorBtn.addEventListener("click", () => {
		operation = operatorBtn.innerHTML
		if (firstNumber !== 0 ) {
			operate()
		}
		firstNumber = display.textContent
		display.textContent = ""
	})
})

const displayPopulate = function () {
	numberButtons.forEach((numberBtn) => {
		display.textContent = ""
		numberBtn.addEventListener("click", () => {			
			display.textContent += numberBtn.textContent			
		})
	})
}

clear.addEventListener("click", () => {
	firstNumber = 0
	operation = ""
	display.textContent = ""
})

displayPopulate()

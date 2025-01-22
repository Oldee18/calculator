let firstNumber = 0
let secondNumber = 0
let pressedOpBtn = {}

const add = function () {
	display.textContent = +firstNumber + +secondNumber
}

const subtract = function () {
	display.textContent= +firstNumber - +secondNumber
}

const multiply = function () {
	display.textContent = +firstNumber * +secondNumber
}

const divide = function () {
	display.textContent = +firstNumber / +secondNumber
}

const numberButtons = document.querySelectorAll(".number")
const display = document.querySelector(".output-field")
const operatorButtons = document.querySelectorAll(".operator")
const equals = document.querySelector("#equals")

const operate = function () {
	equals.addEventListener("click", () => {
		if ("add" in pressedOpBtn) {
			add()
		} else if ("subtract" in pressedOpBtn) {
			subtract()
		} else if ("multiply" in pressedOpBtn) {
			multiply()
		} else if ("divide" in pressedOpBtn) {
			divide()
		}
	})
	
}
operatorButtons.forEach((operatorBtn) => {
	operatorBtn.addEventListener("click", () => {
		pressedOpBtn = operatorBtn
		display.textContent = ""
	})
})

const displayPopulate = function () {
	numberButtons.forEach((numberBtn) => {
		display.textContent = ""
		numberBtn.addEventListener("click", () => {
			if (pressedOpBtn === "") {
				display.textContent += numberBtn.textContent
				firstNumber = display.textContent
			} else if (pressedOpBtn != "") {
				display.textContent += numberBtn.textContent
				secondNumber = display.textContent
			}
		})
	})
}

displayPopulate()

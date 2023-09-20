const converter = document.querySelector('#converter')
const result = document.querySelector('.result')
const convBtn = document.querySelector('.conv')
const one = document.querySelector('.one')

let fahrenhait
let celsius

const fahrCel = () => {
	fahrenhait = converter.value * 1.8 + 32
	result.textContent = `${converter.value}°C is ${fahrenhait.toFixed(1)}°F`
	converter.value = ''
}

const conversion = () => {
	if (converter.value !== '') {
		if (one.textContent === '°C') {
			fahrCel()
		}
	} else {
		result.textContent = 'you must enter a number!'
	}
}

const reset = () => {
	converter.value = ''
	result.textContent = ''
}

convBtn.addEventListener('click', conversion)


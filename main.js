const temperatureField = document.querySelector('#temperatureField')
const result = document.querySelector('.result')
const convertBtn = document.querySelector('.conv')


const fahrtoCel = () => {
	const fahrenhait = temperatureField.value * 1.8 + 32 
	result.textContent = `${temperatureField.value}°C is ${fahrenhait.toFixed(1)}°F`
	temperatureField.value = ''
}

const conversion = () => {
	if (temperatureField.value === '') {
		return (result.textContent = 'you must enter a number!')
	}
	return fahrtoCel()
}

const reset = () => {
	converter.value = ''
	result.textContent = ''
}



convertBtn.addEventListener('click', conversion)

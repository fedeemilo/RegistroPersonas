/* Functionality of form validation */

/* Variables */
const inputName = document.querySelector('.input-name');
const inputLastname = document.querySelector('.input-lastname');
const inputDNI = document.querySelector('.input-dni');
const inputAddress = document.querySelector('.input-address');
const inputPhone = document.querySelector('.input-phone');
const inputEmail = document.querySelector('.input-email');
const inputText = document.querySelector('.input-text');

document.addEventListener('DOMContentLoaded', () => {
	inputName.addEventListener('input', (e) => {
		let regex = /^[a-zA-Z]+$/;

		if (!e.target.value.match(regex)) {
            console.log(e)
			return false;
		}
	});
});

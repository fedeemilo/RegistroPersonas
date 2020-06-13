/* JS utils */

/* Variables */

const showTableButton = document.querySelector('#show-table');
const showFormButton = document.querySelector('#show-form');
const closeAlertButton = document.querySelector('.close');
const personsTable = document.querySelector('#table-persons');
const cardPersonsForm = document.querySelector('#card-persons-form');
const alertDiv = document.querySelector('.alert-dismissible');

document.addEventListener('DOMContentLoaded', () => {
	/* On click toggle show/hide table  */
	showTableButton.addEventListener('click', () => {
		// Toggle show/hide table
		personsTable.classList.toggle('d-none');

		// Change table button's text
		console.log(showTableButton.innerHTML.trim());
		showTableButton.innerHTML.trim() === 'Ocultar Tabla'
			? (showTableButton.innerHTML = 'Mostrar Tabla')
			: (showTableButton.innerHTML = 'Ocultar Taba');
	});

	/* On click toggle show/hide form */
	showFormButton.addEventListener('click', () => {
		// Toggle show/hide form
		cardPersonsForm.classList.toggle('d-none');

		// Change form button's text
		showFormButton.innerHTML.trim() === 'Ocultar Formulario'
			? (showFormButton.innerHTML = 'Mostrar Formulario')
			: (showFormButton.innerHTML = 'Ocultar Formulario');
	});

	/* Close alert */
	closeAlertButton.addEventListener('click', () => {

		alertDiv.style.display = 'none';
	});
});

/* JS utils */

/* Variables */

const showTableButton = document.querySelector('#show-table');
const showFormButton = document.querySelector('#show-form');
const personsTable = document.querySelector('#table-persons');
const cardPersonsForm = document.querySelector('#card-persons-form');

document.addEventListener('DOMContentLoaded', () => {
	/* On click toggle show/hide table  */
	showTableButton.addEventListener('click', () => {
		// Toggle show/hide table
		personsTable.classList.toggle('d-table-if');

		// Change table button's text
		console.log(showTableButton.innerHTML.trim());
		showTableButton.innerHTML.trim() === 'Ocultar Tabla de Personas'
			? (showTableButton.innerHTML = 'Mostrar Tabla de Personas')
			: (showTableButton.innerHTML = 'Ocultar Tabla de Peronas');
	});

	/* On click toggle show/hide form */
	showFormButton.addEventListener('click', () => {
		// Toggle show/hide form
		cardPersonsForm.classList.toggle('d-form-if');

		// Change form button's text
		showFormButton.innerHTML.trim() === 'Ocultar Formulario de Registro'
			? (showFormButton.innerHTML = 'Mostrar Formulario de Registro')
			: (showFormButton.innerHTML = 'Ocultar Formulario de Registro');
	});
});

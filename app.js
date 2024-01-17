const inputField = document.querySelector('#note')

const attachNote = () => {
	const stickyNote = document.createElement('div');
	stickyNote.classList.add('individual-notes');
	const checkbox = document.createElement('input');
	checkbox.type = 'checkbox';
	checkbox.classList.add('checkbox');
	const note = document.createElement('p');

	const notesContainer = document.querySelector('.notes-container');
	notesContainer.append(stickyNote);
	stickyNote.append(checkbox);
	stickyNote.append(note);

	note.innerText = inputField.value

	checkbox.addEventListener('change', function() {
		if(this.checked) {
			setTimeout(() => {
				notesContainer.removeChild(stickyNote);
			}, 300);
		}
	});

	if (inputField.value !== '') {
		inputField.value = '';
	}
}

inputField.addEventListener('keydown', (event) => {
	if (inputField.value === ''){
		if (event.keyCode === 13) {
			event.preventDefault()
		}
		return;
	}
	if(event.keyCode === 13) {
		attachNote();
		event.preventDefault();
	}
});




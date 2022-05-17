const chapterInput = document.getElementById('favchap');
const addButton = document.querySelector('button');
const listElement = document.querySelector('.list');

function addBookAndChapter() {
	const bookAndChapter = document.createElement('li');
	const deleteButton = document.createElement('button');
	bookAndChapter.textContent = chapterInput.value;
	bookAndChapter.className = 'chapter-element';
	deleteButton.textContent = 'X';
	deleteButton.style.color = 'red';
	deleteButton.addEventListener('click', () => {
		listElement.removeChild(bookAndChapter)
		chapterInput.focus();
	});
	bookAndChapter.append(deleteButton);
	listElement.append(bookAndChapter);
	chapterInput.value = '';
	chapterInput.focus();
}

addButton.addEventListener('click', addBookAndChapter)
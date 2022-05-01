// const lessons = [
//     'Lesson 02',
//     'Lesson 03',
//     'Lesson 04',
//     'Lesson 05',
//     'Lesson 06',
//     'Lesson 07',
//     'Lesson 08',
//     'Lesson 09',
//     'Lesson 10',
//     'Lesson 11'
// ];

// const rootList = document.querySelector('.lessons-list');

// lessons.forEach((item, idx) => {
//     const listItem = document.createElement('li');
//     const link = document.createElement('a');
//     link.className = `lesson-${idx+2}-link`;
//     link.href = '#';
//     link.textContent = 'Title';
//     listItem.textContent = `${item}: `;
//     listItem.appendChild(link);
//     listItem.className = `lesson-${idx+2}-item lesson-item`;
//     rootList.appendChild(listItem);
// });

const date = new Date().toLocaleString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
});

const dateField = document.querySelector('.date-time');
dateField.textContent = date;
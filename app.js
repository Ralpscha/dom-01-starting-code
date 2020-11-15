const h1 = document.getElementById('main-title');

h1.textContent = 'Some new title';
h1.style.color = 'white';
h1.style.backgroundColor = 'black';

const li = document.querySelector('li:last-of-type');
// console.dir(li);
console.log(li.textContent);
li.textContent = li.textContent + ' (Changed)';

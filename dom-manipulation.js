// your JavaScript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);


const pTag = document.createElement('p');
pTag.innerHTML = "Hey I’m red!";
pTag.style.color = "red";

container.appendChild(pTag);


const h3Tag = document.createElement('h3');
h3Tag.innerHTML = "I’m a blue h3!";
h3Tag.style.color = "blue";

container.appendChild(h3Tag);

const divTag = document.createElement('div');
divTag.id = "inner-div";
divTag.style.border = "2px solid black";
divTag.style.backgroundColor = "Pink";



const h1Tag = document.createElement('h1');
h1Tag.innerHTML = "I'm in a div!";

divTag.appendChild(h1Tag);

const divPTag = document.createElement('p');
divPTag.innerHTML = "ME TOO!";

divTag.appendChild(divPTag);

container.appendChild(divTag);
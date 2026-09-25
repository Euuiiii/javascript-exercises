const container = document.querySelector('#container');

const redPara = document.createElement('p');
redPara.textContent = "Hey I’m red!";
redPara.style.color = 'red';
container.appendChild(redPara);

const head3 = document.createElement('h3');
head3.textContent = "I'm a blue h3!";
head3.style.color = 'blue';
container.appendChild(head3);


const div = document.createElement('div');
div.style.border = '1px solid black';
div.style.backgroundColor = 'grey';


const divHeading = document.createElement('h1');
divHeading.textContent = "I'm in a div!";
div.appendChild(divHeading);

const para = document.createElement('p');
para.textContent = "ME TOO!";
div.appendChild(para);

container.appendChild(div);

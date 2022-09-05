const container = document.querySelector('#container');

const firstParagraph = document.createElement('p');
firstParagraph.textContent = 'Hey I’m red!';
firstParagraph.style.color = 'red';
container.appendChild(firstParagraph);

const h3 = document.createElement('h3');
h3.textContent = 'I’m a blue h3!';
h3.style.color = 'blue';
container.appendChild(h3);

const divContent = document.createElement('div');
divContent.setAttribute('style', 'border: 3px solid black; background: pink;');
container.appendChild(divContent);

const h1 = document.createElement('h1');
h1.textContent = 'I’m in a div';
divContent.appendChild(h1);

const secondParagraph = document.createElement('p');
secondParagraph.textContent = 'ME TOO!';
divContent.appendChild(secondParagraph);

const btn = document.createElement('button');
btn.textContent = 'CLICK ME!';
btn.setAttribute(
  'style',
  'border: 1px solid white; border-radius: 10px; padding: 12px; color:white; background: green;'
);
divContent.appendChild(btn);

btn.addEventListener('click', () => {
  alert('Hello World');
});

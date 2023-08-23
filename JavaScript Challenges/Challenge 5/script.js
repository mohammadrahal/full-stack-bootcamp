const menu = document.querySelectorAll('.menu');
const header = document.querySelectorAll('.header');
const footer = document.querySelectorAll('.footer');

menu.forEach(menu => {
    console.log("Child elements of the 'menu' div:");
    console.log(menu.children);
});

header.forEach(header => {
    console.log("Child elements of the 'header' div:");
    console.log(header.children);
});

footer.forEach(footer => {
    console.log("Child elements of the 'footer' div:");
    console.log(footer.children);
});


// Create a new <div> element
const containerDiv = document.createElement('div');
// Add the "container" class to the <div>
containerDiv.className = 'container';
// Create a new <p> element
const paragraph = document.createElement('p');
paragraph.textContent = 'Hello, World!';
// Append the <p> element to the <div>
containerDiv.appendChild(paragraph);
document.body.appendChild(containerDiv);


// Use querySelector instead of querySelectorAll hata y3ml select l element whde 
const container = document.querySelector('.container'); 
container.style.backgroundColor = 'blue';

paragraph.style.color = '#ffffff';
paragraph.style.fontSize = '24px';
paragraph.style.fontFamily = 'Helvetica';
paragraph.style.border = '1px solid black';
const styleTag = document.createElement('style');
styleTag.textContent = 'h1, h2, h3, h4, h5, h6 { font-style: italic; }';
document.head.appendChild(styleTag);

// Append the  elements
// container.appendChild(paragraph); 
document.body.appendChild(container);

//button
const newButton = document.createElement('button');
newButton.classList.add('button');
const paragraphButton = document.createElement('p');
paragraphButton.textContent = 'Click here';
newButton.appendChild(paragraphButton);
document.body.appendChild(newButton);

newButton.style.backgroundColor = 'red';
paragraphButton.style.color = 'white';

newButton.addEventListener("mouseover", () => {
    newButton.style.backgroundColor = 'blue';
});

newButton.addEventListener("mouseout", () => {
    newButton.style.backgroundColor = 'red';
});


// Event Delegation
const originalDiv = document.getElementById('original');

originalDiv.addEventListener('click', event => {
  const target = event.target;
  
  if (target.tagName === 'BUTTON') {
    console.log(target.textContent);
  }
});
//form 

const form = document.getElementById('myForm');
let submit;
form.addEventListener('submit', event => {
  event.preventDefault(); // Prevent default form submission
  
  const formData = new FormData(form);
  const formDataObject = {};

  for (const [key, value] of formData.entries()) {
    formDataObject[key] = value;
  }

  console.log(formDataObject);
});


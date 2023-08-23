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
const paragraph1 = document.createElement('p');
container.style.backgroundColor = 'blue';

paragraph1.style.color = '#fff';
paragraph1.style.fontSize = '24px';
paragraph1.style.fontFamily = 'Helvetica';
paragraph1.style.border = '1px solid black';
const styleTag = document.createElement('style');
styleTag.textContent = 'h1, h2, h3, h4, h5, h6 { font-style: italic; }';
document.head.appendChild(styleTag);

// Append the  elements
container.appendChild(paragraph1); 
document.body.appendChild(container);


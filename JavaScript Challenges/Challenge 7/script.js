console.log("hello");

const container = document.createElement("div");
const loginContainer = document.createElement("div");
const loginSigninNow = document.createElement("div");
const loginSignin = document.createElement("div");

const h1Element = document.createElement("h1");
h1Element.textContent = "Sign up NOW!";
const h3Element = document.createElement("h3");
h3Element.textContent = "Enter your details";
const newForm = document.createElement("form");

const emailInput = document.createElement("input");
emailInput.type = "email";
emailInput.placeholder = "Email";
emailInput.classList.add("input-field");

const pass = document.createElement("input");
pass.type = "password";
pass.placeholder = "Password";
pass.classList.add("input-field");

const passconfirm = document.createElement("input");
passconfirm.type = "password";
passconfirm.placeholder = "Confirm Password";
passconfirm.classList.add("input-field");

const submitInput = document.createElement("input");
submitInput.type = "submit";
submitInput.value = "Submit";
submitInput.classList.add("filled-btn");

container.classList.add("container");
loginContainer.classList.add("login__container");
loginSignin.classList.add("login__signin");
loginSigninNow.classList.add("login__signin-now");

newForm.appendChild(emailInput);
newForm.appendChild(pass);
newForm.appendChild(passconfirm);
newForm.appendChild(submitInput);

document.body.appendChild(container);
container.appendChild(loginContainer);
loginContainer.appendChild(loginSigninNow);
loginSigninNow.appendChild(loginSignin);
loginSignin.appendChild(h1Element);
loginSignin.appendChild(h3Element);
loginSigninNow.appendChild(newForm);


console.log(container,loginContainer,loginSignin,loginSigninNow)

newForm.addEventListener('submit', function (event) {
  event.preventDefault();
  if (pass.value !== passconfirm.value) {
    const errorElement = document.createElement('p');
    errorElement.textContent = "Passwords don't match";
    errorElement.classList.add('error-message');
    newForm.appendChild(errorElement);
  } else {
    // Passwords match, redirect to quotes page or perform any other action here
    window.location.href = 'quote.html';
  }
});

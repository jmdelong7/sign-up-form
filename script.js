let passBlock = document.querySelector('.form-block.password');
let passMatch = document.querySelector('.pass-match')
let pass1 = document.querySelector('#pass1');
let pass2 = document.querySelector('#pass2');

let noMatch = "* Passwords must match";

function matchPasswords() {
  if (pass1.value !== pass2.value) {
    passMatch.textContent = noMatch;
  } else {
    passMatch.textContent = '';
  }
}

pass2.addEventListener("input", matchPasswords);

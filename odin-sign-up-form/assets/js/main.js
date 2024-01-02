const PASS_VALIDITY_MSG =
  "Password must be at least 8 characters " +
  "and contains at least One (a-z), One (A-Z) and One (0-9)";

const form = document.querySelector("form");
const passwordFields = form.querySelectorAll('input[type="password"]');
const passwordErrorSpan = form.querySelector('input[type="password"]+span');

passwordFields.forEach((passField) => {
  passField.addEventListener("input", (event) => {
    console.log(event, "\n", passField.validity);
    if (passField.validity.patternMismatch) {
      passField.setCustomValidity(PASS_VALIDITY_MSG);
      passwordErrorSpan.textContent = "* " + PASS_VALIDITY_MSG;
      passwordErrorSpan.setAttribute("style", "display: inline");
    } else {
      passField.setCustomValidity("");
      passwordErrorSpan.removeAttribute("style");
      passwordFields.forEach((pass) => pass.classList.remove("error"));
    }
  });
});

form.addEventListener("submit", (event) => {
  if (passwordFields[0].value !== passwordFields[1].value) {
    event.preventDefault();
    passwordErrorSpan.textContent = "* Passwords do not match";
    passwordFields.forEach((passField) => {
      passField.classList.add("error");
    });
  } else {
    passwordFields.forEach((pass) => pass.classList.remove("error"));
  }
});

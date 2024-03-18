const firstName = document.getElementById("first-name")
const lastName = document.getElementById("last-name")
const emailAddress = document.getElementById("email-address")
const password = document.getElementById("password")
const errorSignFirstName = document.getElementById("error-sign-first-name")
const errorSignLastName = document.getElementById("error-sign-last-name")
const errorSignEmail = document.getElementById("error-sign-email")
const errorSignPassword = document.getElementById("error-sign-password")
const errorMessageFirstName = document.getElementById("error-message-first-name")
const errorMessageLastName = document.getElementById("error-message-last-name")
const errorMessageEmail = document.getElementById("error-message-email")
const errorMessagePassword = document.getElementById("error-message-password")
const submitBtn = document.getElementById("submit-btn")

submitBtn.addEventListener("click", () => {
  if (firstName.value == "") {
    errorMessageFirstName.style.display = "block"
    errorSignFirstName.style.display = "block"
  } else {
    errorMessageFirstName.style.display = "none"
    errorSignFirstName.style.display = "none"
  }

  if (lastName.value == "") {
    errorMessageLastName.style.display = "block"
    errorSignLastName.style.display = "block"
  } else {
    errorMessageLastName.style.display = "none"
    errorSignLastName.style.display = "none"
  }

  if (emailAddress.value === "") {
    errorMessageEmail.style.display = "block"
    errorSignEmail.style.display = "block"
  } else {
    errorMessageEmail.style.display = "none"
    errorSignEmail.style.display = "none"
  }

  if (password.value === "") {
    errorMessagePassword.style.display = "block"
    errorSignPassword.style.display = "block"
  } else {
    errorMessagePassword.style.display = "none"
    errorSignPassword.style.display = "none"
  }
})
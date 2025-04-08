const newsletterContainer = document.querySelector(".newsletter-container");
const form = document.getElementById("form");
const emailInput = document.getElementById("email");
const errorMessage = document.querySelector(".error-message");
const submitBtn = document.getElementById("submit");
const successMessage = document.querySelector(".success-message");

const handleFormSubmit = (e) => {
  e.preventDefault(e);

  const emailValue = emailInput.value.trim();
  const error = validateEmail(emailValue);

  if (error) {
    errorMessage.textContent = error;
    errorMessage.style.display = "flex";
    emailInput.classList.add("error");
    return;
  }
};

const validateEmail = (email) => {
  if (!email) return "Email is required";

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return "Valid email required";

  return "";
};

form.addEventListener("submit", handleFormSubmit);

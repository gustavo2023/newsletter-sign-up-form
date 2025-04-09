const newsletterContainer = document.querySelector(".newsletter-container");
const form = document.getElementById("form");
const emailInput = document.getElementById("email");
const errorMessage = document.querySelector(".error-message");
const submitBtn = document.getElementById("submit");
const successMessage = document.querySelector(".success-message");
const userEmailSpan = document.querySelector(".user-email");
const dismissBtn = document.querySelector(".dismiss-btn");

const showElement = (element, displayStyle = "flex") => {
  element.style.display = displayStyle;
};

const hideElement = (element) => {
  element.style.display = "none";
};

const setEmailErrorState = (message) => {
  errorMessage.textContent = message;
  showElement(errorMessage);
  emailInput.setAttribute("aria-invalid", "true");
  emailInput.classList.add("error");
};

const clearEmailErrorState = () => {
  hideElement(errorMessage);
  emailInput.setAttribute("aria-invalid", "false");
  emailInput.classList.remove("error");
};

const handleFormSubmit = (e) => {
  e.preventDefault();

  const emailValue = emailInput.value.trim();
  const error = validateEmail(emailValue);

  if (error) {
    setEmailErrorState(error);
    return;
  }

  clearEmailErrorState();
  emailInput.value = "";

  userEmailSpan.textContent = emailValue;
  hideElement(newsletterContainer);
  showElement(successMessage);
};

const validateEmail = (email) => {
  if (!email) return "Email is required";

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return "Valid email required";

  return "";
};

dismissBtn.addEventListener("click", () => {
  hideElement(successMessage);
  showElement(newsletterContainer, "grid");
});

form.addEventListener("submit", handleFormSubmit);

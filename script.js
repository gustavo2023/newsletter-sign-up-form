const newsletterContainer = document.querySelector(".newsletter-container");
const form = document.getElementById("form");
const emailInput = document.getElementById("email");
const errorMessage = document.querySelector(".error-message");
const submitBtn = document.getElementById("submit");
const successMessage = document.querySelector(".success-message");
const userEmailSpan = document.querySelector(".user-email");
const dismissBtn = document.querySelector(".dismiss-btn");

const handleFormSubmit = (e) => {
  e.preventDefault(e);

  const emailValue = emailInput.value.trim();
  const error = validateEmail(emailValue);

  if (error) {
    errorMessage.textContent = error;
    errorMessage.style.display = "flex";
    emailInput.setAttribute("aria-invalid", "true");
    emailInput.classList.add("error");
    return;
  }

  errorMessage.style.display = "none";
  emailInput.setAttribute("aria-invalid", "false");
  emailInput.classList.remove("error");
  emailInput.value = "";

  userEmailSpan.textContent = emailValue;
  successMessage.showModal();
};

const validateEmail = (email) => {
  if (!email) return "Email is required";

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return "Valid email required";

  return "";
};

dismissBtn.addEventListener("click", () => {
  successMessage.close();
});

form.addEventListener("submit", handleFormSubmit);

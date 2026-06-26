const yearElement = document.getElementById("year");
const contactButton = document.getElementById("contactButton");
const contactMessage = document.getElementById("contactMessage");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

if (contactButton && contactMessage) {
  contactButton.addEventListener("click", () => {
    contactMessage.textContent =
      "Thanks! A member of our team will call you back within one business day.";
  });
}

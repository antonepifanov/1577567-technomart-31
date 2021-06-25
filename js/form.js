const formLink = document.querySelector(".about-button");
const feedback = document.querySelector(".feedback");
const formClose = feedback.querySelector(".close-button");
const feedbackForm = feedback.querySelector(".feedback-form");
const formName = feedback.querySelector("#form_name");
const formMail = feedback.querySelector("#form_email");
const formLetter = feedback.querySelector("#form_letter");

formLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedback.classList.add("feedback-show");
  formName.focus();
});

formClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedback.classList.remove("feedback-show");
  feedback.classList.remove("feedback-error");
});

feedbackForm.addEventListener("submit", function (evt) {
  if (!formName.value || !formMail.value || !formLetter.value) {
    evt.preventDefault();
    feedback.classList.remove("feedback-error");
    feedback.offsetWidth = feedback.offsetWidth;
    feedback.classList.add("feedback-error");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (feedback.classList.contains("feedback-show")) {
      evt.preventDefault();
      feedback.classList.remove("feedback-show");
      feedback.classList.remove("feedback-error");
    }
  }
});

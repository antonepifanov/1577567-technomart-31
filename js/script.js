const initCart = () => {
  const buyButtons = document.querySelectorAll(".buy");
  const cart = document.querySelector(".cart");
  const cartClose = cart.querySelector(".close-button");
  const cartContinue = cart.querySelector(".continue-button");
  if (!buyButtons) {
    return;
  };
  for (let buyButton of buyButtons) {
    buyButton.addEventListener("click", function (evt) {
      evt.preventDefault();
      cart.classList.add("cart-show");
    });
  };
  cartClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    cart.classList.remove("cart-show");
  });
  cartContinue.addEventListener("click", function (evt) {
    evt.preventDefault();
    cart.classList.remove("cart-show");
  });
};
initCart();
const initForm = () => {
  const formLink = document.querySelector(".about-button");
  const feedback = document.querySelector(".feedback");
  const formClose = feedback.querySelector(".close-button");
  const feedbackForm = feedback.querySelector(".feedback-form");
  const formName = feedback.querySelector("#form_name");
  const formMail = feedback.querySelector("#form_email");
  const formLetter = feedback.querySelector("#form_letter");
  if (!formLink) {
    return;
  };
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
};
initForm();
const initMap = () => {
  const mapLink = document.querySelector(".map-link");
  const mapPopup = document.querySelector(".map");
  const mapClose = mapPopup.querySelector(".close-button");
  if (!mapLink) {
    return;
  };
  mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("map-show");
  });

  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("map-show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (mapPopup.classList.contains("map-show")) {
        evt.preventDefault();
        mapPopup.classList.remove("map-show");
      }
    }
  });
};
initMap();

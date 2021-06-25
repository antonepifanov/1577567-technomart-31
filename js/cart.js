const buyButtons = document.querySelectorAll(".buy");
const cart = document.querySelector(".cart");
const cartClose = cart.querySelector(".close-button");
const cartContinue = cart.querySelector(".continue-button");


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

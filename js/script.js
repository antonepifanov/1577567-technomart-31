const slider = () => {
  const bullets = document.querySelectorAll('.slider-control__button');
  if (!bullets) {
    return;
  };
  for (let i = 1; i < bullets.length; i++) {
    bullets[i].addEventListener("click");
  };
};

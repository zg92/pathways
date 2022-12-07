const subContentCards = document.querySelectorAll(".sub-content-image-wrapper");
const subContentText = document.querySelectorAll(".sub-content-text");

window.onload = () => {
  checkWindow();
};

const mediaQuery = window.matchMedia("screen and (max-width: 1400px)");

mediaQuery.onchange = () => {
  checkWindow();
};

const checkWindow = () => {
  if (mediaQuery.matches) {
    subContentCards[1].style.order = 0;
    subContentText[1].style.textAlign = "center";
  } else {
    subContentCards[1].style.order = 1;
    subContentText[1].style.textAlign = "right";
  }
};

const sliderContainer = document.querySelector(".slider-container"),
  leftSlide = document.querySelector(".left-slide"),
  rightSlide = document.querySelector(".right-slide"),
  upButton = document.querySelector(".up-button"),
  downButton = document.querySelector(".down-button"),
  rightSlidesLength = rightSlide.querySelectorAll("div").length;

let activeSlideIndex = 0;

leftSlide.style.top = `-${(rightSlidesLength - 1) * 100}vh`;

upButton.addEventListener("click", () => changeSlide("up"));
downButton.addEventListener("click", () => changeSlide("down"));

const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight;
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex > rightSlidesLength - 1) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = rightSlidesLength - 1;
    }
  }

  rightSlide.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }px)`;

  leftSlide.style.transform = `translateY(${
    activeSlideIndex * sliderHeight
  }px)`;
};

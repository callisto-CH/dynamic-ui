export default class Carousel {
  constructor() {
    this.images = document.querySelector(".carousel-images");
    this.leftButton = document.querySelector(".left-button");
    this.rightButton = document.querySelector(".right-button");
    this.slideButtons = [...document.querySelectorAll(".slide-button")];
    this.currentSlide = 0;
    this.timer = undefined;

    this.leftButton.addEventListener("click", () => {
      this.goToSlide((this.currentSlide + 4) % 5);
      this.setTimer();
    });
    this.rightButton.addEventListener("click", () => {
      this.goToSlide((this.currentSlide + 1) % 5);
      this.setTimer();
    });
    this.slideButtons.forEach((button) => {
      button.addEventListener("click", () => {
        let slideNum = this.slideButtons.indexOf(button);
        this.goToSlide(slideNum);
        this.setTimer();
      });
    });

    this.setTimer();
  }

  goToSlide = (slideNum) => {
    this.slideButtons[this.currentSlide].textContent = "◯";
    this.currentSlide = slideNum;
    this.slideButtons[this.currentSlide].textContent = "⬤";
    this.images.style.transform = `translateX(-${this.currentSlide * 250}px)`;
  };

  advanceSlide = () => {
    this.goToSlide((this.currentSlide + 1) % 5);
  };

  setTimer = () => {
    clearInterval(this.timer);
    this.timer = setInterval(this.advanceSlide, 5000);
  };
}

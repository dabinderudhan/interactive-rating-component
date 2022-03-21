const submitBtn = document.querySelector(".section-rating--submit");
const ratingBtns = document.querySelectorAll(
  ".section-rating--ratingbtns_btn-no"
);
const selectedBtn = document.querySelector(".section-thankyou--btn-nos");
const ratingSection = document.querySelector(".section-rating");
const thankyouSection = document.querySelector(".section-thankyou");

let selectedBtns = [];

ratingBtns.forEach((btnNo) => {
  btnNo.addEventListener("click", function (e) {
    if (e.target.innerText) {
      btnNo.classList.add("btn-selected");
      const btnText = e.target.innerText;

      selectedBtns.push(btnText);

      submitBtn.addEventListener("click", function () {
        selectedBtn.innerText = [...selectedBtns];
        ratingSection.classList.add("hide-box");
        thankyouSection.classList.add("show-box");
      });
    }
  });
});

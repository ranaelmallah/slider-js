let imagesArray = Array.from(document.querySelectorAll("img"));
let slideNumber = document.getElementById("slide-number");
let next = document.querySelector(".next");
let pre = document.querySelector(".pre");
let puse = document.querySelector(".puse");
let numbersArray = Array.from(document.querySelectorAll("li"));
var currentSlide = 1;
next.onclick = function () {
  if (next.classList.contains("disabled")) {
  } else {
    currentSlide++;
    theCheaker(); 
  }
};
pre.onclick = function () {
  if (pre.classList.contains("disabled")) {
  } else {
    currentSlide--;
    theCheaker();
    
  }
};
theCheaker();
function theCheaker() {
  slideNumber.textContent =
    "slide " + currentSlide + " of " + imagesArray.length;
  ramoveActiveClass();
  imagesArray[currentSlide - 1].classList.add("active");
  numbersArray[currentSlide - 1].classList.add("act");
  if (currentSlide == 1) {
    pre.classList.add("disabled");
  } else {
    pre.classList.remove("disabled");
  }
  if (currentSlide == imagesArray.length) {
    next.classList.add("disabled");
  } else {
    next.classList.remove("disabled");
  }
}

function ramoveActiveClass() {
  imagesArray.forEach(function (img) {
    img.classList.remove("active");
  });
  numbersArray.forEach(function (num) {
    num.classList.remove("act");
  });
}

for (let i = 0; i < numbersArray.length; i++) {
  numbersArray[i].onclick = function () {
    currentSlide = parseInt(this.getAttribute("data-custom"));
    theCheaker();
  };
}

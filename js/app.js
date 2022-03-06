var hamburgerMenuBtn = document.querySelector(".header__btn");
var hamburgerMen = document.querySelector(".header__hum-list");
var siteLogo = document.querySelector(".header__link");
var btn = document.querySelector(".header__btn");
var main = document.querySelector(".site-main");
var lang = document.querySelector(".header__lengs");
var last = document.querySelector(".header__left");

hamburgerMenuBtn.addEventListener("click", function() {
    lang.classList.toggle("blet");
    hamburgerMen.classList.toggle("open");
    siteLogo.classList.toggle("nones");
    btn.classList.toggle("mark");
    main.classList.toggle("delete");
    last.classList.toggle("lastchange")
})
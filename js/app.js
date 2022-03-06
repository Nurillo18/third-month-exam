var hamburgerMenuBtn = document.querySelector(".header__btn");
var hamburgerMen = document.querySelector(".header__hum-list");
var siteLogo = document.querySelector(".header__link");
var btn = document.querySelector(".header__btn");
var main = document.querySelector(".site-main");
var leng = document.querySelector(".header__lengs");

hamburgerMenuBtn.addEventListener("click", function() {
    hamburgerMen.classList.toggle("open");
    siteLogo.classList.toggle("nones");
    btn.classList.toggle("mark");
    main.classList.toggle("delete");
    leng.classList.toggle("bol");
})
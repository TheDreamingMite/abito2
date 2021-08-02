let menuBtn = document.querySelector(".menu-button");
let menu = document.querySelector(".navbar-panel");
menuBtn.addEventListener("click", () => {
    console.log('кнопка нажата!!!');
    menu.classList.toggle("is-open")
});

let menuEsc = document.querySelector(".menu-esc");
menuEsc.addEventListener("click", () => {
    console.log('Esc is true!!');
    menu.classList.toggle("is-open")
});
   


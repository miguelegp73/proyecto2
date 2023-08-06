//Vamos con el menu haburguesa
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

const modoOscuro = document.querySelector("#dark");
modoOscuro.addEventListener("click", function () {
    document.body.classList.toggle("dark");
    modoOscuro.classList.toggle("active");
})

////Para fija el fondo en le menu
const navList = document.querySelectorAll(".menuPpal");
navList.forEach(function (item) {
    item.addEventListener("click", function(e) {
        const currentItem = document.querySelector(".active");
        currentItem.classList.remove("active");
        e.target.classList.add("active");
    });
});

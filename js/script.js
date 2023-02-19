console.log("Witaj na mojej stronie!");

let button = document.querySelector(".button");
let body = document.querySelector(".body");
let js__button = document.querySelector(".js__button");

button.addEventListener("click", () => {
    body.classList.toggle("darker");

    js__button.innerText = body.classList.contains("darker") ? "jaśniejszy" : "ciemniejszy";
});



{
    const welcome = () => {
        console.log("Witaj na mojej stronie!");
    }

    const toggleBackground = () => {
        const body = document.querySelector(".body");
        const js__button = document.querySelector(".js__button");
        body.classList.toggle("darker");
        js__button.innerText = body.classList.contains("darker") ? "jaśniejszy" : "ciemniejszy";
    };

    const init = () => {
        let button = document.querySelector(".button");
        button.addEventListener("click", toggleBackground);
        welcome();
    };
    init();
}
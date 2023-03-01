{
    const welcome = () => {
        console.log("Witaj na mojej stronie!");
    }

    const toggleBackground = () => {
        const body = document.querySelector(".body");
        const buttonElement = document.querySelector(".js__button");

        body.classList.toggle("body--darker");
        buttonElement.innerText = body.classList.contains("body--darker") ? "jaśniejszy" : "ciemniejszy";
    };

    const init = () => {
        const button = document.querySelector(".button");

        button.addEventListener("click", toggleBackground);
        welcome();
    };

    init();
}
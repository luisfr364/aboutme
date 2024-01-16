const btn = document.querySelector("#btn-lista");
const lista = document.querySelector("#lista");

btn.addEventListener("click", () => {
    if (lista.classList.contains("animate__slideOutUp")) {
        lista.classList.replace("animate__slideOutUp", "animate__slideInDown");
        return;
    }
    lista.classList.add("animate__slideOutUp");
});

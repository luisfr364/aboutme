const btn = document.querySelector("#btn-lista");
const lista = document.querySelector("#lista");
const listImg = document.querySelector("#list-img");

btn.addEventListener("click", () => {
    if (lista.classList.contains("animate__slideOutUp")) {
        lista.classList.replace("animate__slideOutUp", "animate__slideInDown");
        listImg.classList.replace("bg-shortB", "bg-shortA");
        return;
    }
    lista.classList.add("animate__slideOutUp");
    listImg.classList.replace("bg-shortA", "bg-shortB");
});

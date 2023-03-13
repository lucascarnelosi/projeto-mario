const trailerButton = document.querySelector('.botao-trailer');
const closeModalButton = document.querySelector('.fechar-modal');
const modal = document.querySelector('.modal');
const video = document.getElementById("video");
const linkVideo = video.src;

function modalToggle() {
    modal.classList.toggle("aberto");
}

trailerButton.addEventListener("click", () => {
    modalToggle();
    video.setAttribute("src", linkVideo);
});

closeModalButton.addEventListener("click", () => {
    modalToggle();
    video.setAttribute("src", "");
});
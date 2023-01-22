
const botaoTrailer = document.querySelector('.botao-trailer');
const modal = document.querySelector(".modal");
const video = document.getElementById("video");
const linkVideo = video.src;
const botaoFecharModal = document.querySelector('.fechar-modal');

function alternarModal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {    
    alternarModal();
     video.setAttribute("src",linkVideo);
    
});


botaoFecharModal.addEventListener("click", ()=>{
    alternarModal();
    video.setAttribute("src","");

})


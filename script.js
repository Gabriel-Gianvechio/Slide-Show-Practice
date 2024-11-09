let totalSlides = document.querySelectorAll('.slider--item').length; //guarda quantidade total de slides que temos (selectorALL)
let currentSlide = 0; //

let sliderWidth = document.querySelector('.slider').clientWidth;

document.querySelector('.slider--width').style.width =  // multiplica o total de slides com a largura dos slides para criar uma area de slide dinamica
    `${sliderWidth * totalSlides}px`;

document.querySelector('.slider--controls').style.width = 
    `${sliderWidth}px`;

document.querySelector('.slider--controls').style.height = //faz a area dos controladores (passar para direita ou esquerda)
    `${document.querySelector('.slider').clientHeight}px`; //ficar do mesmo tamanho dos slides, como no CSS ta centralizada, fica bem no meio da tela

function goPrev() {
    currentSlide--;
    if(currentSlide < 0) { // se tiver no primeiro slide e mandar voltar, vai para o ultimo
        currentSlide = totalSlides - 1; // currentSlide = 3 - 1 (num array começamos com 0, então a qntd - 1 vai leva ao ultimo)
    }
    updateMargin();
}
function goNext() {
    currentSlide++;
    if(currentSlide > (totalSlides-1)) { // se tiver no ultimo slide, volta para o primeiro
        currentSlide = 0;
    }
    updateMargin();
}

function updateMargin() {

    let sliderItemWidth = document.querySelector('.slider--item').clientWidth; // guarda a largura da tela de slide

    let newMargin = (currentSlide * sliderItemWidth); //guarda o valor de onde inicia o slide atual

    document.querySelector('.slider--width').style.marginLeft = // usa o valor do newMargin para atualizar o slide que deve aparecer na tela
        `-${newMargin}px`;
}

setInterval(goNext, 5000); //set'a um intervalo para trocar o slide automaticamente
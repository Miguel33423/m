/* =========================
   CARRUSEL
========================= */

const slides =
document.querySelectorAll('.slide');

const nextBtn =
document.querySelector('.next');

const prevBtn =
document.querySelector('.prev');

let currentSlide = 0;

function mostrarSlide(index){

    slides.forEach((slide) => {

        slide.classList.remove('active');
    });

    slides[index].classList.add('active');
}

nextBtn.addEventListener('click', () => {

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;
    }

    mostrarSlide(currentSlide);
});

prevBtn.addEventListener('click', () => {

    currentSlide--;

    if(currentSlide < 0){

        currentSlide = slides.length - 1;
    }

    mostrarSlide(currentSlide);
});

/* AUTO PLAY */

setInterval(() => {

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;
    }

    mostrarSlide(currentSlide);

}, 5000);

/* =========================
   CONTADOR DE TIEMPO
========================= */

function actualizarContador(){

    // FECHA INICIO
    const fechaInicio =
    new Date('2024-06-03T00:00:00');

    // FECHA ACTUAL
    const ahora =
    new Date();

    // DIFERENCIA TOTAL
    const diferencia =
    ahora - fechaInicio;

    // CALCULOS
    const dias =
    Math.floor(
        diferencia / (1000 * 60 * 60 * 24)
    );

    const horas =
    Math.floor(
        (
            diferencia %
            (1000 * 60 * 60 * 24)
        )
        / (1000 * 60 * 60)
    );

    const minutos =
    Math.floor(
        (
            diferencia %
            (1000 * 60 * 60)
        )
        / (1000 * 60)
    );

    const segundos =
    Math.floor(
        (
            diferencia %
            (1000 * 60)
        )
        / 1000
    );

    // MOSTRAR
    document.getElementById('dias').innerText =
    dias;

    document.getElementById('horas').innerText =
    horas;

    document.getElementById('minutos').innerText =
    minutos;

    document.getElementById('segundos').innerText =
    segundos;
}

/* EJECUTAR */

actualizarContador();

/* ACTUALIZAR CADA SEGUNDO */

setInterval(() => {

    actualizarContador();

}, 1000);

/* ========================================
MODAL
======================================== */

const modal =
document.getElementById('modal');

const openModal =
document.getElementById('openModal');

const closeModal =
document.getElementById('closeModal');

openModal.addEventListener('click', () => {

    modal.style.display = 'flex';
});

closeModal.addEventListener('click', () => {

    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {

    if(e.target === modal){

        modal.style.display = 'none';
    }
});

/* ========================================
MUSIC
======================================== */

const music =
document.getElementById('bgMusic');

const musicBtn =
document.getElementById('musicBtn');

let playing = false;

musicBtn.addEventListener('click', () => {

    if(!playing){

        music.play();

        musicBtn.innerHTML = '⏸️';

        playing = true;

    }else{

        music.pause();

        musicBtn.innerHTML = '🎵';

        playing = false;
    }
});

/* ========================================
CURSOR
======================================== */

const cursor =
document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {

    cursor.style.left =
    e.clientX + 'px';

    cursor.style.top =
    e.clientY + 'px';
});


/* ========================================
FRASES AUTOMATICAS
======================================== */

const frases = [

    "Eres una persona increíble ✨",

    "Qué bonito fue coincidir contigo 💙",

    "Tus mensajes alegran mis días 🐾",

    "Contigo todo se siente más bonito ☁️",

    "Tus ojitos tienen algo especial 💫",

    "Gracias por existir 🌌",

    "Siempre serás mi niña preciosa 💙",

    "Me haces sentir amado ✨",

    "Definitivamente eres mi lugar favorito 🐱",

    "Tus abrazos se sienten como hogar 🌙"

];

const fraseTexto =
document.getElementById('fraseTexto');

let fraseIndex = 0;

setInterval(() => {

    fraseIndex++;

    if(fraseIndex >= frases.length){

        fraseIndex = 0;
    }

    fraseTexto.style.opacity = 0;

    setTimeout(() => {

        fraseTexto.innerText =
        frases[fraseIndex];

        fraseTexto.style.opacity = 1;

    }, 400);

}, 4000);

/* ========================================
REVEAL
======================================== */

const hiddenElements =
document.querySelectorAll('section');

const observer =
new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.classList.add('show');
        }
    });

});

hiddenElements.forEach((el) => {

    el.classList.add('hidden');

    observer.observe(el);
});
const BotonOpen = document.querySelector("#open");
const BotonClose = document.querySelector("#close");
const Container1 = document.querySelector('.container-1')
const c1 = document.querySelector('.co1')
const c2 = document.querySelector('.co2')
const c3 = document.querySelector('.co3')
const c4 = document.querySelector('.co4')
const botonsi=document.querySelector('#boton-si');
const botonNo=document.querySelector('#boton-no');
const container=document.querySelector('#container');
const apenado=document.querySelector('#apenado');
const felicidad=document.querySelector('#felicidad');
const video=document.querySelector('#video');
const seguro=document.querySelector('#seguro');
const triste=document.querySelector('#triste');
const miAudio2 = new Audio('../img/tristtee.mp3');
const miAudio = new Audio('../img/audio.mp3');
const abrircarta=document.querySelector('#open-carta');
const modal=document.querySelector('#modal');



BotonOpen.addEventListener("click", () => {
    BotonOpen.style.pointerEvents = "auto";  // Reactiva clics
    BotonOpen.style.opacity = "1";  // Restaura la opacidad
    BotonOpen.style.cursor = "pointer";
    BotonClose.style.pointerEvents = "none";  // Bloquea clics
    BotonClose.style.opacity = "0.6";  // Hace que se vea deshabilitado
    BotonClose.style.cursor = "not-allowed";  // Cambia el cursor
    const coverElement = document.querySelector(".cover");
    const PaperElement = document.querySelector(".paper");

    coverElement.classList.add("open-cover");
    setTimeout(() => {
        Container1.style.position = 'relative';
        Container1.style.zIndex = 9;
        c1.classList.remove('desflotar1')
        c2.classList.remove('desflotar2')
        c3.classList.remove('desflotar3')
        c4.classList.remove('desflotar4')
        Flotar()
    }, 200);

    setTimeout(() => {
        coverElement.style.zIndex = -1;
        PaperElement.classList.add("open-paper");
    }, 1000);

    setTimeout(() => {
        BotonClose.style.pointerEvents = "auto";  // Reactiva clics
        BotonClose.style.opacity = "1";  // Restaura la opacidad
        BotonClose.style.cursor = "pointer";  // Vuelve al cursor normal
    }, 2500);
});

BotonClose.addEventListener("click", () => {
    BotonClose.style.pointerEvents = "auto";  // Reactiva clics
    BotonClose.style.opacity = "1";  // Restaura la opacidad
    BotonClose.style.cursor = "pointer";
    BotonOpen.style.pointerEvents = "none";  // Bloquea clics
    BotonOpen.style.opacity = "0.6";  // Hace que se vea deshabilitado
    BotonOpen.style.cursor = "not-allowed";  // Cambia el cursor
    const coverElement = document.querySelector(".cover");
    const PaperElement = document.querySelector(".paper");

    PaperElement.classList.remove("open-paper");

    c1.classList.add('desflotar1')
    c2.classList.add('desflotar2')
    c3.classList.add('desflotar3')
    c4.classList.add('desflotar4')

    setTimeout(() => {
        setTimeout(() => {
            coverElement.style.zIndex = 2;

            coverElement.classList.remove("open-cover");

        }, 500);
    }, 1500);

    setTimeout(() => {
        BotonOpen.style.pointerEvents = "auto";  // Reactiva clics
        BotonOpen.style.cursor = "pointer";  // Vuelve al cursor normal
        BotonOpen.style.opacity = "1";  // Restaura la opacidad
    }, 2500);


});

function Flotar() {

    c1.classList.add('flotar1')
    c2.classList.add('flotar2')
    c3.classList.add('flotar3')
    c4.classList.add('flotar4')
}

document.addEventListener("DOMContentLoaded", () => {
    const botonNo = document.querySelector("#boton-no");
    let angle = 0; // Ángulo inicial
    let moveCount = 0; // Contador de movimientos
    const maxMoves = 10; // Número máximo de movimientos
    let isLocked = false; // Bandera para bloquear el movimiento

    botonNo.addEventListener("mouseover", () => {
        if (isLocked) return; // Si está bloqueado, no se mueve más

        if (moveCount >= maxMoves) {
            // Regresa a la posición original y se desplaza 1rem a la izquierda
            botonNo.style.transform = "translate(-5rem, 0)";
            isLocked = true; // Bloquea el movimiento
            seguro.style.display='block';
            apenado.style.display='none'
            return;
        }

        const radius = 128; // 8rem ≈ 128px
        const randomFactor = Math.random() > 0.5 ? 1 : -1; // Cambia dirección aleatoriamente

        // Cambia el ángulo aleatoriamente entre -90° y 90° respecto al anterior
        angle += (Math.PI / 2) * randomFactor;

        // Calcula la nueva posición en base al ángulo
        const offsetX = Math.cos(angle) * radius;
        const offsetY = Math.sin(angle) * radius;

        // Aplica la transformación al botón
        botonNo.style.position = "absolute";
        botonNo.style.transform = `translate(${offsetX}px, ${offsetY}px)`;

        moveCount++; // Incrementa el contador de movimientos
    });
});



botonsi.addEventListener('click',()=>{
    miAudio2.pause()
    apenado.style.display='none';
    triste.style.display='none';
    seguro.style.display='none';
    container.style.display='block';
    felicidad.style.display='block'
    video.style.display='none'
    setTimeout(() => {
        felicidad.style.display='none'
        // Reproduce el audio
        miAudio.play();
        video.style.display='block'
        
    }, 2500);
    
})

botonNo.addEventListener('click',()=>{
    
    apenado.style.display='none';
    seguro.style.display='none';
    triste.style.display='block';
    container.style.display='none'
    // Reproduce el audio
    miAudio.pause();
    miAudio2.play();
    video.style.display='block'
})


abrircarta.addEventListener('click',()=>{
    modal.style.display='flex'
})


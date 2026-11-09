let isOpen = false;
let isPlaying = false;
const card = document.getElementById('mainCard');
const sceneContainer = document.getElementById('sceneContainer');
const music = document.getElementById('bgMusic');
const vinylDisc = document.getElementById('vinylDisc');
const playerStatus = document.getElementById('playerStatus');

function openEnvelope() {
    if (!isOpen) {
        card.classList.add('open');
        sceneContainer.classList.add('bloom-active'); // Dispara el crecimiento y florecimiento de los tulipanes
        isOpen = true;
        playMusic();
    }
}

function togglePlayMusic() {
    if (isPlaying) {
        music.pause();
        isPlaying = false;
        vinylDisc.classList.remove('rotating');
        playerStatus.textContent = "Música en pausa (Toca para reanudar)";
    } else {
        playMusic();
    }
}

function playMusic() {
    music.play().then(() => {
        isPlaying = true;
        vinylDisc.classList.add('rotating');
        playerStatus.textContent = "Con esfuerzo 🎶 (Reproduciendo)";
    }).catch(err => {
        console.log("Interacción bloqueada por políticas del navegador:", err);
    });
}
// CONFIGURACIÓN: (Año, Mes-1, Día) -> Enero es 0, Febrero es 1, etc.
const startDate = new Date(2026, 0, 21); 

function updateCountdown() {
    const now = new Date();
    const diff = now - startDate;

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    updateElement('days', d);
    updateElement('hours', h < 10 ? '0' + h : h);
    updateElement('minutes', m < 10 ? '0' + m : m);
    updateElement('seconds', s < 10 ? '0' + s : s);
}

function updateElement(id, value) {
    const el = document.getElementById(id);
    if (el.innerText !== value.toString()) {
        el.innerText = value;
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();

// --- EFECTO DE LLUVIA MÁGICA MEJORADO ---
const button = document.getElementById('loveButton');
const container = document.getElementById('love-rain-container');

// Mensajes variados
const messages = ['TE AMO', '💓', 'ERES MI TODO', '3 MESES', 'SIEMPRE JUNTOS', 'MI AMOR'];

button.addEventListener('click', () => {
    // Lanzar ráfagas de amor en cascada
    for (let i = 0; i < 40; i++) {
        setTimeout(() => {
            createLoveText();
        }, i * 60); // Retraso mayor para un flujo más suave
    }
});

function createLoveText() {
    const text = document.createElement('div');
    text.classList.add('te-amo');
    
    // Elige un mensaje aleatorio
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    text.innerText = randomMsg;
    
    // --- ESTILO DINÁMICO ---
    
    // Posición horizontal aleatoria (0-100% de la ventana)
    text.style.left = Math.random() * 100 + 'vw';
    
    // Posición vertical de nacimiento (justo arriba de la pantalla)
    text.style.top = '-100px'; 
    
    // Rotación aleatoria para que se vea más orgánico
    const randomRotation = (Math.random() - 0.5) * 60; // Hasta 30 grados a cada lado
    text.style.transform = `rotate(${randomRotation}deg)`;
    
    // Velocidad y desenfoque aleatorio
    const duration = Math.random() * 2 + 3; // Entre 3 y 5 segundos (caída más rápida)
    text.style.animationDuration = duration + 's';
    
    // Tamaño variable
    text.style.fontSize = (Math.random() * 1.2 + 1) + 'rem';
    
    // Sombras de color variable para brillo rosa/blanco
    text.style.textShadow = `0 0 10px ${Math.random() > 0.5 ? '#ff4d6d' : '#ffffff'}`;

    container.appendChild(text);

    // Limpieza automática del DOM al terminar la animación
    setTimeout(() => {
        text.remove();
    }, duration * 1000);
}
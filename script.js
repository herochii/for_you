const startDate = new Date(2025, 7, 29, 0, 0, 0); 

function updateCounter() {
    const today = new Date();
    const difference = today - startDate;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
}

setInterval(updateCounter, 1000);
updateCounter();

function createHeart() {
    const container = document.getElementById('hearts-container');
    if (!container) return;
    const heart = document.createElement('div');
    heart.classList.add('heart');
    const heartTypes = ['❤', '💖', '💕', '❣'];
    heart.innerText = heartTypes[Math.floor(Math.random() * heartTypes.length)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = Math.random() * 15 + 10 + 'px';
    const duration = Math.random() * 3 + 3;
    heart.style.animationDuration = duration + 's';
    container.appendChild(heart);
    setTimeout(() => { heart.remove(); }, duration * 1000);
}
setInterval(createHeart, 400);

// ================= ПРОВЕРКА РОМАНТИЧЕСКОГО ПАРОЛЯ =================
// ================= ПРОВЕРКА РОМАНТИЧЕСКОГО ПАРОЛЯ =================
function checkPassword() {
    const userInput = document.getElementById('secret-input').value.trim().toLowerCase();
    
    // НАСТРОЙКА: Ваше секретное слово-пароль
    const correctPassword = 'дамырак'; 

    if (userInput === correctPassword) {
        const gate = document.getElementById('password-gate');
        
        // 1. Плавно делаем заставку прозрачной
        gate.style.opacity = '0';
        
        // ИСПРАВЛЕНО: Полностью убираем блок заставки через полсекунды (после завершения анимации),
        // чтобы освободить экран для кликов по плееру и галерее
        setTimeout(() => {
            gate.style.setProperty('display', 'none', 'important');
        }, 500);
        
    } else {
        document.getElementById('error-msg').style.display = 'block';
    }
}

// Позволяет отправлять пароль по нажатию клавиши Enter
document.getElementById('secret-input')?.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        checkPassword();
    }
});

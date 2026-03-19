function lanzarSorpresa() {
    // 1. Ocultar el botón y mostrar el contenido
    document.getElementById('setup').classList.add('hidden');
    document.getElementById('content').classList.remove('hidden');

    // 2. Lanzar confeti (Efecto ráfaga)
    var duration = 3 * 1000;
    var end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#3498db', '#f1c40f', '#e74c3c']
        });
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#3498db', '#f1c40f', '#e74c3c']
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());

    // 3. Un gran disparo central
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });
}

function canviarMode(mode) {
    if (mode === 'clar') {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        localStorage.setItem('mode', 'clar'); // Guarda el mode clar
    } else {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        localStorage.setItem('mode', 'fosc'); // Guarda el mode fosc
    }
}

function mostrarMoro() {
    const title = document.getElementById('benvinguda').innerHTML = `Bones, ${document.getElementById('name').value}.`;
    return title;
}

window.onload = function() {
    // Carregar el mode guardat si existeix
    const modeGuardat = localStorage.getItem('mode');
    if (modeGuardat) {
        canviarMode(modeGuardat); // Aplica el mode guardat
    } else {
        canviarMode('clar'); // Si no hi ha mode guardat, utilitza el mode clar per defecte
    }
};

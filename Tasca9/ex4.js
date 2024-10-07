let tasques = ['Hola', 'Adeu'];

window.onload = function() {
    if (localStorage.getItem('tasques') == null) {
        tasques = JSON.parse(localStorage.getItem('tasques'));
    }
    mostrarTasques();
};

function afegirTasca() {
    let tasca = document.getElementById('tascaInput').value;
    if (tasca) {
        tasques.push(tasca);
        localStorage.setItem('tasques', JSON.stringify(tasques));
        document.getElementById('tascaInput').value = '';
        mostrarTasques();
    }
}

function mostrarTasques() {
    let llista = document.getElementById('llistaTasques');
    llista.innerHTML = '';
    tasques.forEach((tasca, index) => {
        let li = document.createElement('li');
        li.textContent = tasca;

        let botóEsborrar = document.createElement('button');
        botóEsborrar.textContent = 'Esborrar';
        botóEsborrar.onclick = () => esborrarTasca(index);
        li.appendChild(botóEsborrar);
        llista.appendChild(li);
    });
}

function esborrarTasca(index) {
    tasques.splice(index, 1);
    localStorage.setItem('tasques', JSON.stringify(tasques));
    mostrarTasques();
}

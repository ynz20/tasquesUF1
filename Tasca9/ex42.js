let tasques = ['Hola', 'Adeu'];


const mostrarTasques = () => {
    let llista = document.getElementById('llistaTasques');
    llista.innerHTML = "";

    tasques.forEach(tasca => {
        let li = document.createElement('li');
        li.textContent = tasca;
        llista.appendChild(li);
    })
}
window.onload = mostrarTasques;

function afegirTasca() {
    let tasca = document.getElementById('tascaInput').value;
    if (tasca){
        tasques.push(tasca);
        localStorage.setItem('tasques', JSON.stringify(tasques));
        document.getElementById('tascaInput').value="";
        mostrarTasques();
    }
}

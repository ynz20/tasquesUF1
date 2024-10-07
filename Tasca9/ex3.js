function guardarDada(camp) {
    let valor = document.getElementById(camp).value;
    sessionStorage.setItem(camp, valor);
}

window.onload = function() {
    let camps = document.getElementsByTagName('input');
    for (let i = 0; i < camps.length; i++) {
        let camp = camps[i];
        let valor = sessionStorage.getItem(camp.id);
        if (valor !== null) {
            camp.value = valor;
        }
    }
};
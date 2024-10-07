let contador = 0;

contador = localStorage.getItem('contador');

if (contador == 0) {
    contador = 1;
} else {
    parseInt(contador,10);
}

contador++;

let test = JSON.

localStorage.setItem('contador', contador);

console.log('Numero de visites', contador);
// document.write('Has visitat aquesta pàgina ' + contador + ' vegades.');
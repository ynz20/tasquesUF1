/**
 * Description
 * @param {any} color
 * @returns {any}
 */
function canviarColor(color) {
    let colorFons = color;
    document.body.style.backgroundColor = colorFons;
    localStorage.setItem('colorFons', color);
}
window.onload = function() {
    let colorGuardat = localStorage.getItem('colorFons');
    if (colorGuardat !== null) {
        document.body.style.backgroundColor = colorGuardat;
    }
};

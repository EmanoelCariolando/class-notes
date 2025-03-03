"use strict";
let lightOff = document.querySelector('img');
let text = document.querySelector('h1');
lightOff.addEventListener('click', () => {
    console.log('clicou');
    let srcEl = lightOff.getAttribute('src');
    if (srcEl === 'https://arduinolivre.files.wordpress.com/2013/08/lampada_desligada.png') {
        text.textContent = 'Lâmpada Ligada';
        lightOff.src = "https://arduinolivre.files.wordpress.com/2013/08/lampada_ligada.png";
    }
    else {
        text.textContent = 'Lâmpada Desligada';
        lightOff.src = 'https://arduinolivre.files.wordpress.com/2013/08/lampada_desligada.png';
    }
});

var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


var c = canvas.getContext('2d');

import {Player} from './player.js';


const playerArrary = [
    new Player(100, 100, 1, 1, 10),
    new Player(200, 100, 1, 1, 10)
];


//animation

function animate() {
    requestAnimationFrame(animate);

    c.clearRect(0, 0, innerWidth, innerHeight);


    for (const element of playerArrary) {
        element.update();
    }
}

animate();
/*

//keypressed event listener for input
window.addEventListener('keydown', this.check, false);

function check(e) {
    var code = e.keycode;
    switch(code) {
        case 76: alert("l"); break;
        default: alert(code); break;
    }
}
    */
var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


var c = canvas.getContext('2d');

import { Player } from './player.js';


const playerArrary = [
    new Player(100, 100, 1, 1, 10, c),
    new Player(200, 100, 1, 1, 10, c)
];


//animation

function animate() {
    requestAnimationFrame(animate);

    c.clearRect(0, 0, innerWidth, innerHeight);

    for (const element of playerArrary) {
        if (element.spin == true) {
        element.update();
        }
        element.draw();
    }


}

animate();


//keypressed event listener for input
/*
window.addEventListener('keydown', function(event) {
    switch (event.code) {
        case 76: playerArrary[0].update(); break;
        case 75: playerArrary[1].update(); break;
        default: break;
    }
  });
  */


  window.addEventListener('keydown', function() {
    playerArrary[0].setSpin(true);
  });

  window.addEventListener('keyup', function() {
    playerArrary[0].setSpin(false);
  });
import { Player } from './player.js';


var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


var c = canvas.getContext('2d');


class Player {

    constructor(x, y, dx, dy, radius, c) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.c = c;
    }

    draw() {
        this.c.beginPath();
        this.c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        this.c.fillStyle = 'blue';
        this.c.fill();

    }

    update() {
        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }
}



const playerArrary = [
    new Player(100, 100, 1, 1, 10, c),
    new Player(200, 100, 1, 1, 10, c)
];


//animation

function animate() {
    requestAnimationFrame(animate);

    c.clearRect(0, 0, innerWidth, innerHeight);


    for (const element of playerArrary) {
        element.update();
    }



    player.update();
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
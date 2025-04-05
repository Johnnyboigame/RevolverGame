export class Player {

    constructor(x, y, dx, dy, radius, c) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.c = c;
        this.spin = false;
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
    }

    setSpin(spin) {
        this.spin = spin;
    }
}

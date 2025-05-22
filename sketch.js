class Raquete {
    constructor() {
        this.x = 30;
        this.y = height / 2;
        this.w = 10;
        this.h = 60;
    }

    update() {
        this.y = mouseY;
        //limitar dentro da tela
        if (this.y < 0) {
            this.y = 0;
        }
        if (this.y > height - this.h) {
            this.y = height - this.h;
        }

    }
    desenha() {
        fill(color(255, 255, 255));
        rect(this.x, this.y, this.w, this.h);
    }
}


class Bola {
    constructor() {
        this.r = 25;
        this.reset();
    }

    reset() {
        this.x = width / 2;
        this.y = height / 2;
        this.vx = Math.random() * 10 - 5;
        this.vy = Math.random() * 10 - 5;
    }
    
    update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < this.r || this.x > width - this.r) {
            this.reset();
        }
        if (this.y < this.r || this.y > height - this.r) {
            this.vy *= -1;
        }
    }
    
    desenha() {
        fill(color(255, 0, 0))
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
    }
}

let bola;
let jogador;

function setup() {
    createCanvas(800, 400);
    bola = new Bola();
    jogador = new Raquete();
}

function draw() {
    background(color(0, 0, 0));
    bola.update();
    bola.desenha();
    jogador.update();
    jogador.desenha();
}
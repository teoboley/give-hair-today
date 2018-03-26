let system;

function setup() {
  createCanvas(1200, 800);
  system = new ParticleSystem(createVector(width + 150, 100));
}

function draw() {
  background(0);
  system.addParticle();
  system.run();
}

class Particle {
  constructor(position) {
    this.acceleration = createVector(-0.05, 0.015);
    this.velocity = createVector(random(-1, 1), random(-1.25, 1.25));
    this.position = position.copy();
    this.lifespan = 450.0;
  }

  run() {
    this.update();
    this.display();
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 2;
  }

  display() {
    noFill();
    stroke(200, 50, 50, this.lifespan);
    strokeWeight(2);
    arc(this.position.x, this.position.y, 60, 60, HALF_PI, PI);
  }

  isDead() {
    if (this.lifespan < 0) {
      return true;
    } else {
      return false;
    }
  }
}

class ParticleSystem {
  constructor(position) {
    this.origin = position.copy();
    this.particles = [];
  }

  addParticle() {
    this.particles.push(new Particle(this.origin));
  }

  run() {
    for (var i = this.particles.length - 1; i >= 0; i--) {
      var p = this.particles[i];
      p.run();
      if (p.isDead()) {
        this.particles.splice(i, 1);
      }
    }
  }
}
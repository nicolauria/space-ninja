// for randomly selecting from colors
Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)]
}

function delay(t, v) {
   return new Promise(function(resolve) {
       // setTimeout(resolve.bind(null, v), t)
       setTimeout(resolve, t)
   });
}

let explosions = [];

function shapeExplosion(f) {
  let numExplosions = random(15, 20);
  for (let i = 0; i < numExplosions; i++) {
    explosions.push(
      new Explosion(f.x, f.y, random(10, 20), f.c, f.speed)
    )
  }
}
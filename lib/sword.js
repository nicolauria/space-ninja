function Sword(c) {
  this.swipes = [];
  this.swipeSizes = [];

  this.c = c;
}

Sword.prototype.update = function() {
  if (this.swipes.length > 20) {
    this.swipes.splice(0, 1);
    this.swipes.splice(0, 1);
  } else if (this.swipes.length > 0) {
    this.swipes.splice(0, 1);
  }
}

Sword.prototype.checkForSlice = function(f) {
  if (f.sliced || this.swipes.length < 2) return false;

  var l = this.swipes.length

  let d1 = dist(this.swipes[l - 1].x, this.swipes[l - 1].y, f.x, f.y)
  let d2 = dist(this.swipes[l - 2].x, this.swipes[l - 2].y, f.x, f.y)

  f.sliced = (d1 < (f.s / 2) || d2 < (f.s / 2));
  if (f.sliced) shapeExplosion(f);
  
  return (d1 < (f.s / 2) || d2 < (f.s / 2));
}

Sword.prototype.draw = function() {
  let len = this.swipes.length

  for (let i = 0; i < len; i++) {
    var s = map(i, 0, len, 2, 20);

    noStroke();
    fill(this.c);
    ellipse(this.swipes[i].x, this.swipes[i].y, s);
  }

  // fill(255);
  // textSize(35);
  // if (l < 1 || p < 1 && c < 1) return;
  // text("+" + p + "+" + c + " combo", this.swipes[l - 1].x, this.swipes[l - 1].y - 20);
}

Sword.prototype.swing = function(x, y) {
  this.swipes.push(createVector(x, y))
}

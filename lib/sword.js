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
  if (f.sliced || this.swipes.length < 2) return;

  var l = this.swipes.length

  let d1 = dist(this.swipes[l - 1].x, this.swipes[l - 1].y, f.x, f.y)
  let d2 = dist(this.swipes[l - 2].x, this.swipes[l - 2].y, f.x, f.y)
  // let d3 = dist(this.swipes[l - 1].x, this.swipes[l - 1].y,
  //               this.swipes[l - 2].x, this.swipes[l - 2].y)

  // f.sliced = (d1 < d3 && d2 < d3);
  f.sliced = (d1 < (f.s / 2) || d2 < (f.s / 2));
}

Sword.prototype.draw = function() {
  for (let i = 0; i < this.swipes.length; i++) {
    var s = map(i, 0, this.swipes.length, 2, 20);

    noStroke();
    fill(this.c);
    ellipse(this.swipes[i].x, this.swipes[i].y, s)
  }
}

Sword.prototype.swing = function(x, y) {
  this.swipes.push(createVector(x, y))
}

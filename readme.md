# Space Ninja

## Background and Overview
Space Ninja is based off the popular game Fruit Ninja. It is a single player game where the inidivual attempts to move his cursor and target objects as they are displayed on the screen. [https://nicolauria.github.io/space-ninja/](https://nicolauria.github.io/space-ninja/)

<kbd>![Alt text](images/space-chop-homepage.png?s=50)</kbd>
<kbd>![Alt text](images/space-chop-game-view.png?s=50)</kbd>
<kbd>![Alt text](images/space-chop-final-score.png?s=50)</kbd>

## Layout
The app consists of a single screen with the following features:
* new game option for beginning a round of Space Ninja
* points counter and lives counter
* cursor for slicing shapes with trailing effect for visuals

## Architecture and Technologies
* Javascript ES6 and the P5 Library for the app structure and game logic
* HTML Canvas for game visuals
* CSS3 for additional styling and game effects

## Specific Features

``Fruit.prototype.update = function() {
  this.x += this.xV;
  this.y += this.yV;

  this.xV *= 1;
  // add gravity until yV becomes positive (causes shape to move down)
  this.yV += GRAVITY;

  if (this.y > height) {
    this.visible = false;
  }
};
``

## Implementation Timeline
**Day 1:** Create basic entry file and skeleton of other classes<br />
**Day 2:** Add canvas to app and display shapes<br />
**Day 3:** Add functionality for sword swipe and shape destruction<br />
**Day 4:** Style canvas, shapes and game controls<br />

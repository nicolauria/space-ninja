// for randomly selecting from colors
Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)]
}

function timeout(ms) {
  return () => new Promise(resolve => setTimeout(resolve, ms));
}

function delay(t, v) {
   return new Promise(function(resolve) {
       setTimeout(resolve.bind(null, v), t)
   });
}

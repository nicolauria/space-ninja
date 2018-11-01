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

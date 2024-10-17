var t0 = performance.now();
var counter = 100000;

var bc__fn = (a) => 10 + a; // slower

while (counter--) {
  bc__fn(counter);
}

var t1 = performance.now();

console.log(t1 - t0);

var bc__main = async () => {
  var p1 = await Promise.resolve("Hello ");
  var p2 = await Promise.resolve("World");
  console.log(p1 + p2);
};

var start = performance.now();
bc__main();
var end = performance.now();
console.log(`Execution time: ${end - start} ms`);

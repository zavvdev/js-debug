var bc__main = () => {
  Promise.all([Promise.resolve("Hello "), Promise.resolve("World")]).then(
    ([p1, p2]) => {
      console.log(p1 + p2);
    },
  );
};

var start = performance.now();
bc__main();
var end = performance.now();
console.log(`Execution time: ${end - start} ms`);

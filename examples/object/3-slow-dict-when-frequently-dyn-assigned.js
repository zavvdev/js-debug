function bc__main() {
  var obj = {
    name: "John",
    age: 42,
  };
  
  for (let i = 0; i < 100; i++) {
    obj[`prop-${i}`] = i;
  }

  %DebugPrint(obj);
}

bc__main();

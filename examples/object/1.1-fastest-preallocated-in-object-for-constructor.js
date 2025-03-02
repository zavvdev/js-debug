function bc__main() {
  function construct(name, age) {
    this.name = name;
    this.age = age;
  }

  var obj = new construct("John", 30);

  %DebugPrint(obj);
}

bc__main();

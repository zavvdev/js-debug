function bc__main() {
  var a = 1_000_000_000_000_000;
  %DebugPrint(a);

  var bc__consumer = (x) => {
    %DebugPrint(x);
  }

  bc__consumer(a);
}

bc__main();

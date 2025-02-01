% NeverOptimizeFunction(bc__main);

function bc__main() {
  % NeverOptimizeFunction(bc__test);

  var i_1 = 1;
  var i_2 = 2;
  var i_3 = 3;
  var s = 0;

  function bc__test() {
    for (let i = 200000000; i != 0; i--)
      s += i_1 + i_2 + i_3;
    return s;
  }

  bc__test();
}

bc__main();

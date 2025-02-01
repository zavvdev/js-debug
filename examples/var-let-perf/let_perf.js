% NeverOptimizeFunction(bc__main);

function bc__main() {
  % NeverOptimizeFunction(bc__test);

  let i_1 = 1;
  let i_2 = 2;
  let i_3 = 3;
  let s = 0;

  function bc__test() {
    for (let i = 200000000; i != 0; i--)
      s += i_1 + i_2 + i_3;
    return s;
  }

  bc__test();
}

bc__main();

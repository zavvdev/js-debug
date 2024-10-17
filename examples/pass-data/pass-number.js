var do_number = (n, pow) => {
  var result = n;
  for (var i = 0; i < pow; i++) {
    result *= n;
  }
  return result;
};

var bc__create = () => {
  var foo = 123;
  return foo;
};

var bc__copy = () => {
  var foo = 123;
  var bar = foo;
  return bar;
};

var bc__mutate = () => {
  var foo = 123;
  var bar = foo;
  var baz = bar + 42;
  return baz;
};

var bc__func = () => {
  var foo = 123;
  return do_number(foo, 2);
};

bc__create();
bc__copy();
bc__mutate();
bc__func();

var do_string = (str, idx) => {
  var c = str;
  var d = c + "!"
  var e = d.slice(0, idx);
  return e;
};

// ==============

var bc__create = () => {
  var foo = "this is the string";
  return foo;
};

var bc__copy = () => {
  var foo = "this is the string";
  var baz = foo;
  return baz;
};

var bc__mutate = () => {
  var foo = "this is the string";
  var baz = foo;
  var bar = baz.slice(0, 4);
  return bar;
};

var bc__func = () => {
  var foo = "this is the string";
  return do_string(foo, 4);
};

// ==============

bc__create();
bc__copy();
bc__mutate();
bc__func();


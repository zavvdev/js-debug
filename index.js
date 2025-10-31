// Example that shows that strings (as well as any other data type) are not passed by
// value in V8's internal representation. Instead, they are all passed by reference.

var bc__main = () => {
  var k = "hello";
    
  % DebugPrint(k); // prints the address of the string "hello"

  var bc__fn = (x) => {
    % DebugPrint(x); // prints the same address as above
    var y = " world";
    return x + y;
  }

  bc__fn(k);
};

bc__main();

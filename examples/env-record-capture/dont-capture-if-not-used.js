var getClos = () => {
  var bigArr = new Array(1000);
  var x = 1;

  // bigArr won't be included into returned function
  // outer environment because it's not used there.
  // Specification says that all identifiers should
  // be captured but this is completely up to JS
  // runtime engine to decide what to do with unused
  // identifiers. V8 does not capture them.

  // We may want to do something like this in order
  // to make sure that bigArr won't be captured
  // and memory is freed.
  // bigArr = null;

  return () => {
    console.log(x);
  }
}

var clos = getClos();

var getClos = () => {
  var bigArr = new Array(1000);
  var x = 1;

  return () => {
    console.log(x, bigArr[0]);
  }
}

var clos = getClos();

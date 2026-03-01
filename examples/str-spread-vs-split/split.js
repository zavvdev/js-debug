var targetString = "asjdkhasjkhdjkhjhj21h4((USA&d678ashdjkasbNBNASDbasduahd";

var bc__main = () => {
  const res = targetString.split("");
  return res;
};

% NeverOptimizeFunction(bc__main);

bc__main();

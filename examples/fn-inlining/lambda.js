var mc__PORT = () => "3000";

% PrepareFunctionForOptimization(mc__PORT);
mc__PORT();
% OptimizeFunctionOnNextCall(mc__PORT);

function mc__main() {
  var data = "port is: " + mc__PORT();
  return data;
}

% PrepareFunctionForOptimization(mc__main);
mc__main();
% OptimizeFunctionOnNextCall(mc__main);
mc__main();

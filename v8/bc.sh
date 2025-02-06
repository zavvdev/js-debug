gtime -f "Mem: %MKb\nTime: %e" ~/.jsvu/engines/v8/v8 --print-bytecode --print-bytecode-filter="bc__*" --trace-opt --trace-deopt-verbose --allow-natives-syntax $1

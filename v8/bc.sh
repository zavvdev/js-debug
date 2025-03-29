# debug v8
# gtime -f "Mem: %MKb\nTime: %e" ~/.jsvu/engines/v8-debug/v8-debug --print-code --code-comments --print-bytecode --print-bytecode-filter="bc__*" --print-opt-source --print-opt --trace-opt --trace-baseline --trace-opt-stats --trace-elements-transitions --trace-deopt-verbose --allow-natives-syntax $1

# raw v8
# gtime -f "Mem: %MKb\nTime: %e" ~/.jsvu/engines/v8/v8 --print-bytecode --print-bytecode-filter="bc__*" --print-opt-source --print-opt --trace-opt --trace-baseline --trace-opt-stats --trace-opt-verbose --trace-deopt-verbose --allow-natives-syntax $1

# debug shell
gtime -f "Mem: %MKb\nTime: %e" ~/.jsvu/engines/v8-debug/v8-debug --print-bytecode --print-bytecode-filter="bc__*" --allow-natives-syntax --shell $1

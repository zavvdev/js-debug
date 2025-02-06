# JavaScript Debug Environment

### Prerequisites

1. Install `jsvu`. I use V8 for debug but you can use whatever engine you need. Check [documentation](https://github.com/GoogleChromeLabs/jsvu) for more info.

2. If you on Mac then install `gnu-time` utility: `brew install gnu-time`.
   If you on Linux then go to `v8.sh` and replace `gtime` with `/usr/bin/time`

### How to use

Run `sh v8/bc.sh file.js` to execute file.js with V8 engine using flags listed in _v8/bc.sh_. This will generate a bytecode for each function that prefixed with bc\_\_\*. Natives syntax allowed.

Run `sh v8/mc.sh file.js` to execute file.js with V8 engine using flags listed in _v8/mc.sh_. This will generate an optimized machine code for each function that prefixed with bc\_\_\* and if they were optimized either manually or my optimization compiler. Natives syntax allowed.

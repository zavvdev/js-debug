# JavaScript Debug Environment

### Prerequisites

1. Install `jsvu`. I use V8 for debug but you can use whatever engine you need. Check [documentation](https://github.com/GoogleChromeLabs/jsvu) for more info.

2. If you on Mac then install `gnu-time` utility: `brew install gnu-time`.
If you on Linux then go to `v8.sh` and replace `gtime` with `/usr/bin/time`

### How to use

Run `sh v8.sh file.js` to execute file.js with V8 engine using flags listed in _v8.sh_. This will generate a bytecode for each function that prefixed with _bc__*_. Natives syntax allowed.

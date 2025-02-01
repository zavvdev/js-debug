# Var vs. Let/Const performance overview (V8 runtime)

_Apple M1 Pro_, _16GM RAM_, _V8 version 13.2.16_

## Introduction

In modern JavaScript community there is a "de facto" standard to use **let** and **const** instead of **var** for defining identifiers. Someone maybe even teach you that **var** is kind of "deprecated" and you never should use it. This is not true. If you open [EcmaScript Specification](https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#sec-variable-statement) and read about "Variable Statement" you won't find anything that can tell you about any deprecations.

If you want to write fast and performant code - you need to understand how **var** works. There is no answer for "What is better to use?". Each variant for identifier declaration has its pros and cons.

## Specification overview

As we know from [specification](https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#sec-let-and-const-declarations), **let** and **const** identifier declarations are bound to execution context's lexical environment and they cannot be accessed in any way until their lexical binding is evaluated. For **var** we have a scope that is bound to the function (execution context).

In other words, **let** and **const** give you an ability to "bound" your identifier to lexical environment (block scope) and also apply some other rules for how they can or cannot be accessed or re-bound to a new value. You can think of **var** like it's an ancestor of **let** and **const**. Without **var** they wouldn't even exist, so even theoretically you can't deprecate **var** for the whole language.

Since we know that **let** and **const** are just like **var** but with additional rules, then it's obvious that it comes with cost. And because JavaScript is a scripting interpreted language, those rules are predominantly applied during runtime.

## Execution stages

Before we talk about byte-code, there is one more important thing that can tell us that **let** and **const** are slower that **var**. JavaScript code execution process has several stages. One of them is _Static Semantics_ - stage before code evaluation when runtime can apply some rules ahead of time to your code. Another one is _Runtime Semantics_ which is related to applying sematic rules during code evaluation. And if we take a look again on [Variable Statement](https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#sec-variable-statement) we can notice that there is only _Runtime Semantics_ section for **var** but for [let nad const](https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#sec-let-and-const-declarations) there is both _Runtime Semantics_ and _Static Semantics: Early Errors_ rules which describe semantic rules that should be applied ahead of time. We can check them using browser:

```
function main() {
    var A = 1;
    return A;
    var A = 2;
}
```

If you paste this code to your browser console you won't get any errors.

But if you use this code:

```
function main() {
    const A = 1;
    return A;
    const A = 2; // <-- Uncaught SyntaxError: Identifier 'A' has already been declared
}
```

You can see that error has occured even:

- function hasn't been called

- second identifier declaration code is not reachable

This is because _Static Semantics_ stage which analyzes all your code even if it will never be executed. So just using **var** in this case you omit those kind of checks.

## Bytecode overview 

We saw what it means _Static Semantics_ for **let/const** code. What about _Runtime Semantics_?

Please take a look at the `../identifiers/var.js` and `../identifiers/const.js` files. There is a simple code where we have a top level identifier **AGE** and a function that uses that identifier. In the first case **AGE** is declared with **var** and in the second - with **const**. To see the difference in bytecode take a look at `../identifiers/debug__var.txt` and `../identifiers/debug__const.txt`.

If you are not familiar with V8's Ignition bytecode, take a look at a brief explanation [here](https://medium.com/dailyjs/understanding-v8s-bytecode-317d46c94775) and [here](https://www.alibabacloud.com/blog/javascript-bytecode-v8-ignition-instructions_599188).

We can see that in case of bytecode for **const** case there is one more instruction: `ThrowReferenceErrorIfHole`. This instruction is used for applying those **let/const** runtime semantics that we've discussed earlier.

And now let's move our global **AGE** inside the function. See `../identifiers/const_local.js` and `../identifiers/var_local.js`. And the bytecode for these files: `../identifiers/debug__const_local.txt` and `../identifiers/debug__var_local.txt`. In this case bytecode is literally identical since we didn't violate **let/const** semantic rules.

So now we've seen what cost **let/const** brings. There is literrally one additional operation per identifier for interpreter during runtime code evaluation. 

## Performance comparison

Take a look at `./var_perf.js` and `./let_perf.js` files. I've used here more complex example with expensive loop operation to simulate some long time consuming task. In both cases **i_1**, **i_2**, **i_3** and **s** identifiers are declared outside of the **bc__test** function which is pretty much replicate the common use case when you define some global identifiers using **const**.

To be fair with our tests I disabled optimizations for **bc__main** and **bc__test** functions with `% NeverOptimizeFunction` function. This function is part of [V8's native syntax](https://github.com/v8/v8/blob/941b945b/src/runtime/runtime.h). 

Few words about optimizations: during code execution V8 collects statistics about your code and if it decides that some function can be optimized - it will generage fast machine code for it. You can sometimes predict when function will be optimized if you knowledgeable enough with V8's TurboFan or Maglev work specifics, but for everyday use case scenario you don't write code for optimizer specifically, so more likely your code won't be optimized in 70-80% of chances.

Now open `./debug__let_perf.txt` and `./debug__var_perf.txt` files with generated bytecode + time metrics. You won't find any `ThrowReferenceErrorIfHole` instructions for **var** bytecode but for **let** there is 5 instructions. And what about time?

**For let:** ~2.16s

**For var:** ~1.68s

So as we can see, there is ~20% of time were taken by those additional runtime semantic instructions. And this is because we used **let/const**.

## Conclusion

You can say that it's not significant, but think about it again that even in this simple test **let** was slower by ~20% against **var** in the scenario that is very similar to the real world one. And imagine that amount of code that you write every day and what would've happened if you just replace _some_ consts with var?

Yes, there is some cases where _const_ or _let_ can be as much fast as _var_. It can be either as fast as _var_ or slower because of those additional rules that apply to it, plus there is also might be optimizations from compiler during runtime.

Is this a reason to not use _let_ or _const_? - No. Just do not think of _var_ as it's deprecated, old or some legacy feature. As we saw, _var_ is a pefect solution if you want to boost your code speed, so you need to consider when to use which one.

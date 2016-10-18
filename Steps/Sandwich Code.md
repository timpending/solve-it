# "Sandwich" Code

## Objectives

By the end of this article you should be able to:

- Identify sensible defaults for each primitive type
- Identify which parts of a function are boilerplate and which require thought
- Write the boilerplate code from memory

## Rationale

Whether you are writing on your own, pairing or at a whiteboard interview you can categorize the new lines of code you write into two categories:  **boilerplate code**, and **interesting code**.  The boilerplate code includes things like function/method/class definitions, opening and closing brackets, indentation etc...  Learning to separate boilerplate code from interesting code has two important benefits:

First, it helps you decrease your syntax errors.  If you make sure that you write the boilerplate code outside-in then you decrease the chances that you'll have syntax errors because you'll have already matched up brackets, indented things correctly.

Second, if you can fill in the boilerplate parts of your code _automatically_ then you free your brain up to focus on the upcoming _interesting_ code that you're about to write.

## How it works

This relates to Step #3 in Polya's method:

1. Understand the problem
1. Devise a plan
1. **Carry out the plan**
1. Look back

Whenever you are faced with a problem one of the first steps is likely to identify the [inputs and outputs](./Inputs and Outputs.md).  Next you'll probably figure out a decent name for your classes/methods/functions.  With this information, you have enough to write the following boilerplate code:

- The class/method/function definition with inputs
- Initializing the return value
- Returning the return value

Let's say you are tasked with writing a function that "takes an array of strings and returns a single string with the items separated by a space".

You already know a few things:

- Your function will have one parameter
- You have enough info to give your function a name

So right off the bat, without thinking about it, you can just write:

**Step 1: Function Definition Sandwich**

```js
function join(input) {
}
```

You also know that

- It will return something (as opposed to mutating something)
- The thing it returns will be of the type String

So you can add the following code:

**Step 2: Result Sandwich**

```js
function join(input) {
  let result = "";
  // your code goes here
  return result;
}
```

Notice how this makes a "sandwich" - you are writing the code from the outside-in.  First the function definition, then the `result` initialization and `return`.  This might not work 100% of the time, but it's a great start.

You also know you'll need to do something with input, so you'll probably have another "sandwich" (a `for` loop) that looks like this:

**Step 3: Input Iteration Sandwich**

```js
function join(input) {
  let result = "";
  for (var i = 0; i < input.length; i++) {
    // here you'll likely do something with input[i] AND result
  }
  return result;
}
```

## Review The Formula

Without much thinking, you can follow this pattern for many kinds of accumulator problems:

1. Add a "sandwich" of the function definition
  - Identify inputs / outputs
  - Use problem description to come up with a name for the function
  - Use inputs to determine which parameters to add
  - Be sure to close the curly braces / parens correctly
1. Add a "sandwich" for a result variable
  - Declare / initialize a result
  - Use the _type_ of the output to determine the default value
  - Return the result
1. Add a "sandwich" for working with the input
  - Iterate over the input somehow (be sure to close the quotes / parens before adding stuff in the middle)
  - Note that you're likely to do something with each value in the iteration, as well as `result`

## Sensible Defaults

A common pattern is to declare and accumulate into your `result` variable.  When you do this, it's often helpful to have a default value.  As you are thinking about boilerplate code, keep in mind the following default values for some of the builtin types in JavaScript:

| Output Type | Default Value     |
| :---------- | :-------------    |
| string      | `""`              |
| number      | `0`               |
| array       | `[]`              |
| object      | `{}`              |
| boolean     | `true` or `false` |

## Caveats

Will this approach always work?  No.

Here are some places where your solution won't look identical to this:

- Not all inputs need to be iterated over
- Sometimes you don't actually need a `result` _variable_ (especially when you are programming in a functional style and just return a chained `map`, `filter`, `reduce` etc...)

# Getting the most out of warmups

## Objectives

By the end of this lesson you should be able to:

- Use Polya's problem-solving techniques to solve warmups
- Diagnose problems with your problem-solving process and take appropriate actions to improve

## Recall why you are here

Recall that you are here to **learn how to solve problems well enough to get and keep a job as a software developer**.  Also recall that software teams generally look for developers who can

- solve problems effectively
- learn new things quickly
- get things done

Here at Galvanize it can be easy to lose sight of that when you are awash in debugging and syntax errors and memorizing URL formats, so we have regular daily warmups to give you an opportunity to practice these problem-solving techniques.

## Applying Polya's Techniques to Warmups

Your should strive to use the following steps in every warmup:

1. Understand the Problem
  1. Identify Inputs and Outputs
  1. Ask "What if" Questions
1. Devise a Plan
  1. Come up with more than one plan
  1. Choose a solution based on:
    - Your Ability
    - Code's Performance
    - Code Maintainability / Readability
1. Carry Out the Plan
  1. Quickly dispense with boilerplate code
  1. Write code 'outside in' ("sandwich code")
1. Look Back
  1. Ensure the correctness of your solution (and keep working until it's correct)
  1. Once it's correct, decide where you want to go:
    - You could refactor https://github.com/gSchool/javascript-curriculum/blob/master/Refactoring.md
    - You could burn-and-build (delete and rewrite)
    - You could write a real test suite

That... looks like a lot.  But it turns out that you can run through those steps in just a few minutes.

## Working Through a Sample Problem

Imagine you come into class and the morning warmup is the following problem:

> Find the total years of experience on a development team.  Your function should take a list of people with their job titles and years of experience, and return the cumulative age of all of the developers.  Sample input might look like this:

```js
[
  {name: 'Sue', years: 7, title: 'developer'},
  {name: 'Will', years: 2, title: 'manager'},
]
```

You might be tempted to just dive in and start writing the solution.  Especially early on in your time at Galvanize you'll feel a rush to get to the "right answer", but these warmups are designed to allow you to practice the _process_ of solving problems.

### Step 1 - Understand the Problem

#### Part 1 - Identify inputs and outputs

To understand the problem, write a few sample inputs and outputs.  To start:

- Write an inputs as a variables
- Call your imaginary function and pass the variables in
- Log out both the result, as well as some indication of what you expected to see

For this sample problem , start with something like this:

```js
const allDevelopers = [
  {name: 'Sue', years: 7, title: 'developer'},
  {name: 'Rachel', years: 4, title: 'developer'},
  {name: 'Flynn', years: 3, title: 'developer'},
]
console.log("allDevelopers should be 14 and is", combinedExperience(allDevelopers));
```

> NOTE: `combinedExperience` is not a real function yet.  That's OK - you are just following the "Understand the problem" step, specifically defining inputs and outputs.  You'll actually _write_ the function in Step 3.

In this step, add at least 2 inputs that cover common cases.  In our sample you might add a second input that tests that the sum excludes managers:

```js
const someDevelopers = [
  {name: 'Rachel', years: 4, title: 'developer'},
  {name: 'Flynn', years: 3, title: 'developer'},
  {name: 'Will', years: 2, title: 'manager'},
  {name: 'Sue', years: 7, title: 'manager'},
]
console.log("someDevelopers should be 7 and is", combinedExperience(someDevelopers));
```

#### Step 2: Ask "What if" questions

You've identified two obvious inputs and outputs.  Your next step is to ask some "what if" questions to figure out what some edge cases might be.  For this step, you might come up with the following questions:

- "What if the input includes only managers?"
- "What if the input is an empty array?"

Then you figure out what to do in those cases.  For this example, just returning 0 seems reasonable.

```js
const allManagers = [
  {name: 'Will', years: 2, title: 'manager'},
  {name: 'Sue', years: 7, title: 'manager'},
]
console.log("allManagers should be 0 and is", combinedExperience(allManagers));

const empty = []
console.log("empty should be 0 and is", combinedExperience(empty));
```

Awesome - now you have 4 sample inputs that handle both common cases and some edge cases and you have around 20 lines of code written!  That's important because you've broken any potential writer's block you may have experienced.

### Step 2: Devise a solution

Recall that Devising a Solution involves 2 steps: Coming up with a few potential solutions, and then choosing one based on 3 criteria:

- Your ability to execute it
- Performance
- Maintainability

In a warmup, write these out in code comments, like so:

```js
// I could write a loop that filters out the managers, and then another loop to add up the years
// I could write this in a single for loop
// I could use `reduce` to try to do this in a really compact way
```

So you have 3 ideas - how do they fare on your ability to execute?  Maybe you are not comfortable with reduce yet, so you remove that.  Then maybe you decide that the first one would be slower than the second, so you are left with "write a single loop".  Add that as a code comment:

```js
// start with single loop because two loops seems less performant, and I don't know reduce
```

### Step 3: Carry out the solution

<p style="text-align: center;">
<img src="https://s-media-cache-ak0.pinimg.com/564x/75/4a/1d/754a1def902e9d60cbd631184106d883.jpg" />
</p>

It's easy to think that the "carry out" step requires you to "know how to code", and you'd be right.  But you'll see in this section that you can probably write 60% of the solution quickly using a repeatable process.

Recall that when carrying out the solution you want to

- dispense with boilerplate code
- write code outside in (aka "sandwich code")

To see more about writing "Sandwich" code see [the article on sandwich code](./Steps/Sandwich Code.md).  In this case the basic steps would be:

**Write the boilerplate**

When you wrote inputs and outputs, pay attention to this line:

```js
console.log("allManagers should be 0 and is", combinedExperience(allManagers));
```

From here you can infer the following things:

- The function's name is `combinedExperience`
- It has one parameter
- It returns an integer

Right from that, it's reasonable to assume that your code might start off looking like this:

```js
function combinedExperience(teamMembers) {
  let result = 0

  // your code goes here

  return result
}
```

Notice how you can write functions like this _outside in_.  You write the _shell_ first, then fill in the middle bits.  
The silly name for that is "sandwich" code - where you start with the bread, then fill in the yummy parts.

**Write Sandwich Code**

In this particular example, you'll need to iterate over `teamMembers`.  So write the whole loop before filling it in:

```js
function combinedExperience(teamMembers) {
  let result = 0

  for (var i = 0; i < teamMembers.length; i++) {

    //

  }

  return result
}
```

Now you have 6 lines of code and you are very close to the solution.  While there aren't good general rules for how to proceed, you can still make a little more progress before having to do the hard work of finishing the algorithm.

For example, inside loops you almost always need to do something with each element in the array.  In this case `teamMembers[i]`.  Since this looks like an accumulator pattern, you also know that inside the loop you'll likely alter your accumulator - which in this case is `result`.  So without too much thought you can write:

```js
function combinedExperience(teamMembers) {
  let result = 0

  for (var i = 0; i < teamMembers.length; i++) {

    // do something with teamMembers[i]
    // do something with result

  }

  return result
}
```

Now you have a few lines of interesting code to write that you'll really need to think about.  Your solution might end up looking like this:

```js
function combinedExperience(teamMembers) {
  let result = 0
  for (var i = 0; i < teamMembers.length; i++) {
    if (teamMembers[i].role === 'developer') result += teamMembers[i].years
  }
  return result
}
```

### Step 4: Look Back

What does it really mean to "Look Back" for something as small as a warmup?  It turns out there's a TON!  This can actually be the best part of your day - and have the biggest impact on your progress learning to be a developer.

The first, most obvious part, is to check if you **got the correct answer**.  If not, go back and update your code to meet the requirements.

That's why writing your outputs in this format is so important:

```js
console.log("allManagers should be 0 and is", combinedExperience(allManagers));
```

When you run that code, you'll see both the _expected_ and the _actual_ output next to each other in the output.

> NOTE: if you are thinking "that's just like writing a test, but less awesome" you'd be right!  You can run through Polya's steps perfectly using TDD.

---

Once it's correct, the _real_ work starts.  Just because you got the correct _answer_ doesn't mean that you are _done_.

In order to determine what to do next, reflect back on what you just did.  What steps were the hardest?  What did you struggle with?  Based on that, choose what to do next.  Here are some options:

#### Burn and Build

Try burn-and-build when:

- You have lots of typos
  - focus on typing slowly and correctly
- You had lots of syntax errors
  - focus on writing sandwich code / closing curlies before writing code inside the block, indenting code well etc...
- You struggled with the concept
  - delete and redo to immediately reinforce the solution (otherwise you will have spent _most_ of your time making mistakes, and you won't be encoding success)
- You had to look things up
  - burn-and-build will help cement your memory of the things you had to look up

There are lots of other reasons to burn-and-build, those are just some of them.

#### Refactor

Try refactoring when:

- You finish early, but you had few typos / syntax errors
- You struggled with "Step 2: Come up with multiple solutions"
  - refactoring will give you ideas about what some options are

See the refactoring guide here: https://github.com/gSchool/javascript-curriculum/blob/master/Refactoring.md

NOTE: the biggest refactoring is one where you write the solution in a different language.

#### Write Tests

Try writing tests when:

- The inputs / outputs portion feels natural and smooth and you are ready for more
- You want to speed up your development process (so instead of looking at console output, you just see red/green)

#### Combine them

A great combination after finishing a warmup would be to:

- Write tests
- Delete and rewrite the solution
- Refactor several times

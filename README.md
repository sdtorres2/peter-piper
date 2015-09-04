Peter Piper Exercise
====================

[![Join the chat at https://gitter.im/unioncollege-webtech/peter-piper](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/unioncollege-webtech/peter-piper?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

In this exercise, we count how many times the letter ‘p’ occurs in Peter Piper’s
famous tongue twister:

> Peter Piper picked a peck of pickled peppers.  
> A peck of pickled peppers Peter Piper picked.  
> If Peter Piper picked a peck of pickled peppers,  
> Where's the peck of pickled peppers Peter Piper picked?  


Description
-----------
Update file [peter-piper.js](peter-piper.js#L22), adding the correct code to
count the number of times a “P” occurs in the Peter Piper tongue twister. Be 
sure to count **both** uppercase `P` and lowercase `p` characters.


Completing and submitting the assignment
----------------------------------------

- To begin, [**fork** this repository](https://guides.github.com/activities/forking/).
- [Create a new Cloud9 workspace](https://docs.c9.io/docs/setting-up-github-workspace) from your new repository.
  - Alternatively, you may [**clone**](http://gitref.org/creating/#clone) your new repository to your computer.
- Modify the files and [**commit**](http://gitref.org/basic/#commit) changes to complete your solution.
- Run `node test` to verify that all tests pass.
- [Push](http://gitref.org/remotes/#push)/sync the changes up to GitHub.
- [Create a pull request](https://help.github.com/articles/creating-a-pull-request) on the original repository to turn in the assignment.

You are also welcome commit, push, and create a pull request **before** you’ve 
completed your solution. You can ask questions or request feedback there in your
pull request. Just mention `@barberboy` in your comments to get my attention.


Extra Credit
------------

Want to work a bit harder? Try these variations:

- [Define a function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#Defining_functions)
  called `countOccurrences(string, char)`, which counts the number of times the
  character `char` occurs in the string `string`, then call it to find the
  number of `p`'s in the tongue twister, like:  
  `var counter = countOccurances(peterpiper, 'p');`.

- Instead of looking for the letter 'p', count the number of times the **word**
  `'peck'` occurs in the tongue twister.

- Try counting the occurrences of `'p'` without using a `for` loop. Take a look at
  the other [String.prototype methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#String_instances)
  for ideas.

Use [`git branch`](https://www.atlassian.com/git/tutorials/using-branches/git-branch)
(and `git checkout`) to work on the extra credit on separate branches.


References
----------

- [`string.length` property](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length)
- [`for` loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
- [`string.charAt(index)` method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt)
- [Equality operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Equality_operators)
- [Logical OR](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Logical_OR_())
- [Increment operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Increment_())
- [console.log](https://developer.mozilla.org/en-US/docs/Web/API/Console/log)

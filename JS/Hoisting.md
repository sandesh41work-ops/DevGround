What is closure in JavaScript?
Closure is a technique in Javascript , where inner functions remembers the 
state of the its lexical scope, means it can remember the states of the outer function.
About lexcial scope -  Every function has its own scoppe as well as outer scope and global scope.   

A closure is created when an inner function remembers and can access variables from its outer function scope, even after the outer function has finished execution.

Difference between var, let, and const : 
Basically var is hoisted -> it makes the variable declarations undefined first and then assigned the values later, hoisted variables and functions are used before declaration, thehy shows undefined output.
As well as const and let are the hoisted too but they did not allow used before declaration, somehow they get into temp dead zone.

“If let and const are also hoisted, then why can’t we access them before declaration?”
They ARE hoisted internally, but they remain in the Temporal Dead Zone until execution reaches their declaration line.

That’s the key concept.
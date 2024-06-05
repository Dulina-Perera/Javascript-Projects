"use strict";

let getA = (a) => a;
let sum = (a, b, c) => { return a + b + c };

var x = 5;
let square = _ => x * x;

console.log(getA(5));
console.log(sum(1, 2, 3));
console.log(square());

// Arrow functions do not have their own 'arguments' object. They inherit the 'arguments' object from the enclosing scope.
var x = function() {
    console.log(arguments[0]);
}
x(1, 2, 3);

var y = (...n) => {
    console.log(n[0]);
}
y(1, 2, 3);

// Arrow functions do not have their own 'this' value. They inherit the 'this' value from the enclosing scope.

var x = function() {
    this.val = 1;

    setTimeout(function() {
        this.val++;
        console.log(this.val);
    }, 1000);
}
var xx = new x();

var y = function() {
    this.val = 1;

    setTimeout(() => {
        this.val++;
        console.log(this.val);
    }, 1000);
}
var yy = new y();

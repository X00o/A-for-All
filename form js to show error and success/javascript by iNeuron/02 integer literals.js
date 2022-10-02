//integer literals

/* 0 
100
0xff => 255
0b, 0B  */
 

//Floating points literals

/* 1.9
3.14

3.03e23  => 3.03 * 10 to the power 23,
let billion = 1_000_000_000   < -- this is not production level its suppors only few browser.
 */

// Aritmetic

//*, -, +, /, %, **(exponantial=2^3 as 2**3) 
Math.pow(2, 9) //2^9 or 2**9
Math.pow(3, 1/3) // 3^1/3 or 3**1/3 or cube root of 3.
Math.round(0.6) /*  number
Returns a supplied numeric expression rounded to the nearest integer.
@param x — The value to be rounded to the nearest integer. */
Math.ceil(0.6) // its gives you maximum near by > value is 1
Math.floor(0.6 )// its gives you minimum near by > value is 0.
Math.abs(-5) /* number
Returns the absolute value of a number (the value without regard to whether it is positive or negative). For example, the absolute value of -5 is the same as the absolute value of 5. */
Math.min(1,2,3,6,7,4,8,9,10);/* number
Returns the smaller of a set of supplied numeric expressions.   1*/
Math.max(1,2,3,6,7,4,8,9,10); /* number
Returns the larger of a set of supplied numeric expressions.  10*/

Math.random(); /* Returns a pseudorandom number between 0 and 1. */

//ES6 new Methods
Math.cbrt(27) //Returns an implementation-dependent approximation to the cube root of number.
Math.hypot(3, 4)//eturns the square root of the sum of squares of its arguments.

Math.clz32(0xf); //Returns the number of leading zero bits in the 32-bit binary representation of a number.

//Infinity, no errors, just Infinity
// divide by 0; it's just NaN (not a number )

Number.MAX_SAFE_INTEGER
//9007199254740991
Number.isNaN() /* Returns a Boolean value that indicates whether a value is the reserved value NaN (not a number). Unlike the global isNaN(), Number.isNaN() doesn't forcefully convert the parameter to a number. Only values of the type number, that are also NaN, result in true. */
Number.parseInt("3.9")
/* console.log(Number.parseInt("3.9"))
output : 3 */



let statementOne = .3 - .2;
let statementTwo = .2 - .1

/* console.log(statementOne === statementTwo);
console.log(statementOne);
console.log(statementTwo); */
/* [Running] node "c:\Users\souvi\OneDrive\Desktop\javascript by iNeuron\02 integer literals.js"
false
0.09999999999999998
0.1
 */

//BigInt
let google = "1" + "0" . repeat(100)
// console.log(google);
/* 10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 */

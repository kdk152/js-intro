/*
//printLines();

function printLines() {
    console.log(secondLine);

    var firstLine = "I'm your first line!";
    console.log(firstLine);

    var secondLine = "I'm your second line!"
    console.log(secondLine);
}

//printLines();

*/

/*
1. What will be the result of the first console.log() and why?
-undefined
-variable is called before it's declared (but it's a var variable, so there's no error)

2. What will be the result of the second console.log() and why?
-I'm your first line!
-variable is called after it's declared

3. What will be the result of the third console.log() and why?
-I'm your second line!
-variable is called after it's declared

4. What will happen if we invoke function printLines() before its declared and why does this happen?
-print is the same as in the first case - beacuse of the hoisting
    -function is moved to the top of the document and called after the definition of function
*/

/*
//printLines();

var printLines = function () {
    console.log(secindLine);

    var firstLine = "I'm your first line!";
    console.log(firstLine);

    var secondLine = "I'm your second line!"
    console.log(secondLine);
}

//printLines();
*/

/*
1. What will happen when function expression is called before the function declaration and why?
-error
-hoisting isn't working with function expression
    -function is exactly where it is written in the code

2. What will happen when function expression is called after the function declaration and why?
-print is the same as in the case where it's working
    -function is declared and then called/invoked
*/

/*
const printLines = function() {
    console.log(secindLine);

    let firstLine = "I'm your first line!";
    console.log(firstLine);

    let secondLine = "I'm your second line!"
    console.log(secondLine);
}

printLines();

*/

/*
1. What is the main difference in this example?
-error
-let declared variable can't be invoked before declaration
*/

//2nd

/*
const madeOfGlass = function() {
    let thing = 'window';
    thing = 'glass';

    console.log(thing);
}

madeOfGlass();
*/

/*
1. What will be printed in the console and why this is possible with let?
-glass
-the value of let declared variable is allowed to be changed
*/

/*
const madeOfGlass = function() {
    const thing = 'window';
    thing = 'glass';

    console.log(thing);
}

madeOfGlass();
*/

/*
1. What will happen now and describe why?
-error
-the value of const declared variable isn't allowed to be changed
 */

//3rd

/*

const arrayOne = ['one', 'two', 'tree'];
const arrayTwo = ['tree', 'four', 'five'];

const arrayMachine = function(arrayOne, arrayTwo) {
    let finalArray = arrayOne.concat(arrayTwo);

    finalArray = new Set(finalArray);
    //finalArray = [...new Set(finalArray)];

    finalArray = Array.from(finalArray);
    console.log(finalArray);
}

arrayMachine(arrayOne, arrayTwo);

//let finalArray = [...firstArray, ...secondArray]; spread operator; elemente ispiše van

*/

const arrayOne = ['one', 'two', 'tree'];
const arrayTwo = ['tree', 'four', 'five'];

const arrayMachine = function(arrayOne, arrayTwo) {
    let finalArray = arrayOne.concat(arrayTwo);

    finalArray = new Set(finalArray);
    //finalArray = [...new Set(finalArray)];

    finalArray = Array.from(finalArray);
    console.log(finalArray);

    finalArray.sort();
    console.log(finalArray);

    finalArray.reverse();
    console.log(finalArray);
}

arrayMachine(arrayOne, arrayTwo);
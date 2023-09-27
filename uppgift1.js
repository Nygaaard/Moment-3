"use strict";


let numberOne = 1;
let numberTwo = 1;

for (let i = 0; i < 10; i++) {
    let next = numberOne + numberTwo;

    console.log(`${numberOne} + ${numberTwo} = ${next}`);

    numberOne = numberTwo;
    numberTwo = next;
}
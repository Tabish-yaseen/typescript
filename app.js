"use strict";
let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let sbtBtn = document.querySelector('button');
// add function
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === "string") {
        return num1 + '' + num2;
    }
    else {
        return +num1 + +num2;
    }
}
// arrays
let stringResult = [];
let numResult = [];
//object
function printResult(resultobj) {
    console.log(resultobj.val);
}
//button 
sbtBtn.addEventListener('click', () => {
    const num1value = num1.value;
    const num2value = num2.value;
    const numbervalue = add(+num1value, +num2value);
    numResult.push(numbervalue);
    const stringvalue = add(num1value, num2value);
    stringResult.push(stringvalue);
    printResult({ val: numbervalue, timestamp: new Date() });
    console.log(stringResult, numResult);
});
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('it worked');
    }, 1000);
});
myPromise.then((result) => {
    console.log(result.split('w'));
});

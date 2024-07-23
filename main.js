"use strict";
document.title = "project-js-16";
let container = document.getElementById("container");
let labels = document.getElementById("labels");
let inputs = document.getElementById("inputs");
let inputOne = document.getElementById("inputOne");
let inputTwo = document.getElementById("inputTwo");
let inputThree = document.getElementById("inputThree");
let calcBtn = document.getElementById("calcBtn");
document.body.style.cssText = `
    font-family: sans-serif;
    text-align: center;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
    font-size: 25px;
`;
container.style.cssText = `
    display: flex;
    gap: 40px;
    margin: 20px 0;
`;
labels.style.cssText = `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;
inputs.style.cssText = `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
inputOne.style.cssText = `
    margin: 3px 0;
    padding: 5px;
`;
inputTwo.style.cssText = `
    margin: 3px 0;
    padding: 5px;
`;
inputThree.style.cssText = `
    margin: 3px 0;
    padding: 5px;
`;
calcBtn.style.cssText = `
    padding: 10px 20px;
    color: white;
    background: #518428;
    border: 1px solid #518428;
    font-weight: bold;
    cursor: pointer;
`;
calcBtn.onclick = function () {
    let inputOneValue = inputOne.value;
    let inputTwoValue = inputTwo.value;
    let fraction;
    let result;
    if (inputOneValue != "" && inputTwoValue != "") {
        fraction = parseFloat(inputTwoValue) / 100;
        result = parseFloat(inputOneValue) * fraction;
        console.log(`result is ${result}`);
        inputThree.value = `$${result}`;
    }
};

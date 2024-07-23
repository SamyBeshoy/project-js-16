// Html Title
document.title = "project-js-16";

// Get Element From HTML and Declare Variable
let container = document.getElementById("container") as HTMLDivElement;
let labels = document.getElementById("labels") as HTMLDivElement;
let inputs = document.getElementById("inputs") as HTMLDivElement;
let inputOne = document.getElementById("inputOne") as HTMLInputElement;
let inputTwo = document.getElementById("inputTwo") as HTMLInputElement;
let inputThree = document.getElementById("inputThree") as HTMLInputElement;
let calcBtn = document.getElementById("calcBtn") as HTMLButtonElement;

// JS Style
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

// Operation
calcBtn.onclick = function () {
    let inputOneValue: any = inputOne.value;
    let inputTwoValue: any = inputTwo.value;
    let fraction: any;
    let result: any;
    if (inputOneValue != "" && inputTwoValue != "") {
        fraction  = parseFloat(inputTwoValue) / 100;
        result = parseFloat(inputOneValue) * fraction;
        console.log(`result is ${result}`);
        inputThree.value = `$${result}`;
    }
}
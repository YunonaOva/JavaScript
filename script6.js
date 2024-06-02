const firstInput = document.querySelector('.first-input');
const secondInput = document.querySelector('.second-input');
const triInput = document.querySelector('.tri-input');
const fourdInput = document.querySelector('.calculator-minus');
const btn = document.querySelector('.btn');
const result = document.querySelector('.result');


console.log(firstInput);
console.log(secondInput);
console.log(triInput);
console.log(fourdInput);
console.log(btn);
console.log(result);

let firstInputValue;
let secondInputValue;
let triInputValue;
let fourdInputValue;

btn.addEventListener('click', function() {
    firstInputValue = firstInput.value;
    secondInputValue = secondInput.value;
    ftriInputValue = triInput.value;
    fourdInputValue = fourdInput.value;

    let resultValue = firstInputValue + secondInputValue + triInputValue + fourdInputValue;

    result.innerHTML = resultValue;
})



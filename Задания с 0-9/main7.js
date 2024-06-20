const numberBtns = document.querySelectorAll('.calc-btn'); /*all-ВСЕ*/
const operationBtns = document.querySelectorAll('.calc-operation-btn');/*all-ВСЕ*/
const displayBlock = document.querySelector('.calc-display');/*нет all-так как 1 дисплей*/

for (let i = 0; i < numberBtns.length; i++) {
    numberBtns[i].addEventListener('click', function() {
        displayBlock.innerHTML = displayBlock.innerHTML + numberBtns[i].innerHTML;
    })
}

for (let i = 0; i < operationBtns.length - 1; i++) {
    operationBtns[i].addEventListener('click', function() {
        displayBlock.innerHTML = displayBlock.innerHTML + operationBtns[i].innerHTML;
    })
}

operationBtns[operationBtns.length - 1].addEventListener('click', function() {
    const result = eval(displayBlock.innerHTML);
    displayBlock.innerHTML = result;
})


/*numberBtns - массив цифр
addEventListener - обработчик событий клика, 
который при клике будет делать функция - отображать цифры */

/*Функция: displayBlock.innerHTML = displayBlock.innerHTML + numberBtns[i].innerHTML;
 - цифра на дисплей отображается друг за другом при нажатии 
 
 eval производит расчет (встроенная функция, которая выполняет JavaScript код, 
    представленный строкой. Когда `eval()` вызывается, строка, 
    переданная в качестве аргумента, интерпретируется как JavaScript код и 
    выполняется)
 */
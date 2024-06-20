const firm = {
    name: "Five",
    income: 1000000,
    expenses: 400000,
    worker: [    
    {
        name: "Петров",
        jobTitle: "Директор"
    },

    {
        name: "Иванова",
        jobTitle: "Бухгалтер"
    },

    {
        name: "Васильев",
        jobTitle: "Менеджер"
    },

    {
        name: "Егоров",
        jobTitle: "Разнорабочий"
    }
]
}


const firmName = document.querySelector('.firmaT');
const profitName = document.querySelector('.profit');
const expensesTName = document.querySelector('.expensesT');
const workersBlock = document.querySelector('.workers');


firmName.innerHTML = firm.name;
profitName.innerHTML = firm.income;
expensesTName.innerHTML = firm.expenses;

firm.worker.forEach(function(item) {
    const workerElement = 
    `<div>${item.jobTitle} - ${item.name}</div>`;
    workersBlock.insertAdjacentHTML("beforeend", workerElement);
})


/*const workerElement = `<div><div>${item.name}<div><div>${item.jobTitle}</div></div>`;
workersBlock.insertAdjacentHTML(`afterend`, workerElement);*/

const profitFirm = ((firm.income - firm.expenses) / 88.76).toFixed(2);
const profitFirmame = document.querySelector('.profitFirm');
profitFirmame.innerHTML = profitFirm;

const profitFirmRub = Math.floor(profitFirm * 88.76);
const profitFirmameRub = document.querySelector('.profitFirmRub');
profitFirmameRub.innerHTML = profitFirmRub;


/* Math.floor - округляет до целого! 
const profitFirm = Math.floor((firm.income - firm.expenses) / 88.76);
*/

/* toFixed(2) - округляет до целого и 2 знака после! 
const profitFirm = ((firm.income - firm.expenses) / 88.76).toFixed(2);;
*/